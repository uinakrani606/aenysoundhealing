import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Journey from '../../public/images/journey.jpg';
import star from '../../public/images/star.png';
import Sleepers01 from '../../public/images/sleepers-01.jpg'
import Sleepers02 from '../../public/images/sleepers-02.jpg'
import Sleepers03 from '../../public/images/sleepers-02.jpg'
export const HealingPrograms = () => {
  return (
    <section id="programs" className="sm:px-5 px-4 relative overflow-hidden">
      <div className="max-w-335 w-full mx-auto 2xl:py-30 tablet:py-20 md:py-15 py-10 flex items-center xl:gap-20 lg:gap-12 md:gap-8 gap-4  tablet:flex-row-reverse flex-col-reverse"> 
        <div className='grid grid-cols-2 xs:gap-0 items-center flex-wrap w-full sm:border-0 border border-light sm:p-0 xs:p-5 p-3 rounded-[10px]'>
          <div className='xs:p-5 p-3 h-full w-full bg-[url(/images/journey.jpg)] bg-center bg-no-repeat bg-cover xs:rounded-[20px_20px_0_20px] rounded-[8px_8px_0_8px] relative before:content-[""] before:bg-[radial-gradient(at_100%_100%,rgb(26,117,103)_10%,rgba(252,252,250,0)_100%)] before:absolute before:w-full before:h-full before:inset-0 xs:before:rounded-[20px_20px_0_20px] before:rounded-[8px_8px_0_8px]  before:opacity-100 2xl:p-7.5'>
            <div className='relative z-999 flex  flex-col w-full xs:gap-22.5 gap-12 h-full justify-between'>
              <p className='text-orange xs:text-xl text-sm text-right font-semibold  leading-[1.4] w-full '>01</p>
              <div>
                <h4 className='text-white sm:text-2xl xs:text-[20px] text-[15px] font-semibold leading-[1.3] mb-2'>Mentally Overwhelmed</h4>
                <p className='text-white sm:text-lg text-[12px] dm-sans font-normal'>Your mind feels constantly active and tired.</p>
              </div>
            </div>
          </div>
          <div className='w-full bg-green xs:rounded-none h-full'>
            <div className='bg-secondary xs:rounded-[0_0_0_50px] rounded-[0_0_0_20px] 2xl:p-7.5 xs:p-5 p-3 h-full'>
              <div className='relative z-999 flex  flex-col w-full xs:gap-22.5 gap-12 h-full justify-between'>
                <p className='text-green xs:text-xl text-sm text-right font-semibold  leading-[1.4] w-full '>02</p>
                <div>
                  <h4 className='text-primary sm:text-2xl xs:text-[20px] text-[15px] font-semibold leading-[1.3] mb-2'>Emotionally Heavy</h4>
                  <p className='text-primary sm:text-lg text-[12px] dm-sans font-normal'>You feel emotionally drained or disconnected.</p>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full bg-green xs:rounded-none h-full'>
            <div className='bg-secondary xs:rounded-[0_50px_0_0] rounded-[0_20px_0_0] 2xl:p-7.5 xs:p-5 p-3 h-full'>
              <div className='relative z-999 flex  flex-col w-full xs:gap-22.5 gap-12 h-full justify-between'>
                <p className='text-green xs:text-xl text-sm text-right font-semibold  leading-[1.4] w-full '>03</p>
                <div>
                  <h4 className='text-primary sm:text-2xl xs:text-[20px] text-[15px] font-semibold leading-[1.3] mb-2'>Unable to Relax</h4>
                  <p className='text-primary sm:text-lg text-[12px] dm-sans font-normal'>Even rest doesn’t feel restful anymore.</p>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full h-full bg-[radial-gradient(at_0%_0%,rgb(26,117,103)_0%,rgb(5,61,53)_100%)] 2xl:p-7.5 xs:p-5 p-3 xs:rounded-[0_20px_20px_20px] rounded-[0_8px_8px_8px]'>
            <div className='relative z-999 flex  flex-col w-full xs:gap-22.5 gap-12 h-full justify-between'>
              <p className='text-orange xs:text-xl text-sm text-right font-semibold  leading-[1.4] w-full '>04</p>
              <div>
                <h4 className='text-white sm:text-2xl xs:text-[20px] text-[15px] font-semibold leading-[1.3] mb-2'>Seeking Peace</h4>
                <p className='text-white sm:text-lg text-[12px] dm-sans font-normal'>You want calmness and emotional balance.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full relative xl:max-w-134 tablet:max-w-100 xl:p-7.5 p-5 before:content-[""] before:z-10 before:absolute before:w-full before:h-full before:inset-0 before:rounded-[20px] before:opacity-25 before:bg-[radial-gradient(at_0%_0%,rgb(243,140,99)_0%,rgba(252,252,250,0)_65%)] rounded-[20px]'>
          <div className='relative z-999'>
            <div className="flex items-center gap-5 mb-5">
              <Image
                src={star}
                alt=""
                aria-hidden="true"
                className="rounded-[20px] w-7.5 h-7.5 object-cover"
              />
              <span className="text-[#2e2e2e] font-semibold sm:text-lg text-base">No confusion, just gentle guidance</span>
            </div>
            <h2 className='text-primary 2xl:text-[50px] xl:text-[40px] md:text-[38px] sm:text-[26px] text-xl font-bold tan-pearl leading-[1.8] mb-5'>
            You Don’t Need to Figure It Out Alone
            </h2>
            <div>
              <p className='mb-2.5 sm:text-lg text-sm dm-sans text-text'>
                Many people come to Aeny feeling stressed, emotionally overwhelmed, mentally exhausted, or simply unsure of where to begin. That's completely okay.
              </p>
              <p className='mb-2.5 sm:text-lg text-sm dm-sans text-text'>
                Our role is not to overwhelm you with options. We take the time to understand how you're feeling and gently guide you toward the healing experience that best supports your current needs.
              </p>
              <p className='mb-8 sm:text-lg text-sm dm-sans text-text'>
                Every recommendation is personalized, intuitive, and centered around your emotional well-being.
              </p>
            </div>
              {/* <div className='xl:p-7.5 p-5 bg-[#fff] border border-light rounded-[20px] w-full flex flex-col justify-between max-w-155 mb-5'>
                <p className='text-primary font-semibold'>We recommend healing based on your emotional state, not confusion or guesswork.</p>
              </div> */}
            <div className='flex gap-5 items-center justify-between xl:flex-nowrap flex-wrap-reverse'>
              <a className="inline-flex text-nowrap items-center gap-2 px-8 py-3.5 bg-orange text-white rounded-full font-bold hover:bg-green  transition-all duration-300 tablet:text-lg md:text-base text-sm" href="#booking">Start Your Healing</a>
              <div className='flex items-center gap-2.5'>
               <div className="flex -space-x-4">
                <Image className="w-12 h-12 rounded-full border-2 border-white object-cover" src={Sleepers01} alt="Aeny Wellness client - Priya"/>
                <Image className="w-12 h-12 rounded-full border-2 border-white object-cover" src={Sleepers02} alt="Aeny Wellness client - Dev"/>
                <Image className="w-12 h-12 rounded-full border-2 border-white object-cover" src={Sleepers03} alt="Aeny Wellness client - Sarah"/>
              </div>
              <span className='text-primary text-base block  font-semibold  leading-normal pl-2.5'>
                27k+ Happy Sleepers
              </span>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
