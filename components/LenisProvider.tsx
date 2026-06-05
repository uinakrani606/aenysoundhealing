'use client';

import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

export const LenisProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      return; // Do not apply smooth scroll for users who prefer reduced motion
    }

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth exponential easing
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    if (typeof window !== 'undefined') {
      (window as any).lenis = lenis;
    }

    // Update ScrollTrigger on Lenis scroll
    lenis.on('scroll', () => {
      ScrollTrigger.update();
    });

    // Use native requestAnimationFrame loop for absolute fluid scrolling
    let rafId: number;
    const updateRaf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(updateRaf);
    };
    rafId = requestAnimationFrame(updateRaf);

    // Refresh ScrollTrigger heights after dynamic hydration completes
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timer);
      if (typeof window !== 'undefined') {
        delete (window as any).lenis;
      }
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};
