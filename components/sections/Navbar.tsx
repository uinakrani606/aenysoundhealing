'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/images/logo.png';
import { PopupModal } from "react-calendly";
export const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      // Update scrolled state
      setIsScrolled(window.scrollY > 50);

      // Highlight active section
      const sections = ['home', 'about', 'therapies', 'programs', 'booking'];
      const scrollPosition = window.scrollY + 140; // offset for active highlight calculation

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const lenis = (window as any).lenis;
      if (lenis) {
        // Scroll using Lenis with 100px offset for the header/navbar height
        lenis.scrollTo(targetElement, { offset: -100, duration: 1.2 });
      } else {
        // Fallback standard behavior
        const headerOffset = 100;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Therapies', id: 'therapies' },
    { label: 'Programs', id: 'programs' },
    { label: 'Contact Us', id: 'booking' },
  ];

  return (
    <>
      <header className={`fixed top-0 transition-all duration-300 w-full left-0 z-999999 ${isScrolled
          ? 'p-[15px_0px_15px_0px] md:p-[15px_0px_15px_0px] bg-dark-green/95 backdrop-blur-md shadow-lg border-b border-white/5'
          : 'p-[50px_24px_0_24px] md:p-[60px_30px_0_30px] bg-transparent'
        }`}>
        <div className="mx-auto px-4 xl:px-12 flex items-center justify-between relative z-50 ">
          <div className='flex xl:gap-20 gap-7 items-center'>
            {/* Logo - Far Left */}
            <Link href="/" className="flex items-center gap-2 max-w-37.5 md:max-w-50.5 w-full">
              <Image src={Logo} alt="Aeny Wellness Logo" priority />
            </Link>
            {/* Menu - Centered */}
            <nav className="hidden lg:flex items-center xl:gap-7.5 gap-5" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`text-body font-manrope gap-1.5 flex items-center transition-all duration-300 ${activeSection === link.id
                      ? 'text-orange font-semibold'
                      : 'text-white/80 hover:text-orange font-semibold'
                    }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          {/* Actions - Far Right */}
          <div className="hidden lg:flex items-center xl:gap-6 gap-5">
            {/* CTA Button */}
            <a
              href="#booking"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(true);
              }}
              className="inline-flex items-center gap-2 xl:px-8 px-4 xl:py-3.5 py-2 bg-orange text-white rounded-full font-bold hover:bg-green transition-all duration-300"
            >
              Book Session
              <svg aria-hidden="true" className="fill-white w-4" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z"></path></svg>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white z-50 relative"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isMenuOpen ? (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </header>
      {isMounted && (
        <PopupModal
          url="https://calendly.com/neha-wilysion/new-meeting"
          onModalClose={() => setIsOpen(false)}
          open={isOpen}
          rootElement={document.body}
        />
      )}
      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-dark-green z-9999 backdrop-blur-xl transition-all duration-300 lg:hidden flex flex-col justify-center items-center ${isMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-10 pointer-events-none'
          }`}
      >
        <nav className="flex flex-col items-center gap-8" aria-label="Mobile Navigation">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                handleNavClick(e, link.id);
                setIsMenuOpen(false);
              }}
              className={`text-2xl font-manrope font-semibold transition-all duration-300 ${activeSection === link.id
                  ? 'text-orange'
                  : 'text-white/80 hover:text-orange'
                }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            onClick={(e) => {
              handleNavClick(e, 'booking');
              setIsMenuOpen(false);
            }}
            className="mt-4 inline-flex items-center gap-2 px-8 py-3.5 bg-orange text-white rounded-full font-bold hover:bg-green transition-all duration-300"
          >
            Book Session
          </a>
        </nav>
      </div>
    </>
  );
};
