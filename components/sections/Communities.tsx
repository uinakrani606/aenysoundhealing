import React from "react";
import { ScrollAnimate } from "../ScrollAnimate";

export const Communities = () => {
    return (
        <div className="px-5">
            <div className="max-w-335 w-full mx-auto lg:pt-30 tablet:pt-22 md:pt-15 pt-10">
                <div className="bg-[url(/images/communities.jpg)] rounded-[30px] bg-fixed lg:py-20 tablet:py-15 md:py-10 py-8 bg-center bg-no-repeat bg-cover relative before:content-[''] before:bg-[linear-gradient(270deg,rgba(252,252,250,0)_0%,rgb(243,140,99)_100%)] before:absolute before:w-full before:h-full before:inset-0 before:rounded-[20px] before:opacity-100">
                    <ScrollAnimate animation="fade-up" duration={0.8} className="relative z-99 flex flex-col items-center sm:px-0 px-4">
                        <h5 className="text-white xl:text-[60px] md:text-[42px] sm:text-[28px] text-xl font-semibold mb-6 text-center leading-[1.2] max-w-200">
                            Reconnect With Your Inner Calm Today
                        </h5>
                        <p className="text-white text-lg dm-sans text-center mb-7 max-w-150">
                            Your first session is just one message away. We'd love to welcome you to our space.
                        </p>
                        <div className="flex flex-wrap items-center gap-3 justify-center">
                            <a href="#booking" className="inline-flex text-nowrap items-center gap-2 px-8 py-3.5 bg-white text-orange rounded-full font-bold hover:bg-green transition-all duration-300 tablet:text-lg md:text-base text-sm">
                                Book a Session
                            </a>
                            <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer" className="inline-flex text-nowrap items-center gap-2 px-8 py-3.5 border-2 border-white text-white rounded-full font-bold hover:bg-green transition-all duration-300 tablet:text-lg md:text-base text-sm">
                                WhatsApp Us
                            </a>
                        </div>
                    </ScrollAnimate>
                </div>
            </div>
        </div>
    );
};