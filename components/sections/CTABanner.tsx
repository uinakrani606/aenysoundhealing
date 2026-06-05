import React from 'react';
import Link from 'next/link';

export const CTABanner = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-container mx-auto px-6">
        
        {/* Full-width banner with calm nature background */}
        <div className="relative rounded-[40px] overflow-hidden py-32 px-8 flex flex-col items-center justify-center text-center shadow-card group">
          
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <img 
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1600&auto=format&fit=crop" 
              alt="Nature background" 
              className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110"
            />
            {/* Dark green overlay */}
            <div className="absolute inset-0 bg-dark-green/80 mix-blend-multiply" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl flex flex-col items-center gap-8">
            <h2 className="text-[48px] lg:text-[64px] font-extrabold text-white leading-[1.1]">
              Your Journey Begins with Each Session
            </h2>
            
            <Link 
              href="#booking"
              className="inline-flex items-center gap-2 px-10 py-5 bg-orange text-white rounded-full font-bold text-[18px] hover:bg-white hover:text-orange transition-all duration-300 shadow-[0_10px_30px_rgba(243,140,99,0.3)] hover:-translate-y-1"
            >
              Reserve Your Spot
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};
