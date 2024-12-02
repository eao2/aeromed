'use client'; 

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function LenisSmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); 
    };
  }, []);

  return <>{children}</>;
}