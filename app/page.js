'use client'
import { useState } from "react";
import React from "react";

import Image from "next/image";
import styles from "./page.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Footer from "@/componenets/Footer";
import Link from "next/link";

export default function Home() {
  const [selectedOption, setSelectedOption] = useState("B2C");
  return (
    <main className={styles.main}>
      <div className={styles.bg_container}>
        <div className={styles.bg1}>
          <svg width="586" height="427" viewBox="0 0 586 427" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M272.332 16.781C320.188 -0.743029 372.615 -6.39304 421.259 8.80504C483.661 28.3017 560.873 51.3162 581.505 113.378C602.126 175.404 546.858 235.532 515.742 293.009C490.357 339.899 466.288 391.685 418.287 414.869C373.355 436.57 319.975 425.395 272.332 410.57C234.622 398.836 216.672 355.886 180.18 340.779C123.791 317.435 34.5089 354.485 6.20287 300.395C-20.1762 249.987 43.8096 194.584 81.2723 151.774C108.081 121.138 152.729 118.452 185.973 94.9632C218.48 71.9954 234.961 30.4659 272.332 16.781Z" fill="#0ACBAE"/>
          </svg>
        </div>
        <div className={styles.bg2}>
          <svg width="392" height="416" viewBox="0 0 392 416" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M171.105 0.107124C231.619 -2.20323 286.526 33.1536 327.865 77.4756C367.726 120.214 401.224 177.143 389.699 234.476C379.116 287.122 316.759 304.771 275.324 338.856C240.891 367.18 215.254 408.254 171.105 414.291C121.813 421.031 68.1505 408.028 33.9297 371.862C0.301373 336.323 2.35594 283.42 0.95918 234.476C-0.4998 183.353 -4.17297 130.372 25.8574 89.0059C60.5453 41.2245 112.162 2.35748 171.105 0.107124Z" fill="#0ACBAE"/>
          </svg>
        </div>
        <div className={styles.bg3}>
          <svg width="529" height="564" viewBox="0 0 529 564" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M200.9 4.3691C273.172 -12.5127 347.369 21.4948 401.247 72.538C467.38 135.191 559.11 223.43 517.86 304.654C476.037 387.008 340.348 309.191 258.92 352.791C166.912 402.054 140.62 597.509 43.8326 558.463C-50.8407 520.27 35.5697 368.807 47.2185 267.387C52.4271 222.038 68.3014 184.342 91.3297 144.931C122.862 90.9653 140.036 18.5861 200.9 4.3691Z" fill="#0ACBAE"/>
          </svg>
        </div>
        <div className={styles.bg4}>
          <svg width="676" height="579" viewBox="0 0 676 579" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M314.434 4.76034C417.234 -15.6895 525.819 31.5718 593.582 111.536C663.625 194.191 696.148 310.827 660.496 413.135C627.99 506.418 528.358 558.178 431.383 576.995C358.735 591.091 305.468 522.945 236.805 495.347C155.452 462.649 29.2659 488.936 3.6601 405.081C-21.9158 321.323 93.0452 269.601 146.748 200.424C202.165 129.039 225.8 22.3921 314.434 4.76034Z" fill="#0ACBAE"/>
          </svg>
        </div>
        <div className={styles.bg5}>

        </div>
      </div>
      <div className={styles.root}>
        <section className={styles.hero_section}>
          <div className={styles.hero_container}>
            <div className={styles.lt}>
              <div className={styles.c}>
                <div className={styles.recorder}>
                  <Image
                    src={"/images/sound-wave.svg"}
                    className={styles.wave}
                    width={477}
                    height={66}
                    alt=""
                  />
                  <div className={styles.bblur}>
                    <div className={styles.icon}>
                      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_458_459)">
                      <path d="M4.57895 8.68457C4.74645 8.68457 4.9071 8.75111 5.02554 8.86956C5.14399 8.988 5.21053 9.14864 5.21053 9.31615V10.5793C5.21053 11.9193 5.74286 13.2045 6.69041 14.1521C7.63796 15.0996 8.92312 15.6319 10.2632 15.6319C11.6032 15.6319 12.8884 15.0996 13.8359 14.1521C14.7835 13.2045 15.3158 11.9193 15.3158 10.5793V9.31615C15.3158 9.14864 15.3823 8.988 15.5008 8.86956C15.6192 8.75111 15.7799 8.68457 15.9474 8.68457C16.1149 8.68457 16.2755 8.75111 16.394 8.86956C16.5124 8.988 16.5789 9.14864 16.5789 9.31615V10.5793C16.579 12.145 15.9974 13.6549 14.9471 14.8161C13.8968 15.9773 12.4526 16.7069 10.8947 16.8635V19.4214H14.6842C14.8517 19.4214 15.0124 19.488 15.1308 19.6064C15.2493 19.7248 15.3158 19.8855 15.3158 20.053C15.3158 20.2205 15.2493 20.3811 15.1308 20.4996C15.0124 20.618 14.8517 20.6846 14.6842 20.6846H5.84211C5.6746 20.6846 5.51396 20.618 5.39551 20.4996C5.27707 20.3811 5.21053 20.2205 5.21053 20.053C5.21053 19.8855 5.27707 19.7248 5.39551 19.6064C5.51396 19.488 5.6746 19.4214 5.84211 19.4214H9.63158V16.8635C8.07371 16.7069 6.62953 15.9773 5.57922 14.8161C4.52891 13.6549 3.94735 12.145 3.94737 10.5793V9.31615C3.94737 9.14864 4.01391 8.988 4.13235 8.86956C4.2508 8.75111 4.41144 8.68457 4.57895 8.68457Z" fill="white"/>
                      <path d="M12.7895 10.5794C12.7895 11.2494 12.5233 11.892 12.0495 12.3658C11.5758 12.8395 10.9332 13.1057 10.2632 13.1057C9.59314 13.1057 8.95056 12.8395 8.47678 12.3658C8.00301 11.892 7.73684 11.2494 7.73684 10.5794V4.2636C7.73684 3.59357 8.00301 2.951 8.47678 2.47722C8.95056 2.00344 9.59314 1.73728 10.2632 1.73728C10.9332 1.73728 11.5758 2.00344 12.0495 2.47722C12.5233 2.951 12.7895 3.59357 12.7895 4.2636V10.5794ZM10.2632 0.474121C9.25813 0.474121 8.29426 0.873368 7.5836 1.58403C6.87293 2.2947 6.47369 3.25856 6.47369 4.2636V10.5794C6.47369 11.5844 6.87293 12.5483 7.5836 13.2589C8.29426 13.9696 9.25813 14.3689 10.2632 14.3689C11.2682 14.3689 12.2321 13.9696 12.9427 13.2589C13.6534 12.5483 14.0526 11.5844 14.0526 10.5794V4.2636C14.0526 3.25856 13.6534 2.2947 12.9427 1.58403C12.2321 0.873368 11.2682 0.474121 10.2632 0.474121Z" fill="white"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_458_459">
                      <rect width="20.2105" height="20.2105" fill="white" transform="translate(0.157894 0.474121)"/>
                      </clipPath>
                      </defs>
                      </svg>
                    </div>
                  </div>
                </div>
                <ul className={styles.ul}>
                    <li><span>80% амжилттай</span></li>
                    <li><span>Дата дээр суурилсан</span></li>
                </ul>
              </div>
            </div>
            <div className={styles.rt}>
              <div className={styles.blur}></div>
              <h1 className={styles.htitle}>
                AI-POWERED<br/>
                <span>PNEUMONIA</span><br/>
                DETECTION
              </h1>
              <div className={styles.btns}>
                <Link href={"/recorder"} className={styles.btn1}>
                Үнэгүй турших
                </Link>
                <Link href={"/"} className={styles.btn2}>
                Заавар үзэх
                </Link>
              </div>
              <p className={styles.description}>
                Ханиалгын дуугаар хатгалгаа өвчнийг эрт илрүүлж, хэрэглэгчдийн эрүүл мэндийг хамгаалахад дэмжлэг болох.
              </p>
              <ul className={styles.ul}>
                <li><span>87% амжилттай</span></li>
                <li><span>Дата дээр суурилсан</span></li>
              </ul>
            </div>
          </div>
        </section>
        <section className={styles.news_section}>
          <div className={styles.title}>
            <h2>
              Мэдээлэл
            </h2>
            <a href="/">
              Илүү үзэх
            </a>
          </div>
          <div className={styles.cards}>
            <div className={styles.card}>
              <Image
                src={"/images/img1.avif"}
                width={280}
                height={1}
                className={styles.img}
                alt=""
              />
              <div className={styles.txt}>
                <div className={styles.tags}>
                  <div className={styles.tag}>
                    Covid-19
                  </div>
                </div>
                <div className={styles.description}>
                  <div className={styles.title}>
                    Хүүхдийн уушгины хатгалгаа халдвараар эмчлэгдээд гарах үеийн зөвлөмж?
                  </div>
                  <p className={styles.date}>
                    2024.12.4 • <span>6 минут</span>
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <Image
                src={"/images/img2.avif"}
                width={280}
                height={1}
                className={styles.img}
                alt=""
              />
              <div className={styles.txt}>
                <div className={styles.tags}>
                  <div className={styles.tag}>
                    Covid-19
                  </div>
                </div>
                <div className={styles.description}>
                  <div className={styles.title}>
                    Хатгалгаа туссан эсэхээ хэрхэн мэдэх вэ?
                  </div>
                  <p className={styles.date}>
                   2024.12.3 • <span>5 минут</span>
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <Image
                src={"/images/img3.avif"}
                width={280}
                height={1}
                className={styles.img}
                alt=""
              />
              <div className={styles.txt}>
                <div className={styles.tags}>
                  <div className={styles.tag}>
                    Covid-19
                  </div>
                </div>
                <div className={styles.description}>
                  <div className={styles.title}>
                  Уушгины хатгалгаа өвчний шинж тэмдгүүд, хэрхэн эмчлэх вэ?
                  </div>
                  <p className={styles.date}>
                    2024.12.2 • <span>7 минут</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className={styles.pricing_section}>
          <h1 className={styles.title}>Pricing</h1>

          <div className={styles.select}>
            <div
              className={`${styles.b2c} ${selectedOption === "B2C" ? styles.active : ""}`}
              onClick={() => setSelectedOption("B2C")}
            >
              B2C
            </div>
            <div
              className={`${styles.b2b} ${selectedOption === "B2B" ? styles.active : ""}`}
              onClick={() => setSelectedOption("B2B")}
            >
              B2B
            </div>
          </div>

          <div className={styles.content}> 
            {selectedOption === "B2C" ? (
              <div className={styles.cards}>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={16}
                  pagination={{
                    clickable: true,
                  }}
                  breakpoints={{
                    480: {
                      slidesPerView: 1,
                      spaceBetween: 16,
                    },
                    680: {
                      slidesPerView: 2,
                      spaceBetween: 16,
                    }
                  }}
                  modules={[Pagination]}
                  className={styles.swiper}
                >
                  <SwiperSlide>
                    <div className={styles.card}>
                      <h2 className={styles.title}>Rapid Analysis </h2>
                      <p className={styles.description}>
                      For users who need occasional diagnostics.
                      </p>
                      <div className={styles.price}>6,000</div>
                      <ul className={styles.features}>
                        <li className={styles.feature}>
                        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect y="0.0195312" width="14" height="14" rx="7" fill="#0ACBAE"/>
                          <path d="M9.87446 5.13745C10.0418 5.29468 10.0418 5.55002 9.87446 5.70724L6.44627 8.92725C6.27888 9.08448 6.00703 9.08448 5.83964 8.92725L4.12554 7.31725C3.95815 7.16002 3.95815 6.90468 4.12554 6.74746C4.29294 6.59023 4.56478 6.59023 4.73217 6.74746L6.14362 8.07194L9.26917 5.13745C9.43656 4.98022 9.7084 4.98022 9.87579 5.13745H9.87446Z" fill="#3F3F3F" stroke="#3F3F3F" strokeWidth="0.5"/>
                        </svg>
                        <label className={styles.labels}>3 uses</label>
                        </li>
                        <div className={styles.ln}>
                        </div>
                        <li className={styles.feature}>
                        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect y="0.0195312" width="14" height="14" rx="7" fill="#0ACBAE"/>
                          <path d="M9.87446 5.13745C10.0418 5.29468 10.0418 5.55002 9.87446 5.70724L6.44627 8.92725C6.27888 9.08448 6.00703 9.08448 5.83964 8.92725L4.12554 7.31725C3.95815 7.16002 3.95815 6.90468 4.12554 6.74746C4.29294 6.59023 4.56478 6.59023 4.73217 6.74746L6.14362 8.07194L9.26917 5.13745C9.43656 4.98022 9.7084 4.98022 9.87579 5.13745H9.87446Z" fill="#3F3F3F" stroke="#3F3F3F" strokeWidth="0.5"/>
                        </svg>
                        <label className={styles.labels}>2,000₮ per test</label>
                        </li>
                        <div className={styles.ln}>
                        </div>
                        <li className={styles.feature}>
                        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect y="0.0195312" width="14" height="14" rx="7" fill="#0ACBAE"/>
                          <path d="M9.87446 5.13745C10.0418 5.29468 10.0418 5.55002 9.87446 5.70724L6.44627 8.92725C6.27888 9.08448 6.00703 9.08448 5.83964 8.92725L4.12554 7.31725C3.95815 7.16002 3.95815 6.90468 4.12554 6.74746C4.29294 6.59023 4.56478 6.59023 4.73217 6.74746L6.14362 8.07194L9.26917 5.13745C9.43656 4.98022 9.7084 4.98022 9.87579 5.13745H9.87446Z" fill="#3F3F3F" stroke="#3F3F3F" strokeWidth="0.5"/>
                        </svg>
                        <label className={styles.labels}>No registration needed</label>
                        </li>
                      </ul>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={styles.card}>
                      <h2 className={styles.title}>Value Pack</h2>
                      <p className={styles.description}>
                      Families or individuals with moderate health needs.
                      </p>
                      <div className={styles.price}>40,000</div>
                      <ul className={styles.features}>
                        <li className={styles.feature}>
                        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect y="0.0195312" width="14" height="14" rx="7" fill="#0ACBAE"/>
                          <path d="M9.87446 5.13745C10.0418 5.29468 10.0418 5.55002 9.87446 5.70724L6.44627 8.92725C6.27888 9.08448 6.00703 9.08448 5.83964 8.92725L4.12554 7.31725C3.95815 7.16002 3.95815 6.90468 4.12554 6.74746C4.29294 6.59023 4.56478 6.59023 4.73217 6.74746L6.14362 8.07194L9.26917 5.13745C9.43656 4.98022 9.7084 4.98022 9.87579 5.13745H9.87446Z" fill="#3F3F3F" stroke="#3F3F3F" strokeWidth="0.5"/>
                        </svg>
                        <label className={styles.labels}>25 uses</label>
                        </li>
                        <div className={styles.ln}>
                        </div>
                        <li className={styles.feature}>
                        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect y="0.0195312" width="14" height="14" rx="7" fill="#0ACBAE"/>
                          <path d="M9.87446 5.13745C10.0418 5.29468 10.0418 5.55002 9.87446 5.70724L6.44627 8.92725C6.27888 9.08448 6.00703 9.08448 5.83964 8.92725L4.12554 7.31725C3.95815 7.16002 3.95815 6.90468 4.12554 6.74746C4.29294 6.59023 4.56478 6.59023 4.73217 6.74746L6.14362 8.07194L9.26917 5.13745C9.43656 4.98022 9.7084 4.98022 9.87579 5.13745H9.87446Z" fill="#3F3F3F" stroke="#3F3F3F" strokeWidth="0.5"/>
                        </svg>
                        <label className={styles.labels}>1,500₮ per test</label>
                        </li>
                        <div className={styles.ln}>
                        </div>
                        <li className={styles.feature}>
                        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect y="0.0195312" width="14" height="14" rx="7" fill="#0ACBAE"/>
                          <path d="M9.87446 5.13745C10.0418 5.29468 10.0418 5.55002 9.87446 5.70724L6.44627 8.92725C6.27888 9.08448 6.00703 9.08448 5.83964 8.92725L4.12554 7.31725C3.95815 7.16002 3.95815 6.90468 4.12554 6.74746C4.29294 6.59023 4.56478 6.59023 4.73217 6.74746L6.14362 8.07194L9.26917 5.13745C9.43656 4.98022 9.7084 4.98022 9.87579 5.13745H9.87446Z" fill="#3F3F3F" stroke="#3F3F3F" strokeWidth="0.5"/>
                        </svg>
                        <label className={styles.labels}>Record history</label>
                        </li>
                      </ul>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            ) : (
              <div className={styles.cards}>
              <Swiper
                slidesPerView={1}
                spaceBetween={16}
                pagination={{
                  clickable: true,
                }}
                // breakpoints={{
                //   480: {
                //     slidesPerView: 1,
                //     spaceBetween: 16,
                //   }
                // }}
                modules={[Pagination]}
                className={styles.swiper}
              >
                <SwiperSlide>
                <div className={styles.card}>
                  <h2 className={styles.title}>Elite</h2>
                  <p className={styles.description}>
                  For educators, aimed at kindergarten and elementary school students.
                  </p>
                  <div className={styles.price}> 200,000<span className={styles.year}>/year</span></div>
                  <ul className={styles.features}>
                    <li className={styles.feature}>
                    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect y="0.0195312" width="14" height="14" rx="7" fill="#0ACBAE"/>
                      <path d="M9.87446 5.13745C10.0418 5.29468 10.0418 5.55002 9.87446 5.70724L6.44627 8.92725C6.27888 9.08448 6.00703 9.08448 5.83964 8.92725L4.12554 7.31725C3.95815 7.16002 3.95815 6.90468 4.12554 6.74746C4.29294 6.59023 4.56478 6.59023 4.73217 6.74746L6.14362 8.07194L9.26917 5.13745C9.43656 4.98022 9.7084 4.98022 9.87579 5.13745H9.87446Z" fill="#3F3F3F" stroke="#3F3F3F" strokeWidth="0.5"/>
                    </svg>
                    <label className={styles.labels}>200 time use</label>
                    </li>
                    <div className={styles.ln}>
                    </div>
                    <li className={styles.feature}>
                    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect y="0.0195312" width="14" height="14" rx="7" fill="#0ACBAE"/>
                      <path d="M9.87446 5.13745C10.0418 5.29468 10.0418 5.55002 9.87446 5.70724L6.44627 8.92725C6.27888 9.08448 6.00703 9.08448 5.83964 8.92725L4.12554 7.31725C3.95815 7.16002 3.95815 6.90468 4.12554 6.74746C4.29294 6.59023 4.56478 6.59023 4.73217 6.74746L6.14362 8.07194L9.26917 5.13745C9.43656 4.98022 9.7084 4.98022 9.87579 5.13745H9.87446Z" fill="#3F3F3F" stroke="#3F3F3F" strokeWidth="0.5"/>
                    </svg>
                    <label className={styles.labels}>1,000₮ per test</label>
                    </li>
                    <div className={styles.ln}>
                    </div>
                    <li className={styles.feature}>
                    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect y="0.0195312" width="14" height="14" rx="7" fill="#0ACBAE"/>
                      <path d="M9.87446 5.13745C10.0418 5.29468 10.0418 5.55002 9.87446 5.70724L6.44627 8.92725C6.27888 9.08448 6.00703 9.08448 5.83964 8.92725L4.12554 7.31725C3.95815 7.16002 3.95815 6.90468 4.12554 6.74746C4.29294 6.59023 4.56478 6.59023 4.73217 6.74746L6.14362 8.07194L9.26917 5.13745C9.43656 4.98022 9.7084 4.98022 9.87579 5.13745H9.87446Z" fill="#3F3F3F" stroke="#3F3F3F" strokeWidth="0.5"/>
                    </svg>
                    <label className={styles.labels}>Support for teachers and nurses</label>
                    </li>
                  </ul>
                </div>
                </SwiperSlide>
                </Swiper>
              </div>
            )}
          </div>    
        </section>
        <section className={styles.app_section}>
          <div className={styles.box}>
            <div className={styles.bblur}>
            </div>
            <div className={styles.logo}>
              <Image
                src={"/images/favicon.svg"}
                width={48}
                height={48}
                alt="favicon"
                className={styles.fav}
              />
              <h4 className={styles.title}>
                AeroMed
              </h4>
            </div>
            <Image
              src={"/images/mobile-app-3d.png"}
              width={1254/2}
              height={1956/2}
              alt="aeromed app"
              className={styles.img}
            />
            <div className={styles.wrap}>
              <Image
                src={"/images/app-qr.svg"}
                width={182}
                height={182}
                alt="aeromed app"
                className={styles.qr}
              />
            <div className={styles.download}>
              <h2 className={styles.subtitle}>
                Тун удахгүй:
              </h2>
              <div className={styles.btns}>
                <button className={styles.dbtn}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_622_667)">
                  <path d="M13.9775 0.0100088C13.935 -0.0374912 12.4037 0.0287588 11.0712 1.47501C9.73875 2.92001 9.94375 4.57751 9.97375 4.62001C10.0037 4.66251 11.8737 4.72876 13.0675 3.04751C14.2612 1.36626 14.02 0.0587588 13.9775 0.0100088ZM18.12 14.6763C18.06 14.5563 15.2137 13.1338 15.4787 10.3988C15.7437 7.66376 17.5725 6.91251 17.6012 6.83126C17.63 6.75001 16.855 5.84376 16.0337 5.38501C15.4306 5.06189 14.7634 4.8766 14.08 4.84251C13.945 4.83876 13.4762 4.72376 12.5125 4.98751C11.8775 5.16126 10.4462 5.72376 10.0525 5.74626C9.6575 5.76876 8.4825 5.09376 7.21875 4.91501C6.41 4.75876 5.5525 5.07876 4.93875 5.32501C4.32625 5.57001 3.16125 6.26751 2.34625 8.12126C1.53125 9.97376 1.9575 12.9088 2.2625 13.8213C2.5675 14.7338 3.04375 16.2263 3.85375 17.3163C4.57375 18.5463 5.52875 19.4 5.9275 19.69C6.32625 19.98 7.45125 20.1725 8.23125 19.7738C8.85875 19.3888 9.99125 19.1675 10.4387 19.1838C10.885 19.2 11.765 19.3763 12.6662 19.8575C13.38 20.1038 14.055 20.0013 14.7312 19.7263C15.4075 19.45 16.3862 18.4025 17.5287 16.2788C17.9621 15.2913 18.1592 14.7571 18.12 14.6763Z" fill="white"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_622_667">
                  <rect width="20" height="20" fill="white"/>
                  </clipPath>
                  </defs>
                  </svg>
                  AppStore
                </button>
                <button disabled className={styles.dbtn}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_622_684)">
                  <path d="M17.7775 11.7176C19.0737 10.9551 19.0737 9.04637 17.7775 8.28262L14.41 6.30012L10.4 10.0001L14.4088 13.7001L17.7775 11.7176ZM13.2837 14.3626L9.47875 10.8501L1.2875 18.4126C1.53875 19.6989 2.9875 20.4251 4.16625 19.7314L13.2837 14.3626ZM1.25 16.7451V3.25387L8.5575 10.0001L1.25 16.7451ZM1.2875 1.58762L9.47875 9.15012L13.2837 5.63762L4.16625 0.268866C2.9875 -0.426134 1.53875 0.300116 1.2875 1.58762Z" fill="white"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_622_684">
                  <rect width="20" height="20" fill="white"/>
                  </clipPath>
                  </defs>
                  </svg>
                  Google Play
                </button>
              </div>
            </div>
            </div>
          </div>
        </section>
        {/* <section className={styles.contact_section}>
          <div className={styles.box}>
            <div className={styles.contact}>
              <form action={"https://formsubmit.co/se22d50@nmit.edu.mn"} method="post">
                <input type="hidden" hidden name="_next" value="https://aeromed.vercel.app"/>
                <input type="hidden" hidden name="_captcha" value="false"/>
                <input type="hidden" hidden name="_template" value="table"/>
                <h2>
                  Contact
                </h2>
              </form>
            </div>
            <Image
              src={"/images/3d-logo.jpg"}
              width={1920/2}
              height={1080/2}
              alt=""
              className={styles.img}
            />
            <div></div>
          </div>
        </section> */}
        <Footer/>
      </div>
    </main>
  );
}
