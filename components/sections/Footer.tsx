'use client';

import React from 'react';
import Link from 'next/link';
import { ScrollAnimate } from '../ScrollAnimate';

export const Footer = () => {
  return (
    <footer className="bg-dark-green text-white lg:pt-24 tablet:pt-22 md:pt-15 pt-12 lg:pb-12 tablet:pb-10 md:pb-8 pb-6 rounded-t-[40px] relative z-20">
      <div className="max-w-335 mx-auto px-6">
        <ScrollAnimate animation="stagger-fade" duration={0.8} stagger={0.12} className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7.5 lg:mb-20 tablet:mb-16 md:mb-12 mb-8">
          {/* Logo & Newsletter */}
          <div className="flex flex-col gap-6 lg:pr-8 border-r-0 lg:border-r border-white/10 sm:col-span-1 xs:col-span-2 col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-2">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="var(--color-green)" />
                <path d="M20 10C14.4772 10 10 14.4772 10 20C10 25.5228 14.4772 30 20 30C25.5228 30 30 25.5228 30 20" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <circle cx="20" cy="15" r="2" fill="var(--color-orange)" />
              </svg>
              <span className="text-[28px] font-extrabold text-white tracking-tight">aeny</span>
            </Link>
            <p className="text-[16px] text-white/70 leading-relaxed">
              Reconnect with Your Inner Calm. Subscribe to our newsletter for wellness tips and updates.
            </p>
            
            {/* Email Input */}
            <form className="relative mt-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                aria-label="Email address for newsletter"
                id="newsletter-email"
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-6 pr-14 text-white placeholder-white/50 focus:outline-none focus:border-orange transition-colors"
              />
              <button 
                type="submit" 
                aria-label="Subscribe to newsletter"
                className="absolute right-2 top-2 bottom-2 w-10 bg-orange text-white rounded-full flex items-center justify-center hover:bg-white hover:text-orange transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
          </div>
          {/* Explore */}
          <div className="flex flex-col gap-6 lg:pl-8">
            <h4 className="text-[20px] font-bold text-white mb-2">Explore</h4>
            <ul className="flex flex-col gap-4">
              {['Home', 'About Aeny', 'Our Therapies', 'Healing Programs', 'Testimonials'].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase().replace(/ /g, '-')}`} className="text-[16px] text-white/70 hover:text-orange transition-all duration-300 hover:ml-1">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Our Services */}
          <div className="flex flex-col gap-6">
            <h4 className="text-[20px] font-bold text-white mb-2">Our Services</h4>
            <ul className="flex flex-col gap-4">
              {['Sleep Therapy', 'Sound Healing', 'Guided Meditation', 'Aromatherapy', 'Wellness Retreats'].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase().replace(/ /g, '-')}`} className="text-[16px] text-white/70 hover:text-orange transition-all duration-300 hover:ml-1">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact & Support */}
          <div className="flex flex-col gap-6 sm:col-span-1 xs:col-span-2 col-span-1">
            <h4 className="text-[20px] font-bold text-white mb-2">Contact & Support</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3 text-[16px] text-white/70">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <span>+91 99257 88810</span>
              </li>
              <li className="flex items-center gap-3 text-[16px] text-white/70">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <span>hello@aenywellness.com</span>
              </li>
              <li className="flex items-start gap-3 text-[16px] text-white/70">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>
                  Zadafiya Farm, Abrama Rd,
                  <br/>near P P Savani School,
                  <br/> Mota Varachha, Surat, Gujarat
                </span>
              </li>
            </ul>
          </div>
        </ScrollAnimate>
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/50 text-[14px]">
            © {new Date().getFullYear()} Aeny Wellness Center. All rights reserved.
          </p>
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {['instagram', 'facebook', 'twitter'].map((social) => (
              <a key={social} href={`https://www.${social}.com/soulhealing_by_aeny/?hl=en`} target="_blank"  aria-label={`Follow Aeny Wellness on ${social}`} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange hover:border-orange transition-colors duration-300">
                {social === 'instagram' && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>}
                {social === 'facebook' && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>}
                {social === 'twitter' && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-6 text-[14px] text-white/50">
            <Link href="#privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
