import { Rubik } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react"
// import localFont from "next/font/local";
import Navbar from '../componenets/Navbar'
import Lenis from '../componenets/LenisSmoothScroll'
import "./globals.css";

const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "AreoMed",
  description: "Generated by create next app",
  openGraph: {
    title: 'New Mongol Student Union',
    metadataBase: new URL("https://aeromed.vercel.app/"),
    description: 'New Mongol Student Union',
    url: 'https://aeromed.vercel.app/',
    siteName: 'New Mongol Student Union',
    images: [
      {
        url: 'https://aeromed.vercel.app/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'background',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#FFFFFF"/>
      </head>
      <body className={rubik.className}>
        <Lenis>
          <Navbar/>
          {children}
        </Lenis>
        <Analytics/>
      </body>
    </html>
  );
}
