  import React from 'react';

export const JourneyBegins = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-8">
        
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2 h-2 rounded-full bg-green"></span>
          <span className="text-[12px] font-bold text-text uppercase tracking-widest">How It Works</span>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24">
          
          {/* Left Text */}
          <div className="lg:w-5/12">
            <h2 className="text-[40px] md:text-[56px] font-bold text-primary leading-[1.1] tracking-tight mb-8">
              Your Journey Begins with Each Session
            </h2>
            <p className="text-[20px] font-bold text-primary leading-relaxed mb-6">
              Reconnect with your inner rhythm and find the peace you deserve today.
            </p>
            <p className="text-[14px] text-text leading-relaxed">
              Our structured yet flexible sessions are designed to gently guide you towards profound relaxation. We address the root cause of stress and sleep disturbances, so you can achieve long-lasting improvements in your physical and mental well-being.
            </p>
          </div>

          {/* Right Images */}
          <div className="lg:w-7/12 w-full relative">
            <div className="absolute top-0 right-0">
               <button className="bg-orange text-white font-bold text-[14px] px-8 py-3 rounded-full hover:bg-orange/90 transition-all shadow-soft mb-8 block ml-auto">
                 Book A Session
               </button>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-20">
              
              <div className="col-span-2 md:col-span-1 relative aspect-4/5 rounded-[30px] overflow-hidden bg-[#C1A88B] shadow-soft">
                 <div className="absolute inset-0 flex items-center justify-center text-black/20">[Sound Bowls Image]</div>
                 <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-60"></div>
                 <div className="absolute bottom-6 left-6 right-6">
                   <h3 className="text-[20px] font-bold text-white mb-2">Natural Sound Bowl Session</h3>
                   <p className="text-[12px] text-white/80">Experience the ancient healing of singing bowls for total relaxation.</p>
                 </div>
              </div>

              <div className="col-span-2 md:col-span-1 flex flex-col gap-6">
                 <div className="relative aspect-4/3 rounded-[30px] overflow-hidden bg-[#D9D9D9] shadow-soft">
                    <div className="absolute inset-0 flex items-center justify-center text-black/20">[Woman Relaxing Image]</div>
                 </div>
                 
                 <div className="bg-green rounded-[30px] p-8 flex items-center justify-center text-center aspect-4/3 shadow-soft">
                    <h3 className="text-[24px] font-bold text-white leading-tight">Join Our Weekly Healing Sessions</h3>
                 </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
