'use client'

import { continuousVisualizer } from "sound-visualizer";
import { useState, useRef, useEffect } from "react";
import 'wave-audio-path-player'
import styles from './page.module.scss';  

export default function AudioRecorder() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const continuousCanvasRef = useRef(null);
  const audioStreamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const audioRef = useRef(null);
  const [result, setResult] = useState(null);

  const visualizerOptions = {
    lineWidth: "thin",
    strokeColor: '#3ACBAE',
    slices: 120,  
    barRadius: 1,  
    lineWidth: "thin",
    canvasWidth: 960,
  };

  async function startRecording() {
    if (isRecording) return;

    try {
      
      const audioStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      audioStreamRef.current = audioStream;
      setIsRecording(true);
      audioChunksRef.current = [];  
      
      const mediaRecorder = new MediaRecorder(audioStream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioUrl(audioUrl);  
        audioChunksRef.current = [];  
      };

      mediaRecorder.start();
      
      if (continuousCanvasRef.current) {
        const visualizer = continuousVisualizer(audioStream, continuousCanvasRef.current, visualizerOptions);

        if (visualizer && typeof visualizer.start === "function" && typeof visualizer.stop === "function") {
          visualizer.start();  

          const stopHandler = () => {
            mediaRecorder.stop();  
            audioStream.getTracks().forEach((track) => track.stop());  
            setIsRecording(false);
            visualizer.stop();  
          };

          window.addEventListener("click", stopHandler);  
        } else {
          console.error("Visualizer is not initialized correctly.");
        }
      }
    } catch (err) {
      console.error("Failed to access microphone:", err);
    }
  }

  function stopRecording() {
    if (!isRecording) return;

    mediaRecorderRef.current.stop();
    audioStreamRef.current.getTracks().forEach((track) => track.stop());
    setIsRecording(false);
  }

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
      .then(blob => {
        const formData = new FormData();
        const file = new File([blob], "recording.wav", { type: "audio/wav" });
        formData.append("file", file);
  
        return fetch('/api/upload', {
          method: 'POST',
          body: formData
        });
      })
      .then(response => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error('Upload failed');
        }
      })
      .then(message => {
        console.log(message);
        alert(message)
        // alert('File uploaded successfully');
      })
      .catch(error => {
        console.error('Error uploading file:', error);
        alert('File upload failed');
      });
  }
  const togglePlay = () => {
      audioRef.current.play();
  };

  return (
    <section className={styles.section}>
      <section className={styles.container}>
        <canvas ref={continuousCanvasRef} width={960} height={160} className={styles.canvas}></canvas>

        <div className={styles.btns}>
            {!isRecording ? (
                audioUrl ? (
                <button className={styles.rerecordButton} onClick={startRecording}>
                    Дахиж бичих
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"/>
                    </svg>
                </button>):(
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
                )
            ) : (
            <button className={styles.stopButton} onClick={stopRecording}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-stop-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.5 5A1.5 1.5 0 0 0 5 6.5v3A1.5 1.5 0 0 0 6.5 11h3A1.5 1.5 0 0 0 11 9.5v-3A1.5 1.5 0 0 0 9.5 5z"/>
                </svg>
            </button>
            )}

            {audioUrl && !isRecording && (
            <div className={styles.playbackSection}>
                <audio ref={audioRef} src={audioUrl} type="audio/wav" />
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
    </section>
  );
}
