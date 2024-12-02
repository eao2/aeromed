'use client'
import { useState } from "react";
import React from "react";

import Image from "next/image";
import styles from "./page.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function Home() {
  const [selectedOption, setSelectedOption] = useState("B2C");
  return (
    <main className={styles.main}>
      <section className={styles.hero_section}>
        <div className={styles.hero_container}>
          <div className={styles.lt}>
            <div className={styles.c}>
              <div className={styles.recorder}>
                <svg className={styles.vawe} width="477" height="66" viewBox="0 0 477 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M246.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M250.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M254.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M258.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M262.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M266.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M270.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M274.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M278.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M282.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M286.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M290.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M294.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M298.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M302.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M306.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M310.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M314.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M318.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M322.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M326.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M330.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M334.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M338.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M342.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M346.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M350.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M354.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M358.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M362.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M366.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M370.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M374.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M378.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M382.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M386.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M390.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M394.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M398.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M402.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M406.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M410.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M414.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M418.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M422.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M426.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M430.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M434.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M438.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M442.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M446.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M450.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M454.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M458.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M462.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M466.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M470.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M474.842 34.4473V31.4473" stroke="#3ACBAE" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M2 55.5V10.5" stroke="#3ACBAE" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M7 18V48" stroke="#3ACBAE" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M12 48V18" stroke="#3ACBAE" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M17 63V3" stroke="#3ACBAE" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M22 3V63" stroke="#3ACBAE" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M27 40.5V25.5" stroke="#3ACBAE" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M32 25.5V40.5" stroke="#3ACBAE" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M37 52V14" stroke="#3ACBAE" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M42 10.5V55.5" stroke="#3ACBAE" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M47 44V22" stroke="#3ACBAE" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M52 37V29" stroke="#3ACBAE" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M57 63V3" stroke="#3ACBAE" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M62 14V52" stroke="#3ACBAE" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M67 48V18" stroke="#3ACBAE" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M72 55.5V10.5" stroke="#3ACBAE" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M77 25.5V40.5" stroke="#3ACBAE" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M82 37V29" stroke="#3ACBAE" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M87 7V59" stroke="#3ACBAE" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M92 40.5V25.5" stroke="#3ACBAE" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M97 59V7" stroke="#3ACBAE" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M102 18V48" stroke="#3ACBAE" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M107 52V14" stroke="#3ACBAE" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M112 44V22" stroke="#3ACBAE" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M117 55.5V10.5" stroke="#3ACBAE" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M122 3V63" stroke="#3ACBAE" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M127 48V18" stroke="#3ACBAE" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M132 29V37" stroke="#3ACBAE" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M137 37V29" stroke="#3ACBAE" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M142 10.5V55.5" stroke="#3ACBAE" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M147 44V22" stroke="#3ACBAE" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M152 63V3" stroke="#3ACBAE" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M157 18V48" stroke="#3ACBAE" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M162 52V14" stroke="#3ACBAE" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M167 25.5V40.5" stroke="#3ACBAE" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M172 40.5V25.5" stroke="#3ACBAE" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M177 7V59" stroke="#3ACBAE" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M182 59V7" stroke="#3ACBAE" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M187 14V52" stroke="#3ACBAE" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M192 55.5V10.5" stroke="#3ACBAE" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M197 37V29" stroke="#3ACBAE" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M202 44V22" stroke="#3ACBAE" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M207 3V63" stroke="#3ACBAE" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M212 40.5V25.5" stroke="#3ACBAE" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M217 25.5V40.5" stroke="#3ACBAE" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M222 52V14" stroke="#3ACBAE" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M227 10.5V55.5" stroke="#3ACBAE" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M232 63V3" stroke="#3ACBAE" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M237 44V22" stroke="#3ACBAE" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M242 37V29" stroke="#3ACBAE" strokeWidth="3" strokeLinecap="round"/>
                </svg>
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
              <button className={styles.btn1}>
                Try Free
              </button>
              <button className={styles.btn2}>
                Watch Demo
              </button>
            </div>
            <p className={styles.description}>
              Ханиалгын дуугаар хатгалгаа өвчнийг эрт илрүүлж, хэрэглэгчдийн эрүүл мэндийг хамгаалахад дэмжлэг болох.
            </p>
            <ul className={styles.ul}>
              <li><span>80% амжилттай</span></li>
              <li><span>Дата дээр суурилсан</span></li>
            </ul>
          </div>
        </div>
      </section>


      <section className={styles.news_section}>
        <div className={styles.title}>
          <h2>
            Latest News
          </h2>
          <a href="/">
            Show more
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
                  Хатгалгаа туссан эсэхээ хэрхэн мэдэх вэ
                </div>
                <p className={styles.date}>
                  2024.03.12 • <span>6 минут</span>
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
                  Хатгалгаа туссан эсэхээ хэрхэн мэдэх вэ
                </div>
                <p className={styles.date}>
                  2024.03.12 • <span>6 минут</span>
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
                  Хатгалгаа туссан эсэхээ хэрхэн мэдэх вэ
                </div>
                <p className={styles.date}>
                  2024.03.12 • <span>6 минут</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.pricing_section}>
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
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  480: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 150,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 64,
                  },
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className={styles.card}>
                    <h2 className={styles.title}>One-Time Analysis</h2>
                    <p className={styles.description}>
                      Quick and reliable diagnostic service!<br /> Get a single health diagnosis for an easy and hassle-free checkup.
                    </p>
                    <div className={styles.price}><span className={styles.dollar}>$</span> 0.99</div>
                    <ul className={styles.features}>
                      <li className={styles.feature}>
                      <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.0195312" width="14" height="14" rx="7" fill="#0ACBAE"/>
                        <path d="M9.87446 5.13745C10.0418 5.29468 10.0418 5.55002 9.87446 5.70724L6.44627 8.92725C6.27888 9.08448 6.00703 9.08448 5.83964 8.92725L4.12554 7.31725C3.95815 7.16002 3.95815 6.90468 4.12554 6.74746C4.29294 6.59023 4.56478 6.59023 4.73217 6.74746L6.14362 8.07194L9.26917 5.13745C9.43656 4.98022 9.7084 4.98022 9.87579 5.13745H9.87446Z" fill="#3F3F3F" stroke="#3F3F3F" strokeWidth="0.5"/>
                      </svg>
                      <label className={styles.labels}>One-time use</label>
                      </li>
                      <li className={styles.feature}>
                      <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.0195312" width="14" height="14" rx="7" fill="#0ACBAE"/>
                        <path d="M9.87446 5.13745C10.0418 5.29468 10.0418 5.55002 9.87446 5.70724L6.44627 8.92725C6.27888 9.08448 6.00703 9.08448 5.83964 8.92725L4.12554 7.31725C3.95815 7.16002 3.95815 6.90468 4.12554 6.74746C4.29294 6.59023 4.56478 6.59023 4.73217 6.74746L6.14362 8.07194L9.26917 5.13745C9.43656 4.98022 9.7084 4.98022 9.87579 5.13745H9.87446Z" fill="#3F3F3F" stroke="#3F3F3F" strokeWidth="0.5"/>
                      </svg>
                      <label className={styles.labels}>No time-limit</label>
                      </li>
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
                    <h2 className={styles.title}>Essential 10</h2>
                    <p className={styles.description}>
                    A convenient package for regular health checks!<br/>Access up to 10 diagnoses in a single plan for ongoing health monitoring.
                    </p>
                    <div className={styles.price}><span className={styles.dollar}>$</span> 4.99</div>
                    <ul className={styles.features}>
                      <li className={styles.feature}>
                      <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.0195312" width="14" height="14" rx="7" fill="#0ACBAE"/>
                        <path d="M9.87446 5.13745C10.0418 5.29468 10.0418 5.55002 9.87446 5.70724L6.44627 8.92725C6.27888 9.08448 6.00703 9.08448 5.83964 8.92725L4.12554 7.31725C3.95815 7.16002 3.95815 6.90468 4.12554 6.74746C4.29294 6.59023 4.56478 6.59023 4.73217 6.74746L6.14362 8.07194L9.26917 5.13745C9.43656 4.98022 9.7084 4.98022 9.87579 5.13745H9.87446Z" fill="#3F3F3F" stroke="#3F3F3F" strokeWidth="0.5"/>
                      </svg>

                      <label className={styles.labels}>10 time use</label>
                      
                      </li>
                      <li className={styles.feature}>
                      <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.0195312" width="14" height="14" rx="7" fill="#0ACBAE"/>
                        <path d="M9.87446 5.13745C10.0418 5.29468 10.0418 5.55002 9.87446 5.70724L6.44627 8.92725C6.27888 9.08448 6.00703 9.08448 5.83964 8.92725L4.12554 7.31725C3.95815 7.16002 3.95815 6.90468 4.12554 6.74746C4.29294 6.59023 4.56478 6.59023 4.73217 6.74746L6.14362 8.07194L9.26917 5.13745C9.43656 4.98022 9.7084 4.98022 9.87579 5.13745H9.87446Z" fill="#3F3F3F" stroke="#3F3F3F" strokeWidth="0.5"/>
                      </svg>
                      <label className={styles.labels}>Monthly</label>
                      </li>
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
                <SwiperSlide>
                  <div className={styles.card}>
                    <h2 className={styles.title}>Flexible 30</h2>
                    <p className={styles.description}>
                      Freedom to manage your health anytime!<br/>Enjoy 30 diagnoses with no expiration, including offline access for ultimate convenience.
                    </p>
                    <div className={styles.price}><span className={styles.dollar}>$</span> 14.99</div>
                    <ul className={styles.features}>
                      <li className={styles.feature}>
                      <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.0195312" width="14" height="14" rx="7" fill="#0ACBAE"/>
                        <path d="M9.87446 5.13745C10.0418 5.29468 10.0418 5.55002 9.87446 5.70724L6.44627 8.92725C6.27888 9.08448 6.00703 9.08448 5.83964 8.92725L4.12554 7.31725C3.95815 7.16002 3.95815 6.90468 4.12554 6.74746C4.29294 6.59023 4.56478 6.59023 4.73217 6.74746L6.14362 8.07194L9.26917 5.13745C9.43656 4.98022 9.7084 4.98022 9.87579 5.13745H9.87446Z" fill="#3F3F3F" stroke="#3F3F3F" strokeWidth="0.5"/>
                      </svg>

                      <label className={styles.labels}>30 time use</label>
                      
                      </li>
                      <li className={styles.feature}>
                      <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.0195312" width="14" height="14" rx="7" fill="#0ACBAE"/>
                        <path d="M9.87446 5.13745C10.0418 5.29468 10.0418 5.55002 9.87446 5.70724L6.44627 8.92725C6.27888 9.08448 6.00703 9.08448 5.83964 8.92725L4.12554 7.31725C3.95815 7.16002 3.95815 6.90468 4.12554 6.74746C4.29294 6.59023 4.56478 6.59023 4.73217 6.74746L6.14362 8.07194L9.26917 5.13745C9.43656 4.98022 9.7084 4.98022 9.87579 5.13745H9.87446Z" fill="#3F3F3F" stroke="#3F3F3F" strokeWidth="0.5"/>
                      </svg>
                      <label className={styles.labels}>Yearly</label>
                      
                      </li>
                      <li className={styles.feature}>
                      <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.0195312" width="14" height="14" rx="7" fill="#0ACBAE"/>
                        <path d="M9.87446 5.13745C10.0418 5.29468 10.0418 5.55002 9.87446 5.70724L6.44627 8.92725C6.27888 9.08448 6.00703 9.08448 5.83964 8.92725L4.12554 7.31725C3.95815 7.16002 3.95815 6.90468 4.12554 6.74746C4.29294 6.59023 4.56478 6.59023 4.73217 6.74746L6.14362 8.07194L9.26917 5.13745C9.43656 4.98022 9.7084 4.98022 9.87579 5.13745H9.87446Z" fill="#3F3F3F" stroke="#3F3F3F" strokeWidth="0.5"/>
                      </svg>
                      <label className={styles.labels}>Offline-Access</label>
                      </li>
                    </ul>
                    
                  </div>
                </SwiperSlide>
              </Swiper>

            </div>

            
          ) : (
            <div className={styles.cards}>
              <div className={styles.card}>
                <h2 className={styles.title}>Business Elite</h2>
                <p className={styles.description}>
                  Maximum visibility for your brand!<br />Showcase your business with prominent ads in the news section and get featured in tailored recommendations.
                </p>
                <div className={styles.price}><span className={styles.dollar}>$</span> 49.99</div>
                <ul className={styles.features}>
                  <li className={styles.feature}>
                  <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.0195312" width="14" height="14" rx="7" fill="#0ACBAE"/>
                    <path d="M9.87446 5.13745C10.0418 5.29468 10.0418 5.55002 9.87446 5.70724L6.44627 8.92725C6.27888 9.08448 6.00703 9.08448 5.83964 8.92725L4.12554 7.31725C3.95815 7.16002 3.95815 6.90468 4.12554 6.74746C4.29294 6.59023 4.56478 6.59023 4.73217 6.74746L6.14362 8.07194L9.26917 5.13745C9.43656 4.98022 9.7084 4.98022 9.87579 5.13745H9.87446Z" fill="#3F3F3F" stroke="#3F3F3F" strokeWidth="0.5"/>
                  </svg>

                  <label className={styles.labels}>Bigger ad space </label>
                  </li>
                  <li className={styles.feature}>
                  <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.0195312" width="14" height="14" rx="7" fill="#0ACBAE"/>
                    <path d="M9.87446 5.13745C10.0418 5.29468 10.0418 5.55002 9.87446 5.70724L6.44627 8.92725C6.27888 9.08448 6.00703 9.08448 5.83964 8.92725L4.12554 7.31725C3.95815 7.16002 3.95815 6.90468 4.12554 6.74746C4.29294 6.59023 4.56478 6.59023 4.73217 6.74746L6.14362 8.07194L9.26917 5.13745C9.43656 4.98022 9.7084 4.98022 9.87579 5.13745H9.87446Z" fill="#3F3F3F" stroke="#3F3F3F" strokeWidth="0.5"/>
                  </svg>
                  <label className={styles.labels}>Place ads on results page</label>
                  </li>
                  <li className={styles.feature}>
                  <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.0195312" width="14" height="14" rx="7" fill="#0ACBAE"/>
                    <path d="M9.87446 5.13745C10.0418 5.29468 10.0418 5.55002 9.87446 5.70724L6.44627 8.92725C6.27888 9.08448 6.00703 9.08448 5.83964 8.92725L4.12554 7.31725C3.95815 7.16002 3.95815 6.90468 4.12554 6.74746C4.29294 6.59023 4.56478 6.59023 4.73217 6.74746L6.14362 8.07194L9.26917 5.13745C9.43656 4.98022 9.7084 4.98022 9.87579 5.13745H9.87446Z" fill="#3F3F3F" stroke="#3F3F3F" strokeWidth="0.5"/>
                  </svg>
                  <label className={styles.labels}>Recommend your doctors</label>
                  </li>
                </ul>
              </div>

              <div className={styles.card}>
                <h2 className={styles.title}>Business Classic</h2>
                <p className={styles.description}>
                Simple yet impactful advertising solution!<br/>Advertise your business effectively in the news and information section to reach your audience.
                </p>
                <div className={styles.price}><span className={styles.dollar}>$</span> 24.99</div>
                <ul className={styles.features}>
                  <li className={styles.feature}>
                  <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.0195312" width="14" height="14" rx="7" fill="#0ACBAE"/>
                    <path d="M9.87446 5.13745C10.0418 5.29468 10.0418 5.55002 9.87446 5.70724L6.44627 8.92725C6.27888 9.08448 6.00703 9.08448 5.83964 8.92725L4.12554 7.31725C3.95815 7.16002 3.95815 6.90468 4.12554 6.74746C4.29294 6.59023 4.56478 6.59023 4.73217 6.74746L6.14362 8.07194L9.26917 5.13745C9.43656 4.98022 9.7084 4.98022 9.87579 5.13745H9.87446Z" fill="#3F3F3F" stroke="#3F3F3F" strokeWidth="0.5"/>
                  </svg>

                  <label className={styles.labels}>News page ad space </label>
                  </li>
                  <li className={styles.feature}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="14" height="14" rx="7" fill="#F66161"/>
                    <path d="M8.48721 5.46888C8.59184 5.34746 8.57517 5.16711 8.44924 5.06623C8.32332 4.96534 8.13628 4.98141 8.03165 5.10283L6.77795 6.55361L5.52424 5.10283C5.41961 4.98141 5.23258 4.96534 5.10665 5.06623C4.98072 5.16711 4.96406 5.34746 5.06869 5.46888L6.39184 7L5.06869 8.53113C4.96406 8.65254 4.98072 8.83289 5.10665 8.93377C5.23258 9.03466 5.41961 9.01859 5.52424 8.89717L6.77795 7.44639L8.03165 8.89717C8.13628 9.01859 8.32332 9.03466 8.44924 8.93377C8.57517 8.83289 8.59184 8.65254 8.48721 8.53113L7.16406 7L8.48721 5.46888Z" fill="black" stroke="black"/>
                  </svg>
                    <label className={styles.labels}>No ads on result page</label>
                  </li>
                  <li className={styles.feature}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="14" height="14" rx="7" fill="#F66161"/>
                      <path d="M8.48721 5.46888C8.59184 5.34746 8.57517 5.16711 8.44924 5.06623C8.32332 4.96534 8.13628 4.98141 8.03165 5.10283L6.77795 6.55361L5.52424 5.10283C5.41961 4.98141 5.23258 4.96534 5.10665 5.06623C4.98072 5.16711 4.96406 5.34746 5.06869 5.46888L6.39184 7L5.06869 8.53113C4.96406 8.65254 4.98072 8.83289 5.10665 8.93377C5.23258 9.03466 5.41961 9.01859 5.52424 8.89717L6.77795 7.44639L8.03165 8.89717C8.13628 9.01859 8.32332 9.03466 8.44924 8.93377C8.57517 8.83289 8.59184 8.65254 8.48721 8.53113L7.16406 7L8.48721 5.46888Z" fill="black" stroke="black"/>
                    </svg>

                    <label className={styles.labels}>No recommendations</label>
                  </li>
                </ul>
              </div>

              
            </div>
          )}
        </div>    
      </section>
    </main>
  );
}
