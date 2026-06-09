import React from 'react';
import Image from 'next/image';
import star from '../../public/images/star.png';
import Schedule01 from '../../public/images/schedule-01.jpg';
import { ScrollAnimate } from '../ScrollAnimate';

export const Schedule = () => {
    return (
        <div className='sm:px-7.5 px-4 relative'>
            <div className='px-5 border border-light  rounded-[30px] bg-white'>
                <div className='max-w-335 w-full mx-auto py-30'>
                    
                    {/* Header Block */}
                    <ScrollAnimate animation="fade-up" duration={0.8} className='flex flex-col md:flex-row items-start md:items-end justify-between mb-20 gap-6 w-full'>
                        <div>
                            <div className="flex items-center gap-5 mb-5">
                                <Image
                                    src={star}
                                    alt=""
                                    aria-hidden="true"
                                    className="rounded-[20px] w-7.5 h-7.5 object-cover"
                                />
                                <span className="text-[#2e2e2e] font-semibold text-lg">Your Journey</span>
                            </div>
                            <h2 className='text-primary  text-[60px] font-semibold leading-[1.2] max-w-184.25'>
                               Your Journey Begins with Each Session
                            </h2>
                        </div>
                        <a className="inline-flex text-nowrap items-center gap-2 px-8 py-3.5 bg-orange text-white rounded-full font-bold hover:bg-green  transition-all duration-300 tablet:text-lg md:text-base text-sm" href="#booking">Reserve Your Spot</a>
                    </ScrollAnimate>

                    <div className='flex flex-col lg:flex-row gap-5'>
                        {/* Left Details */}
                        <ScrollAnimate animation="fade-up" duration={0.8} delay={0.15} className='flex flex-col justify-center  gap-5 max-w-100.5 w-full'>
                            <h3 className='text-primary text-[32px] font-semibold'>Reconnect with your breath, your body, and your inner peace one session at a time.</h3>
                            <div className='border-t  border-[#dadbdb] pb-3.75 mt-3.75'></div>
                            <p className='dm-sans text-lg text-text leading-[1.6]'>
                                Our group healing classes are designed to guide you into deeper rest, emotional clarity, and energetic alignment. Whether you’re seeking a calming evening ritual or a full moonsound bath experience, our schedule offers something for every healing journey.
                            </p>
                        </ScrollAnimate>

                        {/* Schedule Cards Grid with Stagger */}
                        <ScrollAnimate animation="stagger-fade" duration={0.8} stagger={0.15} className='flex flex-col md:flex-row w-full gap-5'>
                            <div className='bg-[url(/images/schedule.jpg)] w-full min-h-87.5 bg-center bg-no-repeat bg-cover p-7.5 relative rounded-[20px] before:content-[""] before:bg-[linear-gradient(rgba(252,252,250,0)_0%,rgb(5,61,53)_100%)] before:absolute before:w-full before:h-full before:inset-0 before:rounded-[20px] before:opacity-100 flex flex-col justify-end'>
                                <div className='flex flex-col justify-between h-full relative z-10'>
                                    <div className='flex items-center gap-4 mb-10'>
                                        <div className='flex items-center gap-2.5'>
                                            <svg className='w-5 h-5 fill-white' aria-hidden="true" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 64h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V160h352v298c0 3.3-2.7 6-6 6z"></path></svg>
                                            <span className='text-white text-base font-semibold'>
                                                Every Tuesday & Friday
                                            </span>
                                        </div>
                                        <div className='flex items-center gap-2.5'>
                                            <svg className='w-5 h-5 fill-white' aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path></svg>
                                            <span className='text-white text-base font-semibold'>
                                                7:00 PM
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className='text-[32px] font-semibold leading-[1.3] text-secondary mb-1.5'>Choose Your Healing</h4>
                                        <p className='text-border text-lg dm-sans max-w-100 w-full'>Select the modality that calls to you — or take our quick quiz to discover what your body needs most right now.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-5 max-w-106 w-full '>
                                <div className='h-full  bg-[url(/images/schedule-01.jpg)] w-full bg-center bg-no-repeat bg-cover p-[60px_20px_20px]  relative rounded-[20px] before:content-[""] before:bg-[linear-gradient(rgba(252,252,250,0)_0%,rgb(5,61,53)_100%)] before:absolute before:w-full before:h-full before:inset-0 before:rounded-[20px] before:opacity-100 flex flex-col justify-end'>
                                    <div className='flex flex-col justify-end  h-full relative z-10'>
                                        <div>
                                            <h4 className='text-[24px] font-semibold leading-[1.3] text-secondary mb-1.5'>Book Your Session</h4>
                                            <p className='text-border text-base dm-sans max-w-100 w-full'>Reach us on WhatsApp or fill in the booking form. We'll confirm within 2 hours and prepare your space.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='h-full bg-[radial-gradient(at_0%_0%,rgb(26,117,103)_0%,rgb(5,61,53)_100%)] w-full p-[60px_20px_20px]  relative rounded-[20px] before:content-[""] before:bg-[linear-gradient(rgba(252,252,250,0)_0%,rgb(5,61,53)_100%)] before:absolute before:w-full before:h-full before:inset-0 before:rounded-[20px] before:opacity-100 flex flex-col justify-end'>
                                    <div className='flex flex-col justify-end h-full relative z-10'>
                                        <div>
                                            <h4 className='text-[24px] font-semibold leading-[1.3] text-secondary mb-1.5'>Arrive & Surrender</h4>
                                            <p className='text-border text-base dm-sans max-w-100 w-full'>Walk in as you are. Your only job is to receive. We hold the space, the safety, and the intention.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimate>
                    </div>
                </div>
            </div>
        </div>
    )
}