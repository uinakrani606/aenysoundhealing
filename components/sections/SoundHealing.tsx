import React from "react"
import Image from 'next/image';
import Star from '../../public/images/star-orange.png';
import Instragram from '../../public/images/instagram.svg';
import { ScrollAnimate } from "../ScrollAnimate";
export const SoundHealing = () => {
    return (
        <div className="lg:py-30 tablet:py-22 md:py-15 md:pb-5 pb-5 py-10  bg-dark-green relative overflow-hidden rounded-[40px] mx-4 sm:mx-8 shadow-card">
            <div className="px-5">
                <div className="max-w-335 w-full mx-auto">
                    <ScrollAnimate animation="fade-up" duration={0.8} className="flex items-center justify-center gap-5 mb-5">
                        <Image
                            src={Star}
                            alt=""
                            aria-hidden="true"
                            className="rounded-[20px] w-7.5 h-7.5 object-cover"
                        />
                        <span className="text-white font-semibold sm:text-lg text-base">Understanding Sound</span>
                    </ScrollAnimate>
                    <ScrollAnimate animation="fade-up" duration={0.8}>
                        <h2 className='text-white text-center xl:text-[50px] md:text-[38px] sm:text-[26px] text-lg font-medium tan-pearl leading-normal sm:mb-10 mb-5'>
                            Experience the Healing Power of Sound
                        </h2>
                    </ScrollAnimate>
                    <div className="flex xl:gap-20 lg:gap-12 md:gap-8 gap-4 items-center tablet:flex-nowrap flex-wrap">
                        <ScrollAnimate animation="slide-left" duration={0.8}>
                            <p className='dm-sans text-left w-full mx-auto text-lg text-border leading-[1.6] mb-5'>
                                Sound healing is a gentle, non-invasive practice that uses soothing vibrations and therapeutic frequencies to help calm your nervous system, quiet mental chatter, and restore emotional balance.
                            </p>
                            <div className="sm:text-lg text-base block leading-[1.7] py-3 px-4 text-white rounded-[10px] text-left border-l-3 border-orange font-semibold bg-[#f38c6417]">
                                You simply lie down, close your eyes, and let the sounds wash over you.
                            </div>
                            <ul className="mt-5">
                                <li className="text-white relative py-5 before:content-[''] before:absolute before:w-full before:h-px before:bg-[linear-gradient(to_right,#f38c63,#f38c63,rgba(0,0,0,0))] before:bottom-0">No prior experience needed</li>
                                <li className="text-white relative py-5 before:content-[''] before:absolute before:w-full before:h-px before:bg-[linear-gradient(to_right,#f38c63,#f38c63,rgba(0,0,0,0))] before:bottom-0">No special techniques to learn</li>
                                <li className="text-white relative py-5 before:content-[''] before:absolute before:w-full before:h-px before:bg-[linear-gradient(to_right,#f38c63,#f38c63,rgba(0,0,0,0))] before:bottom-0">Gentle, safe, and deeply restorative</li>
                                <li className="text-white relative py-5 before:content-[''] before:absolute before:w-full before:h-px before:bg-[linear-gradient(to_right,#f38c63,#f38c63,rgba(0,0,0,0))] before:bottom-0">Arrive exactly as you are</li>
                                <li className="text-white relative py-5">Just come as you are</li>
                            </ul>
                        </ScrollAnimate>
                              <section className="w-full mx-auto max-w-335">
                <div className="relative overflow-hidden rounded-lg bg-[radial-gradient(at_0%_0%,rgb(26,117,103)_0%,rgb(5,61,53)_100%)] p-4 md:p-10 text-white shadow-card">
                    <div className="absolute -top-24 -right-20 h-64 w-64 rounded-full bg-white/10" />
                    <div className="absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-white/5" />
                    <div className="absolute right-8 top-6 text-7xl opacity-10">
                        ◎
                    </div>

                    <div className="relative z-10">
                        <div className="flex items-center flex-wrap sm:flex-nowrap sm:gap-5 gap-2 mb-5">
                            <Image src={Instragram} alt="Instagram Icon" className="w-10 h-10" aria-hidden="true" />
                            <div className="rounded-md border border-white/10 bg-glass px-4 py-2 backdrop-blur-md">
                                <span className="text-small text-accent">
                                   27.3K Followers
                                </span>
                            </div>
                        </div>
                        <h2 className="mt-5 text-xl text-heading-lg font-bold text-accent">
                            Let's Connect
                        </h2>
                        <p className="mt-2 text-body text-lg text-white/90">
                            @soulhealing_by_aeny    
                        </p>
                        <p className="sm:mt-5 mt-2.5 max-w-xl text-body text-muted leading-relaxed">
                            Follow me on Instagram for creative work, updates, behind-the-scenes content and daily inspiration.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <a
                                href="https://instagram.com/soulhealing_by_aeny"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex cursor-pointer items-center justify-center gap-2 sm:px-8 px-4 py-3.5 bg-orange text-white rounded-full font-bold transition-all duration-500 hover:bg-white hover:text-dark-green w-full"
                            >
                                Connect on Instagram
                            </a>
                        </div>
                    </div>
                </div>
            </section>
                        {/* <ScrollAnimate animation="slide-right" duration={0.8} className="bg-green max-w-92.5 w-full rounded-[30px] sm:p-10 p-5 text-white flex flex-col justify-between sm:min-h-95">
                            <div>
                                <h3 className="sm:text-[28px] text-2xl font-bold mb-4">The Experience</h3>
                                <p className='mb-5 text-base text-white leading-normal'>
                                    Simple. Effortless. Peaceful.
                                </p>
                                <ul>
                                    <li className="relative flex  items-center gap-5 mb-5 before:content-[''] before:absolute before:w-px before:h-[calc(100%-10px)] before:top-9.75 before:left-4.75 before:bg-light/50 before:bg-[linear-gradient(to_bottom,#f0f0f0,#f0f0f0,rgba(0,0,0,0))] ">
                                        <h3 className="text-[32px] text-[#ffffff1a] font-extrabold">01</h3>
                                        <p className="sm:text-base text-sm">Settle into a comfortable position</p>
                                    </li>
                                    <li className="flex  relative items-center gap-5 mb-5 before:content-[''] before:absolute before:w-px before:h-[calc(100%-10px)] before:top-9.75 before:left-4.75 before:bg-light/50 before:bg-[linear-gradient(to_bottom,#f0f0f0,#f0f0f0,rgba(0,0,0,0))]">
                                        <h3 className="text-[32px] text-[#ffffff1a] font-extrabold">02</h3>
                                        <p className="sm:text-base text-sm">Close your eyes and let go of the day</p>
                                    </li>
                                    <li className="flex  items-center gap-5">
                                        <h3 className="text-[32px] text-[#ffffff1a] font-extrabold">03</h3>
                                        <p className="sm:text-base text-sm">Immerse yourself in the healing sounds</p>
                                    </li>
                                </ul>
                            </div>
                        </ScrollAnimate> */}
                    </div>
                </div>
            </div>
        </div>
    )
}