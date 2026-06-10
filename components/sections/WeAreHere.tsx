import React from "react";
import { ScrollAnimate } from '../ScrollAnimate';
import Image from 'next/image';
import star from '../../public/images/star.png';
import GlobalSessionImg from "../../public/images/globle.svg";

export const WeAreHere = () => {
    const locations = [
        { id: 1, top: "36%", left: "27%", country: "India" },
        { id: 2, top: "71%", left: "61%", country: "USA" },
        { id: 3, top: "42%", left: "53%", country: "Canada" },
        { id: 4, top: "18%", left: "82%", country: "Australia" },
        { id: 5, top: "55%", left: "78%", country: "UK" },
        { id: 6, top: "70%", left: "30%", country: "Germany" },
    ];
    return (
        <div>
            <div className='max-w-335 w-full mx-auto flex flex-col lg:flex-row gap-20 2xl:py-30 tablet:py-20 md:py-15 py-12 border-b border-light'>
                <div className='w-full flex flex-col items-center sm:px-8 px-4'>
                    <ScrollAnimate animation="fade-up" duration={0.8} className="flex gap-5 flex-col items-center max-w-187.5 mx-auto">
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
                            <h2 className='text-primary 2xl:text-[50px] xl:text-[40px] md:text-[38px] sm:text-[26px] text-xl font-bold tan-pearl leading-[1.8] mb-5 text-center'>
                                Global Sound Healing Sessions
                            </h2>
                            <p className="dm-sans sm:text-lg text-sm text-text leading-[1.6] text-center mb-6">
                                Join our online sound healing experiences from anywhere in the world.
                                Connect, relax, and restore your inner balance through guided healing frequencies.
                            </p>
                        </div>
                    </ScrollAnimate>
                    <div className="flex gap-10 items-center tablet:flex-nowrap flex-wrap-reverse ">
                        <div className="grid tablet:grid-cols-2 xs:grid-cols-2 grid-cols-1 gap-5  tablet:gap-y-10 tablet:max-w-[40%] w-full">
                            <div className="tablet:my-0 sm:my-5 xs:my-4 my-3">
                                <h6 className="text-black mb-1 sm:text-2xl text-xl leading-none font-semibold">+10</h6>
                                <p className="sm:text-lg text-base text-primary font-bold xs:mb-2.5 mb-1">Years of Practice</p>
                                <span className="text-sm">Protecting businesses and Individuals with precision and integrity.</span>
                            </div>
                            <div className="tablet:my-0 sm:my-5 xs:my-4 my-3">
                                <h6 className="text-black mb-1 sm:text-2xl text-xl leading-none font-semibold">+190</h6>
                                <p className="sm:text-lg text-base text-primary font-bold xs:mb-2.5 mb-1">Lives Impacted</p>
                                <span className="text-sm">Supporting personal well-being through the transformative power of sound.</span>
                            </div>
                            <div className="tablet:my-0 sm:my-5 xs:my-4 my-3">
                                <h6 className="text-black mb-1 sm:text-2xl text-xl leading-none font-semibold">+2,781</h6>
                                <p className="sm:text-lg text-base text-primary font-bold xs:mb-2.5 mb-1">Trusted Clients</p>
                                <span className="text-sm">Startups, enterprises, and individuals worldwide.</span>
                            </div>
                            <div className="tablet:my-0 sm:my-5 xs:my-4 my-3">
                                <h6 className="text-black mb-1 sm:text-2xl text-xl leading-none font-semibold">+300</h6>
                                <p className="sm:text-lg text-base text-primary font-bold xs:mb-2.5 mb-1">Healing Sessions</p>
                                <span className="text-sm">Guided sound healing experiences for balance, relaxation, and inner well-being.</span>
                            </div>
                        </div>
                        <div className="relative map-container tablet:max-w-[60%] w-full">
                            <Image src={GlobalSessionImg} alt="Global Session" className="w-full" loading="lazy" />
                            {locations.map((item) => (
                                <div
                                    key={item.id}
                                    className="absolute -translate-x-1/2 -translate-y-1/2"
                                    style={{
                                        top: item.top,
                                        left: item.left,
                                    }}
                                >
                                    <div className="relative flex items-center justify-center w-4 h-4">
                                        <span
                                            className="absolute w-4 h-4 rounded-full border border-[#053d35]"
                                            style={{
                                                animation: "markerPulse 4s ease-out infinite",
                                            }}
                                        />
                                        <span
                                            className="absolute w-4 h-4 rounded-full border border-[#053d35]"
                                            style={{
                                                animation: "markerPulse 4s ease-out infinite",
                                                animationDelay: "2s",
                                            }}
                                        />
                                        <span className="absolute w-6 h-6 rounded-full bg-[#053d35]/20 blur-md" />
                                        <span className="relative z-10 w-2.5 h-2.5 rounded-full bg-[#053d35] shadow-[0_0_15px_rgba(5,61,53,0.9)]" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center justify-center md:gap-8 sm:gap-6 gap-3 xs:flex-nowrap flex-wrap mt-6">
                        <a href="#0" className="inline-flex items-center gap-2 xl:px-8 px-4 xl:py-3.5 py-2 bg-orange text-white rounded-full font-bold hover:bg-green transition-all duration-300 tablet:text-lg md:text-base text-sm">Join Next Session</a>
                    </div>
                </div>
            </div>
        </div>
    )
}