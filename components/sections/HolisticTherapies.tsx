import React from 'react';

export const HolisticTherapies = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-green"></span>
              <span className="text-[12px] font-bold text-text uppercase tracking-widest">Our Therapies</span>
            </div>
            <h2 className="text-[40px] md:text-[56px] font-bold text-primary leading-[1.1] tracking-tight">
              Holistic Therapies<br/>for Deep Sleep
            </h2>
          </div>
          <div className="max-w-md pb-2">
            <p className="text-body text-text mb-6">
              Our array of treatments balances the body, mind, and spirit to address the root causes of sleep issues, promoting lasting restoration and overall well-being.
            </p>
            <button className="bg-orange text-white font-bold text-[14px] px-8 py-3 rounded-full hover:bg-orange/90 transition-all shadow-soft">
              All Therapies
            </button>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="relative w-full aspect-4/3 rounded-[30px] overflow-hidden group cursor-pointer shadow-soft">
            <div className="absolute inset-0 bg-[#A2AFA4] flex items-center justify-center text-white/50 transition-transform duration-700 group-hover:scale-105">[Sound Bath Image]</div>
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-80"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-[24px] font-bold text-white mb-2">Sound Bath Therapy</h3>
              <p className="text-[14px] text-white/80">Healing vibrations to calm the nervous system and induce deep relaxation.</p>
            </div>
          </div>

          <div className="relative w-full aspect-4/3 rounded-[30px] overflow-hidden group cursor-pointer shadow-soft">
            <div className="absolute inset-0 bg-[#D4C3B3] flex items-center justify-center text-black/30 transition-transform duration-700 group-hover:scale-105">[Sleep Massage Image]</div>
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-80"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-[24px] font-bold text-white mb-2">Sleep Inducing Massage</h3>
              <p className="text-[14px] text-white/80">Targeted pressure points to release tension and prepare the body for rest.</p>
            </div>
          </div>

          <div className="md:col-span-2 relative w-full h-100 rounded-[30px] overflow-hidden group cursor-pointer shadow-soft">
            <div className="absolute inset-0 bg-[#8E9B9A] flex items-center justify-center text-white/50 transition-transform duration-700 group-hover:scale-105">[Therapist Session Image]</div>
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60"></div>
            <div className="absolute bottom-8 left-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z" /></svg>
              </div>
              <span className="text-white font-semibold text-[14px] uppercase tracking-wider">Discover What Works During Session</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
