'use client'

import { useState, useEffect } from 'react'
import styles from './Navbar.module.scss'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'


export default function Navbar() {
    const pathname = usePathname();

    const [showMenu, setShowMenu] = useState(false)
    const [showProfile, setShowProfile] = useState(false)

    const toggleMenu = () => {
        setShowMenu((prev) => !prev);
        if (!showMenu) {
            setShowProfile(false);
        }
    }
    
    const toggleProfile = () => {
        setShowProfile((prev) => !prev);
        if (!showProfile) {
            setShowMenu(false);
        }
    }

    useEffect(() => {
        setShowMenu(false);
        setShowProfile(false);
    }, [pathname]);

    return (
        <>
            <header className={styles.header}>
                <div className={styles.top}>
                    <div className={styles.cont}>
                        <section className={styles.navbar}>
                            {/* <button className={styles.bar} onClick={toggleMenu}>
                                {!showMenu ? (
                                    <svg className={styles.svg} width="24" height="18" viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_59_119)">
                                            <path d="M22.5 7.5H1.5C0.671578 7.5 0 8.17158 0 9C0 9.82842 0.671578 10.5 1.5 10.5H22.5C23.3284 10.5 24 9.82842 24 9C24 8.17158 23.3284 7.5 22.5 7.5Z" fill="white"/>
                                            <path d="M1.5 3.50003H22.5C23.3284 3.50003 24 2.82845 24 2.00003C24 1.17161 23.3284 0.500031 22.5 0.500031H1.5C0.671578 0.500031 0 1.17161 0 2.00003C0 2.82845 0.671578 3.50003 1.5 3.50003Z" fill="white"/>
                                            <path d="M22.5 14.5H1.5C0.671578 14.5 0 15.1716 0 16C0 16.8284 0.671578 17.5 1.5 17.5H22.5C23.3284 17.5 24 16.8284 24 16C24 15.1716 23.3284 14.5 22.5 14.5Z" fill="white"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_59_119">
                                                <rect width="24" height="18" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                ) : (
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.364 1.06065L1.51473 15.9099C0.928948 16.4957 0.928948 17.4454 1.51473 18.0312C2.10051 18.617 3.05027 18.617 3.63605 18.0312L18.4853 3.18197C19.0711 2.59619 19.0711 1.64643 18.4853 1.06065C17.8995 0.474866 16.9498 0.474865 16.364 1.06065Z" fill="white"/>
                                        <path d="M18.0312 15.9558L3.18197 1.10659C2.59618 0.520806 1.64643 0.520806 1.06065 1.10659C0.474865 1.69237 0.474864 2.64213 1.06065 3.22791L15.9099 18.0772C16.4957 18.6629 17.4454 18.6629 18.0312 18.0772C18.617 17.4914 18.617 16.5416 18.0312 15.9558Z" fill="white"/>
                                    </svg>
                                )}
                            </button> */}
                            <div className={styles.lt}>
                                <Link href={'/'} className={styles.logo}>
                                    <Image
                                        src={'/logo.svg'}
                                        width={120}
                                        height={0}
                                        alt='Logo'
                                        className={styles.logo}
                                    />
                                </Link>
                                <div className={styles.vbar}></div>
                                <div className={styles.links}>
                                    <a href='/'>Танилцуулга</a>
                                </div>
                            </div>
                            <div className={styles.rt}>
                                <button className={styles.button}>
                                    Нэвтрэх
                                </button>
                                <button className={styles.menu_button}>
                                    <svg width="27" height="32" viewBox="0 0 27 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 6C0 4.89375 0.86183 4 1.92857 4H25.0714C26.1382 4 27 4.89375 27 6C27 7.10625 26.1382 8 25.0714 8H1.92857C0.86183 8 0 7.10625 0 6ZM0 16C0 14.8937 0.86183 14 1.92857 14H25.0714C26.1382 14 27 14.8937 27 16C27 17.1063 26.1382 18 25.0714 18H1.92857C0.86183 18 0 17.1063 0 16ZM27 26C27 27.1063 26.1382 28 25.0714 28H1.92857C0.86183 28 0 27.1063 0 26C0 24.8937 0.86183 24 1.92857 24H25.0714C26.1382 24 27 24.8937 27 26Z" fill="#3F3F3F"/>
                                    </svg>
                                </button>
                            </div>
                        </section>
                    </div>
                </div>
            </header>
        </>
    )
}

function Modal() {
    return (
        <section className={styles.modal}>
            <ul>
                <li>
                    <Link href={'/addclub'} className={styles.link}>
                        <h3>
                            Club үүсгэх
                        </h3>
                    </Link>
                </li>
                <li>
                    <Link href={'/events'} className={styles.link}>
                        <h3>
                            Events
                        </h3>
                    </Link>
                </li>
            </ul>
        </section>
    )
}

function ProfileModal({session}) {
    return (
        <section className={`${styles.modal} ${styles.proModal}`}>
            <ul>
                {/* <li>
                    <Link href={'/myclubs'} className={styles.link}>
                        <h3>
                            My Clubs
                        </h3>
                    </Link>
                </li> */}
                {!session?(
                    <li>
                        <button onClick={()=>{signIn("google")}} className={styles.link}>
                            <h3>Sign In</h3>
                        </button>
                    </li>
                    ):(
                    <li>
                        <button onClick={()=>{signOut()}} className={styles.link}>
                            <h3>Sign Out</h3>
                        </button>
                    </li>
                    )
                }
            </ul>
        </section>
    )
}