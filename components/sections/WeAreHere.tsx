import React from "react";
import { ScrollAnimate } from '../ScrollAnimate';
import Image from 'next/image';
import star from '../../public/images/star.png';
import GlobalSessionImg from "../../public/images/star.png";

export const WeAreHere = () => {
    const countries = ["India", "USA", "Canada", "Australia", "UK", "Germany"];
    const sessions = [
        "Weekly Group Sound Healing",
        "Corporate Wellness Session",
        "Full Moon Healing Circle",
        "Meditation & Frequency Therapy",
        "Private Online Healing",
    ];
    return (
        <div>
            <div className='max-w-335 w-full mx-auto flex flex-col lg:flex-row gap-20 lg:pt-30 tablet:pt-22 md:pt-15 pt-12 sm:pb-15 pb-12  border-b border-light'>
                <div className='max-w-187.5 mx-auto w-full flex flex-col items-center sm:px-8 px-4'>
                    <ScrollAnimate animation="fade-up" duration={0.8} className="flex gap-5 flex-col items-center">
                        <div className="flex items-center gap-5">
                            <Image
                                src={star}
                                alt=""
                                aria-hidden="true"
                                className="rounded-[20px] w-7.5 h-7.5 object-cover"
                            />
                            <span className="text-[#2e2e2e] font-semibold sm:text-lg text-base">Worldwide Healing</span>
                        </div>
                        <div>
                            <h2 className='text-primary xl:text-[50px] md:text-[38px] sm:text-[26px] text-lg font-medium tan-pearl leading-normal mb-5  text-center     '>
                                Global Sound Healing Sessions
                            </h2>
                            <p className="dm-sans sm:text-lg text-sm text-text leading-[1.6] text-center mb-6">
                                Join our online sound healing experiences from anywhere in the world.
                                Connect, relax, and restore your inner balance through guided healing frequencies.
                            </p>
                        </div>
                    </ScrollAnimate>
                    <div className="w-full">
                        <div className="rounded-3xl p-6 transition duration-300">

                            <div className="flex flex-wrap gap-2 mb-5">
                                {countries.map((country) => (
                                    <span
                                        key={country}
                                        className="px-3 py-1 bg-[#053d351c] text-dark-green rounded-full text-sm font-semibold"
                                    >
                                        {country}
                                    </span>
                                ))}
                            </div>

                            <div className="space-y-3">
                                {sessions.map((session, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-3 p-3 rounded-xl bg-white transition border border-[#053d351c]"
                                    >
                                        <span className="text-dark-green w-2.5 h-2.5 bg-dark-green rounded-full"></span>
                                        <span className="text-text text-base font-semibold">{session}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center md:gap-8 sm:gap-6 gap-3 xs:flex-nowrap flex-wrap">
                        <a href="#0" className="inline-flex items-center gap-2 xl:px-8 px-4 xl:py-3.5 py-2 bg-orange text-white rounded-full font-bold hover:bg-green transition-all duration-300 tablet:text-lg md:text-base text-sm">Join Next Session</a>
                    </div>
                    {/* <div className="py-2 px-5 bg-[#fff] border border-light rounded-[10px] flex flex-col justify-between mt-5 w-fit">
                        <p className="text-center text-primary font-semibold tablet:text-base text-sm">"Take your time. When you're ready, we'll be here."</p>
                    </div> */}
                </div>
            </div>
            {/* <div className="py-5">
                <p className="text-center tablet:text-lg md:text-base text-sm sm:px-8 px-4">© 2024 Sound Healing Space. All rights reserved.</p>
            </div> */}
        </div>
    )
}