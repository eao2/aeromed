import Image from "next/image"
import Link from "next/link"
import styles from "./Footer.module.scss"

export default function Footer(){
    return(
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <h2>
                        Join Our Newsletter
                    </h2>
                    <div className={styles.email_sec}>
                        <div className={styles.input_box}>
                            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_789_67)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.8545 1.81818C5.76586 1.81818 4.07268 3.58191 4.07268 5.75758C4.07268 7.9332 5.76586 9.69697 7.8545 9.69697C9.94309 9.69697 11.6363 7.9332 11.6363 5.75758C11.6363 3.58191 9.9431 1.81818 7.8545 1.81818ZM2.32723 5.75758C2.32723 2.57775 4.80187 0 7.8545 0C10.9071 0 13.3818 2.57775 13.3818 5.75758C13.3818 8.93735 10.9071 11.5152 7.8545 11.5152C4.80186 11.5152 2.32723 8.93734 2.32723 5.75758ZM2.4335 14.9061C3.85909 13.9161 5.77825 13.3333 7.8545 13.3333C9.93074 13.3333 11.8499 13.9161 13.2755 14.9061C14.695 15.8919 15.709 17.3535 15.709 19.0909C15.709 19.593 15.3183 20 14.8363 20C14.3543 20 13.9636 19.593 13.9636 19.0909C13.9636 18.1506 13.4147 17.188 12.3073 16.4189C11.2059 15.6541 9.6342 15.1515 7.8545 15.1515C6.07479 15.1515 4.50304 15.6541 3.40171 16.4189C2.29428 17.188 1.74541 18.1506 1.74541 19.0909C1.74541 19.593 1.35468 20 0.872681 20C0.390688 20 -4.57764e-05 19.593 -4.57764e-05 19.0909C-4.57764e-05 17.3535 1.01402 15.8919 2.4335 14.9061Z" fill="#3F3F3F"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_789_67">
                                <rect width="16" height="20" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                            <input type="email" placeholder="Enter Your Email" required/>
                        </div>
                        <button type="submit" className={styles.submit}>
                            Subscribe
                        </button>
                    </div>
                </div>
                <div className={styles.ln}></div>
                <div className={styles.content}>
                    <div className={styles.brand}>
                        <Image
                            src={"/logo.svg"}
                            width={200}
                            height={48}
                            alt=""
                        />
                        <p>
                            AI-POWERED PNEUMONIA DETECTION 
                        </p>
                    </div>
                    <div className={styles.btm}>
                        <div className={styles.left_section}>
                            <div className={styles.contact}>
                                <p>
                                    Email:<br/>
                                    se21d58@nmit.edu.mn
                                </p>
                                <p>
                                    Phone Number:<br/>
                                    +976 94940994
                                </p>
                            </div>
                        </div>
                        <div className={styles.right_section}>
                            <div className={styles.btns}>
                                <Link href={"/recorder"} className={styles.btn1}>
                                Үнэгүй турших
                                </Link>
                                <Link href={"/"} className={styles.btn2}>
                                Заавар үзэх
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.ln}></div>
                <div className={styles.textual}>
                    <div className={styles.cpr}>
                        © 2024 Cure Ai Solutions
                    </div>
                    <div className={styles.links}>
                        <a href="Terms-of-Service">Terms of Service</a>
                        <a href="Privacy-Policy">Privacy Policy</a>
                        <a href="Cookies">Cookies</a>
                    </div>
                </div>
            </div>
        </section>
    )
}