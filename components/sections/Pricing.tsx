"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';
import Star from '../../public/images/star-orange.png';
import Studio from '../../public/images/studio-01.jpg';
import { ScrollAnimate } from '../ScrollAnimate';
import "swiper/css";
export const Pricing = () => {
  return (
    <section className="lg:py-30 tablet:py-22 md:py-15 py-10 lg:pb-30! pb-5! lg:mt-30 tablet:mt-22 md:mt-15 mt-10 bg-dark-green relative overflow-hidden rounded-[40px] mx-4 sm:mx-8 shadow-card">
      <div className='px-5'>
        <div className="max-w-335 w-full mx-auto">
          <div className="flex flex-col-reverse lg:flex-row xl:gap-16 gap-10 items-start">

            {/* Left Column - Packages Stagger */}
            <ScrollAnimate animation="stagger-fade" duration={0.8} stagger={0.15} className="max-w-full lg:max-w-[56%] w-full flex flex-col gap-5 sm:block hidden">
              <div className='flex gap-5 flex-wrap justify-between'>

                {/* Package 1 */}
                <ScrollAnimate animation="stagger-fade" duration={0.8} stagger={0.20} className="bg-green max-w-full sm:max-w-[calc(50%-10px)] w-full rounded-[30px] p-5 text-white flex flex-col justify-between min-h-95">
                  <div>
                    <h3 className="xl:text-[28px] text-2xl font-bold mb-4 text-center ">Sound Healing</h3>
                    <div className="mb-5 flex items-baseline before:rounded-[20px] p-5 before:bg-dark-green relative before:content-[''] before:absolute before:w-full before:h-full before:opacity-50 before:inset-0">
                      <div className='relative z-10 flex justify-between items-center w-full gap-2 xl:flex-nowrap flex-wrap'>
                        <p className='text-white text-[16px] lg:text-[18px] font-semibold leading-[1.4]'>
                          1x Private Session
                        </p>
                        <p className='flex text-[32px] lg:text-[40px] text-orange font-semibold items-center leading-none text-nowrap'>
                          <span className='text-orange text-[20px]'>₹</span>
                          4667
                        </p>
                      </div>
                    </div>
                    <p className='mb-5 sm:text-base text-[12px] dm-sans text-white/80 leading-normal'>
                      Let the resonant vibrations of ancient singing bowls wash over you — no effort required. Pure, passive, profound.
                    </p>
                  </div>
                  <a className="flex text-nowrap justify-center items-center gap-2 px-8 py-3.5 bg-orange text-white rounded-full font-bold hover:bg-white hover:text-orange transition-all duration-300 tablet:text-lg md:text-base text-sm" href="#booking">Start Healing</a>
                </ScrollAnimate>

                {/* Package 2 */}
                <ScrollAnimate animation="stagger-fade" duration={0.8} stagger={0.20} className="bg-green max-w-full sm:max-w-[calc(50%-10px)] w-full rounded-[30px] p-5 text-white flex flex-col justify-between min-h-95">
                  <div>
                    <h3 className="xl:text-[28px] text-2xl font-bold mb-4 text-center ">Reiki Energy</h3>
                    <div className="mb-5 flex items-baseline before:rounded-[20px] p-5 before:bg-dark-green relative before:content-[''] before:absolute before:w-full before:h-full before:opacity-50 before:inset-0">
                      <div className='relative z-10 flex justify-between items-center w-full gap-2 xl:flex-nowrap flex-wrap'>
                        <p className='text-white text-[16px] lg:text-[18px] font-semibold leading-[1.4]'>
                          4x Session Pkg
                        </p>
                        <p className='flex text-[32px] lg:text-[40px] text-orange font-semibold items-center leading-none text-nowrap'>
                          <span className='text-orange text-[20px]'>₹</span>
                          5619
                        </p>
                      </div>
                    </div>
                    <p className='mb-5 sm:text-base text-[12px] dm-sans text-white/80 leading-normal'>
                      Universal life energy flows gently through the body to dissolve blockages and restore your natural rhythm.
                    </p>
                  </div>
                  <a className="flex text-nowrap justify-center items-center gap-2 px-8 py-3.5 bg-orange text-white rounded-full font-bold hover:bg-white hover:text-orange transition-all duration-300 tablet:text-lg md:text-base text-sm" href="#booking">Start Healing</a>
                </ScrollAnimate>

                {/* Package 3 */}
                <ScrollAnimate animation="stagger-fade" duration={0.8} stagger={0.25} className="bg-green max-w-full sm:max-w-[calc(50%-10px)] w-full rounded-[30px] p-5 text-white flex flex-col justify-between min-h-95">
                  <div>
                    <h3 className="xl:text-[28px] text-2xl font-bold mb-4 text-center ">Embodied Yoga</h3>
                    <div className="mb-5 flex items-baseline before:rounded-[20px] p-5 before:bg-dark-green relative before:content-[''] before:absolute before:w-full before:h-full before:opacity-50 before:inset-0">
                      <div className='relative z-10 flex justify-between items-center w-full gap-2 xl:flex-nowrap flex-wrap'>
                        <p className='text-white text-[16px] lg:text-[18px] font-semibold leading-[1.4]'>
                          1x Private Session
                        </p>
                        <p className='flex text-[32px] lg:text-[40px] text-orange font-semibold items-center leading-none text-nowrap'>
                          <span className='text-orange text-[20px]'>₹</span>
                          4667
                        </p>
                      </div>
                    </div>
                    <p className='mb-5 sm:text-base text-[12px] dm-sans text-white/80 leading-normal'>
                      Movement as a coming-home. Reclaim your body as a sacred space through mindful, gentle flow.
                    </p>
                  </div>
                  <a className="flex text-nowrap justify-center items-center gap-2 px-8 py-3.5 bg-orange text-white rounded-full font-bold hover:bg-white hover:text-orange transition-all duration-300 tablet:text-lg md:text-base text-sm" href="#booking">Book Now</a>
                </ScrollAnimate>

                {/* Package 4 */}
                <ScrollAnimate animation="stagger-fade" duration={0.8} stagger={0.25} className="bg-green max-w-full sm:max-w-[calc(50%-10px)] w-full rounded-[30px] p-5 text-white flex flex-col justify-between min-h-95">
                  <div>
                    <h3 className="xl:text-[28px] text-2xl font-bold mb-4 text-center ">Guided Meditation</h3>
                    <div className="mb-5 flex items-baseline before:rounded-[20px] p-5 before:bg-dark-green relative before:content-[''] before:absolute before:w-full before:h-full before:opacity-50 before:inset-0">
                      <div className='relative z-10 flex justify-between items-center w-full gap-2 xl:flex-nowrap flex-wrap'>
                        <p className='text-white text-[16px] lg:text-[18px] font-semibold leading-[1.4]'>
                          4x Session Pkg
                        </p>
                        <p className='flex text-[32px] lg:text-[40px] text-orange font-semibold items-center leading-none text-nowrap'>
                          <span className='text-orange text-[20px]'>₹</span>
                          5619
                        </p>
                      </div>
                    </div>
                    <p className='mb-5 sm:text-base text-[12px] dm-sans text-white/80 leading-normal'>
                      A guided journey inward — suitable for beginners and seasoned practitioners alike.
                    </p>
                  </div>
                  <a className="flex text-nowrap justify-center items-center gap-2 px-8 py-3.5 bg-orange text-white rounded-full font-bold hover:bg-white hover:text-orange transition-all duration-300 tablet:text-lg md:text-base text-sm" href="#booking">Book Now</a>
                </ScrollAnimate>

              </div>
            </ScrollAnimate>
            <div className="block sm:hidden slider-container">
              <Swiper
                spaceBetween={10}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2,
                  scale: 0.9,
                }}
                grabCursor
                slidesPerView={1.2}
                centeredSlides={true}
              >
                <SwiperSlide>
                  <ScrollAnimate animation="stagger-fade" duration={0.8} stagger={0.20} className="bg-green max-w-full w-full rounded-[30px] p-3 text-white flex flex-col justify-between sm:min-h-95">
                    <div>
                      <h3 className="xl:text-[28px] sm:text-2xl xs:text-xl text-lg font-bold mb-4 text-center ">Sound Healing</h3>
                      <div className="mb-5 flex items-baseline before:rounded-[20px] sm:p-5 p-3 before:bg-dark-green relative before:content-[''] before:absolute before:w-full before:h-full before:opacity-50 before:inset-0">
                        <div className='relative z-10 flex justify-between items-center w-full gap-2 xl:flex-nowrap flex-wrap'>
                          <p className='text-white text-[16px] lg:text-[18px] font-semibold leading-[1.4]'>
                            1x Private Session
                          </p>
                          <p className='flex text-[32px] lg:text-[40px] text-orange font-semibold items-center leading-none text-nowrap'>
                            <span className='text-orange text-[20px]'>₹</span>
                            4667
                          </p>
                        </div>
                      </div>
                      <p className='mb-5 sm:text-base text-[12px] dm-sans text-white/80 leading-normal'>
                        Let the resonant vibrations of ancient singing bowls wash over you — no effort required. Pure, passive, profound.
                      </p>
                    </div>
                    <a className="flex text-nowrap justify-center items-center gap-2 px-8 py-3.5 bg-orange text-white rounded-full font-bold hover:bg-white hover:text-orange transition-all duration-300 tablet:text-lg md:text-base text-sm" href="#booking">Start Healing</a>
                  </ScrollAnimate>
                </SwiperSlide>
                <SwiperSlide>
                  <ScrollAnimate animation="stagger-fade" duration={0.8} stagger={0.20} className="bg-green max-w-full sm:max-w-[calc(50%-10px)] w-full rounded-[30px] p-3 text-white flex flex-col justify-between sm:min-h-95">
                    <div>
                      <h3 className="xl:text-[28px] sm:text-2xl xs:text-xl text-lg font-bold mb-4 text-center ">Reiki Energy</h3>
                      <div className="mb-5 flex items-baseline before:rounded-[20px] sm:p-5 p-3 before:bg-dark-green relative before:content-[''] before:absolute before:w-full before:h-full before:opacity-50 before:inset-0">
                        <div className='relative z-10 flex justify-between items-center w-full gap-2 xl:flex-nowrap flex-wrap'>
                          <p className='text-white text-[16px] lg:text-[18px] font-semibold leading-[1.4]'>
                            4x Session Pkg
                          </p>
                          <p className='flex text-[32px] lg:text-[40px] text-orange font-semibold items-center leading-none text-nowrap'>
                            <span className='text-orange text-[20px]'>₹</span>
                            5619
                          </p>
                        </div>
                      </div>
                      <p className='mb-5 sm:text-base text-[12px] dm-sans text-white/80 leading-normal'>
                        Universal life energy flows gently through the body to dissolve blockages and restore your natural rhythm.
                      </p>
                    </div>
                    <a className="flex text-nowrap justify-center items-center gap-2 px-8 py-3.5 bg-orange text-white rounded-full font-bold hover:bg-white hover:text-orange transition-all duration-300 tablet:text-lg md:text-base text-sm" href="#booking">Start Healing</a>
                  </ScrollAnimate>
                </SwiperSlide>
                <SwiperSlide>
                  <ScrollAnimate animation="stagger-fade" duration={0.8} stagger={0.25} className="bg-green max-w-full sm:max-w-[calc(50%-10px)] w-full rounded-[30px] p-3 text-white flex flex-col justify-between sm:min-h-95">
                    <div>
                      <h3 className="xl:text-[28px] sm:text-2xl xs:text-xl text-lg font-bold mb-4 text-center ">Embodied Yoga</h3>
                      <div className="mb-5 flex items-baseline before:rounded-[20px] sm:p-5 p-3 before:bg-dark-green relative before:content-[''] before:absolute before:w-full before:h-full before:opacity-50 before:inset-0">
                        <div className='relative z-10 flex justify-between items-center w-full gap-2 xl:flex-nowrap flex-wrap'>
                          <p className='text-white text-[16px] lg:text-[18px] font-semibold leading-[1.4]'>
                            1x Private Session
                          </p>
                          <p className='flex text-[32px] lg:text-[40px] text-orange font-semibold items-center leading-none text-nowrap'>
                            <span className='text-orange text-[20px]'>₹</span>
                            4667
                          </p>
                        </div>
                      </div>
                      <p className='mb-5 sm:text-base text-[12px] dm-sans text-white/80 leading-normal'>
                        Movement as a coming-home. Reclaim your body as a sacred space through mindful, gentle flow.
                      </p>
                    </div>
                    <a className="flex text-nowrap justify-center items-center gap-2 px-8 py-3.5 bg-orange text-white rounded-full font-bold hover:bg-white hover:text-orange transition-all duration-300 tablet:text-lg md:text-base text-sm" href="#booking">Book Now</a>
                  </ScrollAnimate>

                </SwiperSlide>
                <SwiperSlide>
                  <ScrollAnimate animation="stagger-fade" duration={0.8} stagger={0.25} className="bg-green max-w-full sm:max-w-[calc(50%-10px)] w-full rounded-[30px] p-3 text-white flex flex-col justify-between sm:min-h-95">
                    <div>
                      <h3 className="xl:text-[28px] sm:text-2xl xs:text-xl text-lg font-bold mb-4 text-center ">Guided Meditation</h3>
                      <div className="mb-5 flex items-baseline before:rounded-[20px] sm:p-5 p-3 before:bg-dark-green relative before:content-[''] before:absolute before:w-full before:h-full before:opacity-50 before:inset-0">
                        <div className='relative z-10 flex justify-between items-center w-full gap-2 xl:flex-nowrap flex-wrap'>
                          <p className='text-white text-[16px] lg:text-[18px] font-semibold leading-[1.4]'>
                            4x Session Pkg
                          </p>
                          <p className='flex text-[32px] lg:text-[40px] text-orange font-semibold items-center leading-none text-nowrap'>
                            <span className='text-orange text-[20px]'>₹</span>
                            5619
                          </p>
                        </div>
                      </div>
                      <p className='mb-5 sm:text-base text-[12px] dm-sans text-white/80 leading-normal'>
                        A guided journey inward — suitable for beginners and seasoned practitioners alike.
                      </p>
                    </div>
                    <a className="flex text-nowrap justify-center items-center gap-2 px-8 py-3.5 bg-orange text-white rounded-full font-bold hover:bg-white hover:text-orange transition-all duration-300 tablet:text-lg md:text-base text-sm" href="#booking">Book Now</a>
                  </ScrollAnimate>
                </SwiperSlide>
              </Swiper>
            </div>
            {/* Right Column - Info Block */}
            <ScrollAnimate animation="fade-up" duration={0.8} delay={0.15} className="max-w-full lg:max-w-[40%] w-full flex flex-col justify-between gap-12 self-stretch">
              <div>
                <div className="flex items-center gap-5 mb-5">
                  <Image
                    src={Star}
                    alt=""
                    aria-hidden="true"
                    className="rounded-[20px] w-7.5 h-7.5 object-cover"
                  />
                  <span className="text-white font-semibold sm:text-lg text-base">Pricing Packages</span>
                </div>
                <h2 className='text-white xl:text-[50px] md:text-[38px] sm:text-[26px] text-xl font-bold tan-pearl leading-[1.8] mb-5'>
                  Choose the Right Path for You
                </h2>
                <p className='dm-sans sm:text-lg text-sm text-border leading-[1.6] mb-5'>
                  Not sure where to begin? Tell us how you feel and we'll point you to the perfect session.
                </p>

                <a href="#booking" className='flex items-center text-orange text-base font-medium gap-2.5'>
                  Explore Custom Modalities
                  <svg className='w-4 h-4 fill-orange' aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z"></path></svg>
                </a>
              </div>

              <div className="relative w-full rounded-[20px] overflow-hidden shadow-soft">
                <div className="flex items-center justify-center text-white/20 font-bold">
                  <Image src={Studio} alt='Aeny Wellness cozy studio and consultation room' className='block w-full object-cover' />
                </div>
                <div className="absolute sm:bottom-6 sm:left-6 sm:right-6 bottom-3 left-3 right-3 flex items-center justify-between bg-white/10 backdrop-blur-md rounded-2xl sm:p-4 p-2 border border-white/20">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-orange flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    </div>
                    <div>
                      <p className="text-[12px] text-white/80 mb-0 font-medium">Custom packages:</p>
                      <p className="text-[14px] font-bold text-white mb-0">+91 99257 88810</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </div>
    </section>
  );
};
