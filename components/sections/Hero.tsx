import React from 'react';
import Image from 'next/image';
import Therapy from '../../public/images/therapy.jpg'
import Star from '../../public/images/star-orange.png';
import Sleepers01 from '../../public/images/sleepers-01.jpg'
import Sleepers02 from '../../public/images/sleepers-02.jpg'
import Sleepers03 from '../../public/images/sleepers-02.jpg'
import { ScrollAnimate } from '../ScrollAnimate';

export const Hero = () => {
  return (
    <>
    {/* <div className="h-[500px]">
    </div> */}


    <section id="home" className=" xl:p-20 tablet:p-12 p-6 relative h-auto flex items-center overflow-hidden rounded-[30px] bg-[url(/images/hero.jpg)] bg-center bg-no-repeat bg-cover after:absolute after:inset-0 after:w-full after:bg-dark-green after:opacity-60  after:cursor-none">
      <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/images/video1.mp4" type="video/mp4" />
        </video>
      <div className="flex tablet:flex-row flex-col lg:gap-16 gap-10 items-end xl:pt-60 tablet:pt-50 pt-30 relative z-10 w-full">
        {/* Left Content */}
        <div className="flex flex-col gap-6 w-full">
          <ScrollAnimate animation="fade-up" duration={0.8} className='flex flex-col md:flex-row items-start md:items-end justify-between gap-6 w-full'>
            <div>
              <div className="flex items-center gap-5 mb-5">
                <Image
                  src={Star}
                  alt=""
                  aria-hidden="true"
                  className="rounded-[20px] w-7.5 h-7.5 object-cover"
                />
                <span className="text-white font-semibold sm:text-lg text-base">A sacred space in surat</span>
              </div>
              <div className='max-w-[1037px] w-full'>
                <h1 className="xl:text-[64px] max-w-[1037px] mb-5 md:text-5xl sm:text-[32px] text-2xl font-semibold text-white leading-[1.2]  tan-pearl font-medium">
                  A space to slow down and feel like yourself again
                </h1>
                <p className='text-white font-semibold sm:text-lg text-[12px]  mb-5 max-w-159.5'>
                  Sound healing is a guided experience that helps your nervous system shift from stress into deep rest — through calming vibrations, sound bowls, and meditative sound journeys.
                </p>

              </div>
              <div className='flex sm:gap-5 gap-3 xl:flex-nowrap flex-wrap'>
                <div className='group border transition-all duration-300 border-white bg-transparent hover:bg-white py-1.5 px-3 rounded-full cursor-pointer flex items-center gap-3'>
                  <span className='text-sm font-medium text-white group-hover:text-green'>Beginner friendly</span>
                </div>
                <div className='group border transition-all duration-300 border-white bg-transparent hover:bg-white py-1.5 px-3 rounded-full cursor-pointer flex items-center gap-3'>
                  <span className='text-sm font-medium text-white group-hover:text-green'>No experience needed</span>
                </div>
                <div className='group border transition-all duration-300 border-white bg-transparent hover:bg-white py-1.5 px-3 rounded-full cursor-pointer flex items-center gap-3'>
                  <span className='text-sm font-medium text-white group-hover:text-green'>Private & guided sessions</span>
                </div>
              </div>
            </div>
          </ScrollAnimate>
        </div>
        {/* Right Floating Card */}
        <ScrollAnimate animation="fade-up" duration={1.0} delay={0.2} className="relative flex justify-end xl:max-w-86.25  tablet:max-w-60 w-full max-w-full self-end">
          <div className="bg-white p-2.5 rounded-3xl shadow-[10px_10px_0px_0px_rgba(250,250,250,0.27)] flex gap-4 xl:flex-nowrap tablet:flex-wrap sm:flex w-full">
            <div>
              <div className='p-2.5'>
                <h4 className="xl:text-[55px] text-[40px] font-bold text-green leading-tight mb-2.5">30k+</h4>
                <p className='text-primary font-semibold'>Happy Sleepers Transformed</p>
              </div>
              <div className="flex -space-x-4 xl:mt-5">
                <Image className="w-12 h-12 rounded-full border-2 border-white object-cover" src={Sleepers01} alt="Happy sleeper transformed - Priya" />
                <Image className="w-12 h-12 rounded-full border-2 border-white object-cover" src={Sleepers02} alt="Happy sleeper transformed - Dev" />
                <Image className="w-12 h-12 rounded-full border-2 border-white object-cover" src={Sleepers03} alt="Happy sleeper transformed - Sarah" />
              </div>
            </div>
            <div className='w-full'>
              <Image src={Therapy} alt='Sound Healing Therapy and Meditation Session' className='tablet:h-full h-50 w-full rounded-[15px] object-cover ' />
            </div>
          </div>
        </ScrollAnimate>

      </div>
    </section>
    </>
  );
};
