'use client';

import { continuousVisualizer } from "sound-visualizer";
import { useState, useRef, useEffect } from "react";
import styles from './page.module.scss';  
import Footer from "@/componenets/Footer";

export default function AudioRecorder() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const continuousCanvasRef = useRef(null);
  const audioStreamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const audioRef = useRef(null);
  const [percent, setPercent] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const visualizerOptions = {
    lineWidth: "thin",
    strokeColor: '#3ACBAE',
    slices: 120,  
    barRadius: 1,  
    canvasWidth: 960,
  };

  useEffect(() => {
    // Ensure this only runs on the client side
    if (typeof window !== 'undefined') {
      // Remove the import of wave-audio-path-player to avoid SSR issues
    }
  }, []);

  async function startRecording() {
    setPercent(null)
    if (isRecording) return;

    try {
      const audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioStreamRef.current = audioStream;
      setIsRecording(true);
      audioChunksRef.current = [];
      
      const mediaRecorder = new MediaRecorder(audioStream, { 
        mimeType: 'audio/webm' 
      });
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioUrl(audioUrl);
        audioChunksRef.current = [];
      };

      mediaRecorder.start();

      if (continuousCanvasRef.current) {
        const visualizer = continuousVisualizer(audioStream, continuousCanvasRef.current, visualizerOptions);

        if (visualizer?.start && visualizer?.stop) {
          visualizer.start();

          const stopHandler = () => {
            stopRecording();
            visualizer.stop();
            window.removeEventListener("click", stopHandler);
          };

          window.addEventListener("click", stopHandler);
        } else {
          console.error("Visualizer initialization failed.");
        }
      }
    } catch (err) {
      console.error("Failed to access microphone:", err);
    }
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click(); // Triggers the file input
  };

  function stopRecording() {
    if (!isRecording) return;

    mediaRecorderRef.current?.stop();
    audioStreamRef.current?.getTracks().forEach((track) => track.stop());
    setIsRecording(false);
  }

  function convertWebmToWav(webmBlob) {
    return new Promise((resolve, reject) => {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const fileReader = new FileReader();

      fileReader.onload = (event) => {
        const arrayBuffer = event.target.result;
        
        audioContext.decodeAudioData(arrayBuffer, (audioBuffer) => {
          const offlineContext = new OfflineAudioContext(
            audioBuffer.numberOfChannels,
            audioBuffer.length,
            audioBuffer.sampleRate
          );

          const source = offlineContext.createBufferSource();
          source.buffer = audioBuffer;

          const destination = offlineContext.destination;
          source.connect(destination);
          source.start();

          offlineContext.startRendering().then((renderedBuffer) => {
            const wavBlob = bufferToWave(renderedBuffer, renderedBuffer.length);
            resolve(wavBlob);
          }).catch(reject);
        }, reject);
      };

      fileReader.readAsArrayBuffer(webmBlob);
    });
  }

  // Utility function to convert AudioBuffer to WAV Blob
  function bufferToWave(abuffer, len) {
    const numOfChan = abuffer.numberOfChannels;
    const length = len * numOfChan * 2 + 44;
    const buffer = new ArrayBuffer(length);
    const view = new DataView(buffer);
    const channels = [];
    let sample;
    let offset = 0;
    let pos = 0;

    // Write WAV header
    function setUint16(data) {
      view.setUint16(pos, data, true);
      pos += 2;
    }
    function setUint32(data) {
      view.setUint32(pos, data, true);
      pos += 4;
    }

    setUint32(0x46464952);                         // "RIFF"
    setUint32(length - 8);                         // file length - 8
    setUint32(0x45564157);                         // "WAVE"

    setUint32(0x20746d66);                         // "fmt " chunk
    setUint32(16);                                 // length = 16
    setUint16(1);                                  // PCM (uncompressed)
    setUint16(numOfChan);
    setUint32(abuffer.sampleRate);
    setUint32(abuffer.sampleRate * 2 * numOfChan); // avg. bytes/sec
    setUint16(numOfChan * 2);                      // block-align
    setUint16(16);                                 // 16-bit (hardcoded)

    setUint32(0x61746164);                         // "data" - chunk
    setUint32(length - pos - 4);                   // chunk length

    // Write interleaved data
    for(let i = 0; i < abuffer.numberOfChannels; i++)
      channels.push(abuffer.getChannelData(i));

    while(pos < length) {
      for(let i = 0; i < numOfChan; i++) {             // interleave channels
        sample = Math.max(-1, Math.min(1, channels[i][offset])); // clamp
        sample = (0.5 + sample < 0 ? sample * 32768 : sample * 32767)|0; // scale to 16-bit signed int
        view.setInt16(pos, sample, true);          // update data chunk
        pos += 2;
      }
      offset++ // next source sample
    }

    // Return the WAV Blob
    return new Blob([buffer], { type: "audio/wav" });
  }

  const restartRecording = () =>{
    setAudioUrl(null)
    setPercent(null)
    setSelectedFile(null)
  }

  const handleFileUpload = () => {
    if (!selectedFile) {
      alert('Please select a file before uploading.');
      return;
    }
    
    const formData = new FormData();
    formData.append('fileToUpload', selectedFile);

    return fetch('http://student.nmit.edu.mn:8080/upload', {
      method: 'POST',
      body: formData,
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Upload failed');
      }
      return response.text();
    })
    .then(message => {
      console.log(message);
      setPercent((parseFloat(message.split(" ")[1])*100).toFixed(2));
    })
    .catch(error => {
      console.error('Error uploading file:', error);
      alert('File upload failed');
    });
  };

  function submitRecording() {
    if (!audioUrl) {
      console.error('No audio URL available');
      return;
    }
  
    fetch(audioUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.blob();
      })
      .then(blob => convertWebmToWav(blob))
      .then(wavBlob => {
        const formData = new FormData();
        const file = new File([wavBlob], "recording.wav", { type: "audio/wav" });
        formData.append("fileToUpload", file);
        return fetch('http://student.nmit.edu.mn:8080/upload', {
          method: 'POST',
          body: formData
        });
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Upload failed');
        }
        return response.text();
      })
      .then(message => {
        console.log(message);
        setPercent((parseFloat(message.split(" ")[1])*100).toFixed(2));
      })
      .catch(error => {
        console.error('Error uploading file:', error);
        alert('File upload failed');
      });
  }

  const togglePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <section className={styles.section}>
      {percent?(
        <section className={styles.container} style={{backgroundColor: percent<50? "#F8FFFE":"#FFF8F8"}}>
          <div className={styles.wrap}>
            <div className={styles.txt}>
            {percent<50? (<span style={{color: "#3ACBAE"}}>ХАТГАЛГААГҮЙ/NON-PNEUMONIA</span>):(<span style={{color: "#EA4335"}}>ХАТГАЛГААТАЙ/PNEUMONIA</span>)}
            </div>
            <div className={styles.percent}>
              Та хатгалгаатай байх магадлал {percent}% байна.
            </div>
          </div>
          <div className={styles.btns}>
            <button className={styles.rerecordButton} onClick={restartRecording}>
                Дахиж үзэх
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"/>
                </svg>
            </button>
          </div>
        </section>
      ):(
      <section className={styles.container}>
        <canvas ref={continuousCanvasRef} width={960} height={160} className={styles.canvas}></canvas>

        <div className={styles.btns}>
            {!isRecording ? (
                audioUrl ? (
                <button className={styles.rerecordButton} onClick={restartRecording}>
                    Дахиж үзэх
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"/>
                    </svg>
                </button>):(
                  <>
                <button className={styles.recordButton} onClick={startRecording}>
                    Бичиж эхлэх
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_781_1324)">
                        <path d="M11 20.625C8.44729 20.625 5.99913 19.6109 4.1941 17.8059C2.38906 16.0009 1.375 13.5527 1.375 11C1.375 8.44729 2.38906 5.99913 4.1941 4.1941C5.99913 2.38906 8.44729 1.375 11 1.375C13.5527 1.375 16.0009 2.38906 17.8059 4.1941C19.6109 5.99913 20.625 8.44729 20.625 11C20.625 13.5527 19.6109 16.0009 17.8059 17.8059C16.0009 19.6109 13.5527 20.625 11 20.625ZM11 22C13.9174 22 16.7153 20.8411 18.7782 18.7782C20.8411 16.7153 22 13.9174 22 11C22 8.08262 20.8411 5.28473 18.7782 3.22183C16.7153 1.15893 13.9174 0 11 0C8.08262 0 5.28473 1.15893 3.22183 3.22183C1.15893 5.28473 0 8.08262 0 11C0 13.9174 1.15893 16.7153 3.22183 18.7782C5.28473 20.8411 8.08262 22 11 22Z" fill="white"/>
                        <path d="M15.125 11C15.125 12.094 14.6904 13.1432 13.9168 13.9168C13.1432 14.6904 12.094 15.125 11 15.125C9.90598 15.125 8.85677 14.6904 8.08318 13.9168C7.3096 13.1432 6.875 12.094 6.875 11C6.875 9.90598 7.3096 8.85677 8.08318 8.08318C8.85677 7.3096 9.90598 6.875 11 6.875C12.094 6.875 13.1432 7.3096 13.9168 8.08318C14.6904 8.85677 15.125 9.90598 15.125 11Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_781_1324">
                        <rect width="22" height="22" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                </button>
                  <button className={styles.uploadButton} onClick={handleButtonClick}>
                    Файл байршуулах
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cloud-plus-fill" viewBox="0 0 16 16">
                      <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m.5 4v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 1 0"/>
                    </svg>
                  </button>
                  
                  <input 
                    type="file"
                    name="fileToUpload"
                    ref={fileInputRef} 
                    style={{ display: 'none' }} 
                    hidden
                    onChange={handleFileChange} 
                  />
                  
                  {selectedFile && (
                    <>
                    <div className={styles.btns}>
                      <button className={styles.uploadButton} onClick={handleFileUpload}>
                        Файл илгээх {selectedFile.name}
                      </button>
                    </div>
                    </>
                  )}
                </>
                )
            ) : (
            <button className={styles.stopButton} onClick={stopRecording}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-stop-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.5 5A1.5 1.5 0 0 0 5 6.5v3A1.5 1.5 0 0 0 6.5 11h3A1.5 1.5 0 0 0 11 9.5v-3A1.5 1.5 0 0 0 9.5 5z"/>
                </svg>
            </button>
            )}
            {audioUrl && !isRecording && (
            <div className={styles.playbackSection}>
                <audio ref={audioRef} src={audioUrl} type="audio/webm" />
                <button
                className={styles.playButton} 
                onClick={togglePlay}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
                    </svg>
                </button>
            </div>
            )}

            {audioUrl && !isRecording && (<button className={styles.submitButton} onClick={submitRecording} disabled={!audioUrl}>
                Илгээх
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 21V2L22 11.5L0 21ZM2.31579 17.4375L16.0368 11.5L2.31579 5.5625V9.71875L9.26316 11.5L2.31579 13.2812V17.4375Z" fill="#E8EAED"/>
                </svg>
            </button>)}
        </div>
      </section>
      )}
      <section className={styles.textcontainer}>
        <p className={styles.warning}>
          <span>1</span>
          Бичиж эхлэх товчийг дарна.
        </p>
        <p className={styles.warning}>
          <span>2</span>
          Эхлэсний дараа 4 удаа ханиана.
        </p>
        <p className={styles.warning}>
          <span>3</span>
          Дууссаны дараа илгээх товчийг дарна.
        </p>
        <p className={styles.warning}>
          <span>4</span>
          Хариу 10-15 секундийн дотор гарна.
        </p>
      </section>
    <Footer/>
    </section>
  );
}
