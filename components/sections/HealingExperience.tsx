'use client';

import React, { useEffect, useState } from "react"
import Image from 'next/image';
import star from '../../public/images/star.png';
import { PopupModal } from "react-calendly";

import { ScrollAnimate } from '../ScrollAnimate';
export const HealingExperience = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    return (

        <div className='sm:px-7.5  px-4 relative'>
            <div className='sm:px-5 px-2.5 border border-light  rounded-[30px] bg-white'>
                <div className='max-w-335 w-full mx-auto 2xl:py-30 tablet:py-20 md:py-15 py-10 pb-4!'>

                    {/* Header Block */}
                    <ScrollAnimate animation="fade-up" duration={0.8} className='flex flex-col tablet:flex-row items-start tablet:items-end justify-between md:mb-15 mb-10 gap-6 w-full'>
                        <div>
                            <div className="flex items-center gap-5 mb-5">
                                <Image
                                    src={star}
                                    alt=""
                                    aria-hidden="true"
                                    className="rounded-[20px] w-7.5 h-7.5 object-cover"
                                />
                                <span className="text-[#2e2e2e] font-semibold sm:text-lg text-base">Your Journey</span>
                            </div>
                            <h2 className='text-primary 2xl:text-[50px] xl:text-[40px] md:text-[38px] sm:text-[26px] text-xl font-bold tan-pearl leading-[1.8] max-w-184.25 mb-5'>
                                The Healing Experience
                            </h2>
                            <p className="sm:text-lg text-sm dm-sans leading-normal text-text"><i>"Every experience is unique."</i> Your only role is to receive.
                            </p>
                        </div>
                        <a
                            href="#booking"
                            onClick={(e) => {
                                e.preventDefault();
                                setIsOpen(true);
                            }}
                            className="inline-flex text-nowrap items-center gap-2 px-8 py-3.5 bg-orange text-white rounded-full font-bold hover:bg-green  transition-all duration-300 tablet:text-lg md:text-base text-sm"
                        >
                            Book Session
                            <svg aria-hidden="true" className="fill-white w-4" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z"></path></svg>
                        </a>
                        {/* <a className="inline-flex text-nowrap items-center gap-2 px-8 py-3.5 bg-orange text-white rounded-full font-bold hover:bg-green  transition-all duration-300 tablet:text-lg md:text-base text-sm" href="#booking">Begin Your Journey</a> */}
                    </ScrollAnimate>

                    <div className='flex flex-col lg:flex-row gap-5'>
                        {/* Schedule Cards Grid with Stagger */}
                        <ScrollAnimate animation="stagger-fade" duration={0.8} stagger={0.15} className='flex flex-col md:flex-row w-full sm:gap-5 gap-3'>
                            <div className='flex flex-row md:flex-col sm:gap-5 gap-3 md:max-w-106 w-full '>
                                <ScrollAnimate animation="stagger-fade" duration={0.8} stagger={0.20} className='bg-[url(/images/about2.jpg)] w-full bg-center bg-no-repeat bg-cover sm:p-[170px_20px_20px] p-[70px_12px_12px]  relative rounded-[20px] before:content-[""] before:bg-[linear-gradient(rgba(252,252,250,0)_0%,rgb(5,61,53)_100%)] before:absolute before:w-full before:h-full before:inset-0 before:rounded-[20px] before:opacity-100 flex flex-col justify-end'>
                                    <div className='flex flex-col justify-end  h-full relative z-10'>
                                        <div className="flex flex-col justify-end">
                                            <h4 className='sm:text-[24px] text-lg font-semibold leading-[1.3] text-secondary mb-1.5'>You Arrive</h4>
                                            <p className='text-border sm:text-base text-[12px] dm-sans max-w-100 w-full'>In a calm, quiet space designed for deep relaxation.</p>
                                        </div>
                                    </div>
                                </ScrollAnimate>
                                <ScrollAnimate animation="stagger-fade" duration={0.8} stagger={0.24} className='bg-[url(/images/about3.jpg)] bg-center bg-no-repeat bg-cover w-full sm:p-[170px_20px_20px] p-[70px_12px_12px]  relative rounded-[20px] before:content-[""] before:bg-[linear-gradient(rgba(252,252,250,0)_0%,rgb(5,61,53)_100%)] before:absolute before:w-full before:h-full before:inset-0 before:rounded-[20px] before:opacity-100 flex flex-col justify-end'>
                                    <div className='flex flex-row h-full relative z-10'>
                                        <div className="flex flex-col justify-end">
                                            <h4 className='sm:text-[24px] text-lg font-semibold leading-[1.3] text-secondary mb-1.5'>You Settle</h4>
                                            <p className='text-border sm:text-base text-[12px] dm-sans max-w-100 w-full'>Lie down comfortably and begin to relax.</p>
                                        </div>
                                    </div>
                                </ScrollAnimate>
                            </div>
                            <ScrollAnimate animation="stagger-fade" duration={0.8} stagger={0.20} className='bg-[url(/images/schedule.jpg)] w-full sm:min-h-87.5 min-h-55 bg-center bg-no-repeat bg-cover sm:p-7.5 p-4 relative rounded-[20px] before:content-[""] before:bg-[linear-gradient(rgba(252,252,250,0)_0%,rgb(5,61,53)_100%)] before:absolute before:w-full before:h-full before:inset-0 before:rounded-[20px] before:opacity-100 flex flex-col justify-end'>
                                <div className='flex flex-col justify-end h-full relative z-10'>

                                    <div>
                                        <h4 className='sm:text-[32px] text-2xl font-semibold leading-[1.3] text-secondary mb-1.5'>Sound Guide</h4>
                                        <p className='text-border sm:text-lg text-[14px] dm-sans max-w-100 w-full'>Gentle vibrations lead you into deep calm.</p>
                                    </div>
                                </div>
                            </ScrollAnimate>
                            <div className='flex flex-row md:flex-col sm:gap-5 gap-3 md:max-w-106 w-full h-full'>
                                <ScrollAnimate animation="stagger-fade" duration={0.8} stagger={0.20} className='bg-[url(/images/schedule-01.jpg)] w-full bg-center bg-no-repeat bg-cover sm:p-[170px_20px_20px] p-[70px_12px_12px] relative rounded-[20px] before:content-[""] before:bg-[linear-gradient(rgba(252,252,250,0)_0%,rgb(5,61,53)_100%)] before:absolute before:w-full before:h-full before:inset-0 before:rounded-[20px] before:opacity-100 flex flex-col justify-end xs:h-full h-auto'>
                                    <div className='flex flex-col justify-end  h-full relative z-10'>
                                        <div className="flex flex-col justify-end">
                                            <h4 className='sm:text-[24px] text-lg font-semibold leading-[1.3] text-secondary mb-1.5'>Release</h4>
                                            <p className='text-border sm:text-base text-[12px]  dm-sans max-w-100 w-full'>Tension melts as you drift inward peacefully.</p>
                                        </div>
                                    </div>
                                </ScrollAnimate>
                                <ScrollAnimate animation="stagger-fade" duration={0.8} stagger={0.24} className='bg-[radial-gradient(at_0%_0%,rgb(26,117,103)_0%,rgb(5,61,53)_100%)] w-full sm:p-[170px_20px_20px] p-[70px_12px_12px] relative rounded-[20px] before:content-[""] before:bg-[linear-gradient(rgba(252,252,250,0)_0%,rgb(5,61,53)_100%)] before:absolute before:w-full before:h-full before:inset-0 before:rounded-[20px] before:opacity-100 flex flex-col justify-end xs:h-full h-auto'>
                                    <div className='flex flex-col justify-end h-full relative z-10'>
                                        <div className="flex flex-col justify-end">
                                            <h4 className='sm:text-[24px] text-lg font-semibold leading-[1.3] text-secondary mb-1.5'>Return</h4>
                                            <p className='text-border sm:text-base text-[12px]  dm-sans max-w-100 w-full'>You emerge feeling lighter and more grounded.</p>
                                        </div>
                                    </div>
                                </ScrollAnimate>
                            </div>
                        </ScrollAnimate>
                    </div>
                </div>
            </div>
            {isMounted && (
                <PopupModal
                    url="https://calendly.com/neha-wilysion/new-meeting"
                    onModalClose={() => setIsOpen(false)}
                    open={isOpen}
                    rootElement={document.body}
                />
            )}
        </div>
    )
}