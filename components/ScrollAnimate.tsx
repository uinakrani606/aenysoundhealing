'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
interface ScrollAnimateProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-in' | 'scale-in' | 'stagger-fade' | 'slide-left' | 'slide-right' | 'parallax';
  duration?: number;
  delay?: number;
  stagger?: number;
  amount?: number; // distance for slide/parallax animations
  className?: string;
  triggerHook?: string; // e.g. "top 85%"
}

export const ScrollAnimate: React.FC<ScrollAnimateProps> = ({
  children,
  animation = 'fade-up',
  duration = 0.8,
  delay = 0,
  stagger = 0.15,
  amount = 40,
  className = '',
  triggerHook = 'top 85%',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Register plugin inside hook to guarantee browser execution
    gsap.registerPlugin(ScrollTrigger);

    const el = containerRef.current;
    if (!el) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      // Instantly show the elements
      gsap.set(el, { opacity: 1, y: 0, x: 0, scale: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      // 1. Fade Up
      if (animation === 'fade-up') {
        gsap.fromTo(
          el,
          { opacity: 0, y: amount },
          {
            opacity: 1,
            y: 0,
            duration,
            delay,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: triggerHook,
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
      
      // 2. Fade In
      else if (animation === 'fade-in') {
        gsap.fromTo(
          el,
          { opacity: 0 },
          {
            opacity: 1,
            duration,
            delay,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: triggerHook,
             toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // 3. Scale In
      else if (animation === 'scale-in') {
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            duration,
            delay,
            ease: 'back.out(1.4)',
            scrollTrigger: {
              trigger: el,
              start: triggerHook,
             toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // 4. Stagger Fade (animates the children of this container)
      else if (animation === 'stagger-fade') {
        const targets = Array.from(el.children);
        if (targets.length > 0) {
          gsap.fromTo(
            targets,
            { opacity: 0, y: amount },
            {
              opacity: 1,
              y: 0,
              duration,
              delay,
              stagger,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: el,
                start: triggerHook,
               toggleActions: 'play none none reverse',
              },
            }
          );
        }
      }

      // 5. Slide Left
      else if (animation === 'slide-left') {
        gsap.fromTo(
          el,
          { opacity: 0, x: amount },
          {
            opacity: 1,
            x: 0,
            duration,
            delay,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: triggerHook,
             toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // 6. Slide Right
      else if (animation === 'slide-right') {
        gsap.fromTo(
          el,
          { opacity: 0, x: -amount },
          {
            opacity: 1,
            x: 0,
            duration,
            delay,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: triggerHook,
             toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // 7. Parallax
      else if (animation === 'parallax') {
        gsap.fromTo(
          el,
          { y: -amount },
          {
            y: amount,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [animation, duration, delay, stagger, amount, triggerHook]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};
