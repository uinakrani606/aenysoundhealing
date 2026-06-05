import React from "react"
import Image from 'next/image';
import star from '../../public/images/star.png';
import { ScrollAnimate } from '../ScrollAnimate';
export const HealingExperience = () => {
    return (
          <div className='sm:px-7.5  px-4 relative'>
            <div className='px-5 border border-light  rounded-[30px] bg-white'>
                <div className='max-w-335 w-full mx-auto lg:py-30 tablet:py-22 md:py-15 py-10 pb-10!'>
                    
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
                            <h2 className='text-primary xl:text-[60px] md:text-[42px] sm:text-[28px] text-xl font-semibold leading-[1.2] max-w-184.25 mb-5'>
                               The Healing Experience
                            </h2>
                            <p className="sm:text-lg text-sm dm-sans leading-normal text-text tablet:mb-5"><i>"Every experience is unique."</i> Your only role is to receive.
                            </p>
                        </div>
                        <a className="inline-flex text-nowrap items-center gap-2 px-8 py-3.5 bg-orange text-white rounded-full font-bold hover:bg-green  transition-all duration-300" href="#booking">Begin Your Journey</a>
                    </ScrollAnimate>

                    <div className='flex flex-col lg:flex-row gap-5'>
                        {/* Schedule Cards Grid with Stagger */}
                        <ScrollAnimate animation="stagger-fade" duration={0.8} stagger={0.15} className='flex flex-col md:flex-row w-full gap-5'>
                            <div className='flex md:flex-col sm:flex-row flex-col gap-5 md:max-w-106 w-full '>
                                <ScrollAnimate animation="stagger-fade" duration={0.8} stagger={0.20} className='h-full  bg-[url(/images/about2.jpg)] w-full bg-center bg-no-repeat bg-cover p-[170px_20px_20px]  relative rounded-[20px] before:content-[""] before:bg-[linear-gradient(rgba(252,252,250,0)_0%,rgb(5,61,53)_100%)] before:absolute before:w-full before:h-full before:inset-0 before:rounded-[20px] before:opacity-100 flex flex-col justify-end'>
                                    <div className='flex flex-col justify-end  h-full relative z-10'>
                                        <div>
                                            <h4 className='text-[24px] font-semibold leading-[1.3] text-secondary mb-1.5'>You Arrive</h4>
                                            <p className='text-border text-base dm-sans max-w-100 w-full'>In a calm, quiet space designed for deep relaxation.</p>
                                        </div>
                                    </div>
                                </ScrollAnimate>
                                <ScrollAnimate animation="stagger-fade" duration={0.8} stagger={0.24} className='h-full bg-[url(/images/about3.jpg)] bg-center bg-no-repeat bg-cover w-full p-[170px_20px_20px]  relative rounded-[20px] before:content-[""] before:bg-[linear-gradient(rgba(252,252,250,0)_0%,rgb(5,61,53)_100%)] before:absolute before:w-full before:h-full before:inset-0 before:rounded-[20px] before:opacity-100 flex flex-col justify-end'>
                                    <div className='flex md:flex-col sm:flex-row flex-col justify-end h-full relative z-10'>
                                        <div>
                                            <h4 className='text-[24px] font-semibold leading-[1.3] text-secondary mb-1.5'>You Settle</h4>
                                            <p className='text-border text-base dm-sans max-w-100 w-full'>Lie down comfortably and begin to relax.</p>
                                        </div>
                                    </div>
                                </ScrollAnimate>
                            </div>
                            <ScrollAnimate animation="stagger-fade" duration={0.8} stagger={0.20} className='bg-[url(/images/schedule.jpg)] w-full min-h-87.5 bg-center bg-no-repeat bg-cover sm:p-7.5 p-4 relative rounded-[20px] before:content-[""] before:bg-[linear-gradient(rgba(252,252,250,0)_0%,rgb(5,61,53)_100%)] before:absolute before:w-full before:h-full before:inset-0 before:rounded-[20px] before:opacity-100 flex flex-col justify-end'>
                                <div className='flex flex-col justify-end h-full relative z-10'>
                                
                                    <div>
                                        <h4 className='sm:text-[32px] text-2xl font-semibold leading-[1.3] text-secondary mb-1.5'>Sound Guide</h4>
                                        <p className='text-border text-lg dm-sans max-w-100 w-full'>Gentle vibrations lead you into deep calm.</p>
                                    </div>
                                </div>
                            </ScrollAnimate>
                            <div className='flex md:flex-col sm:flex-row flex-col gap-5 md:max-w-106 w-full '>
                                <ScrollAnimate animation="stagger-fade" duration={0.8} stagger={0.20} className='h-full  bg-[url(/images/schedule-01.jpg)] w-full bg-center bg-no-repeat bg-cover p-[170px_20px_20px]  relative rounded-[20px] before:content-[""] before:bg-[linear-gradient(rgba(252,252,250,0)_0%,rgb(5,61,53)_100%)] before:absolute before:w-full before:h-full before:inset-0 before:rounded-[20px] before:opacity-100 flex flex-col justify-end'>
                                    <div className='flex flex-col justify-end  h-full relative z-10'>
                                        <div>
                                            <h4 className='text-[24px] font-semibold leading-[1.3] text-secondary mb-1.5'>Release</h4>
                                            <p className='text-border text-base dm-sans max-w-100 w-full'>Tension melts as you drift inward peacefully.</p>
                                        </div>
                                    </div>
                                </ScrollAnimate>
                                <ScrollAnimate animation="stagger-fade" duration={0.8} stagger={0.24} className='h-full bg-[radial-gradient(at_0%_0%,rgb(26,117,103)_0%,rgb(5,61,53)_100%)] w-full p-[170px_20px_20px]  relative rounded-[20px] before:content-[""] before:bg-[linear-gradient(rgba(252,252,250,0)_0%,rgb(5,61,53)_100%)] before:absolute before:w-full before:h-full before:inset-0 before:rounded-[20px] before:opacity-100 flex flex-col justify-end'>
                                    <div className='flex flex-col justify-end h-full relative z-10'>
                                        <div>
                                            <h4 className='text-[24px] font-semibold leading-[1.3] text-secondary mb-1.5'>Return</h4>
                                            <p className='text-border text-base dm-sans max-w-100 w-full'>You emerge feeling lighter and more grounded.</p>
                                        </div>
                                    </div>
                                </ScrollAnimate>
                            </div>
                        </ScrollAnimate>
                    </div>
                </div>
            </div>
        </div>
    )
}