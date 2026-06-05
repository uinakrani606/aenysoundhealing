import React from 'react';
import Image from 'next/image';
import Studio from '../../public/images/studio.jpg';
import Therapies from '../../public/images/image1.jpg';
import Background01 from '../../public/images/bg-01.png';
import Background02 from '../../public/images/bg-02.png';
import Sleepers01 from '../../public/images/sleepers-01.jpg'
import Sleepers02 from '../../public/images/sleepers-02.jpg'
import Sleepers03 from '../../public/images/sleepers-02.jpg'
import { ScrollAnimate } from '../ScrollAnimate';
import Star from '../../public/images/star.png';

export const BeginHealing = () => {
  return (
    <section id="begin-healing" className="border border-[#f0f0f0] bg-white sm:p-2.5 p-2.5 pt-5  rounded-[30px] mx-4 sm:mx-8 flex tablet:flex-nowrap flex-wrap-reverse items-center gap-2.5 overflow-hidden">

      {/* Left side Image */}
      <ScrollAnimate animation="fade-up" duration={0.8} className='max-w-full lg:max-w-[37%] w-full relative z-999 before:rounded-[20px] before:content-[""] before:absolute before:inset-0 before:w-full before:h-full before:opacity-100  before:bg-[linear-gradient(rgba(252,252,250,0)_0%,rgb(5,61,53)_100%)] before:z-99'>
        <Image src={Therapies} alt='Anjali guiding a client during a sound healing session with Tibetan singing bowls' className='rounded-[20px] w-full h-full object-cover' />
      </ScrollAnimate>

      {/* Right side Text/CTA Column */}
      <ScrollAnimate animation="fade-up" duration={0.8} delay={0.15} className='tablet:p-8 md:p-4 p-0 lg:p-10 relative max-w-full lg:max-w-[63%] w-full z-10 flex flex-col h-full justify-between'>
        <Image src={Background01} alt="" aria-hidden="true" className='absolute -top-30 -right-20 opacity-50 max-w-75 w-full z-[-1]' />
        <Image src={Background02} alt="" aria-hidden="true" className='absolute -bottom-30 -right-20 opacity-50 max-w-75 w-full z-[-1]' />

        <div className='flex flex-col h-full justify-between gap-8'>
          <div>
            <div className="flex items-center gap-5 mb-5">
              <Image
                src={Star}
                alt=""
                aria-hidden="true"
                className="rounded-[20px] w-7.5 h-7.5 object-cover"
              />
              <span className="text-[#2e2e2e] font-semibold sm:text-lg text-base">The Mind & Heart</span>
            </div>
            <h2 className='text-primary xl:text-[60px] md:text-[42px] sm:text-[28px] text-xl font-semibold leading-[1.2] max-w-172.5 w-full'>
              If your mind feels tired
              but life keeps going…
            </h2>
          </div>
          <div className='flex flex-col gap-3'>
            <ScrollAnimate animation="fade-up" duration={0.8} delay={0.20}>
              <span className='sm:text-lg text-sm block leading-[1.7] py-3 sm:px-4 px-2 bg-secondary rounded-[10px] text-left border-l-3 border-green font-semibold '>You keep showing up for everyone around you.</span>
            </ScrollAnimate>
            <ScrollAnimate animation="fade-up" duration={0.8} delay={0.24}>
              <span className='sm:text-lg text-sm block leading-[1.7] py-3 sm:px-4 px-2 bg-secondary rounded-[10px] text-left border-l-3 border-green font-semibold'>Yet inside, your mind feels busy, your body feels tired, and your heart feels heavy.</span>
            </ScrollAnimate>
            <ScrollAnimate animation="fade-up" duration={0.8} delay={0.28}>
              <span className='sm:text-lg text-sm block leading-[1.7] py-3 sm:px-4 px-2 bg-secondary rounded-[10px] text-left border-l-3 border-green font-semibold'>Sleep doesn't always refresh you.</span>
            </ScrollAnimate>
            <ScrollAnimate animation="fade-up" duration={0.8} delay={0.32}>
              <span className='sm:text-lg text-sm block leading-[1.7] py-3 sm:px-4 px-2 bg-secondary rounded-[10px] text-left border-l-3 border-green font-semibold'>Quiet moments don't always feel peaceful.</span>
            </ScrollAnimate>
            <ScrollAnimate animation="fade-up" duration={0.8} delay={0.36}>
              <span className='sm:text-lg text-sm block leading-[1.7] py-3 sm:px-4 px-2 bg-secondary rounded-[10px] text-left border-l-3 border-green font-semibold'>And somewhere along the way, you've forgotten what true calm feels like.</span>
            </ScrollAnimate>
            <ScrollAnimate animation="fade-up" duration={0.8} delay={0.36}>
              <span className='sm:text-lg text-sm block leading-[1.7] py-3 sm:px-4 px-2 bg-secondary rounded-[10px] text-left border-l-3 border-green font-semibold'>This is your invitation to pause, breathe, and return to yourself.</span>
            </ScrollAnimate>
          </div>
          <ScrollAnimate animation="fade-up" duration={0.8} delay={0.40} className='md:p-7.5 p-2 bg-[#fcfcfa] border border-light rounded-[20px] w-full flex flex-col justify-between max-w-155'>
            <p className='mb-5 text-primary font-semibold'>
              This is where Sound Healing helps the nervous system gently slow down.
            </p>
            <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6'>
              <a className="inline-flex text-nowrap items-center gap-2 px-8 py-3.5 bg-orange text-white rounded-full font-bold hover:bg-green transition-all duration-300" href="#booking">Begin Your Journey</a>
            </div>

          </ScrollAnimate>
        </div>
      </ScrollAnimate>
    </section>
  );
};
