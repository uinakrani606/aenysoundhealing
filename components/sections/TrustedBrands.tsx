import React from 'react';

export const TrustedBrands = () => {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-8">
        <div className="relative w-full rounded-[30px] overflow-hidden bg-[#775B4A] shadow-soft">
           
           <div className="absolute inset-0 bg-linear-to-r from-black/80 to-transparent"></div>
           <div className="absolute inset-0 flex items-center justify-center text-white/10 text-xl font-bold">[Woman With Headphones Image]</div>

           <div className="relative z-10 py-16 px-8 flex flex-col items-center justify-center text-center">
              <p className="text-[14px] text-white/80 font-bold uppercase tracking-widest mb-8">
                Trusted by The World&apos;s Best Healthcare Professionals
              </p>
              
              <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-80">
                <div className="flex items-center gap-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
                  <span className="font-bold text-[18px] text-white">Daily PLAN</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16z" /></svg>
                  <span className="font-bold text-[18px] text-white">Mindful Therapy</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
                  <span className="font-bold text-[18px] text-white">Well Being</span>
                </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};
