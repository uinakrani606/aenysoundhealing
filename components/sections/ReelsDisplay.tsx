"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function ReelsDisplay() {
    return (
        <div className="flex flex-col items-center justify-center gap-4 lg:pt-30 tablet:pt-22 pd:pt-15 pt-10 slider-container">
            <Swiper
            className="reels-swiper p-5"
                slidesPerView={4.5}
                spaceBetween={20}
   coverflowEffect={{
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    scale: 0.9,
  }}
                grabCursor
                navigation
                breakpoints={{
                    320: { slidesPerView: 1.6 },
                    640: { slidesPerView: 3 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
                // loop
            >
                <SwiperSlide className="">
                    <div className="shadow-[0_0_6px_#0000004d] rounded-lg p-2">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover rounded-[22px]"
                        >
                            <source src="/images/video4.mp4" type="video/mp4" />
                        </video>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="shadow-[0_0_6px_#0000004d] rounded-lg p-2">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover rounded-[22px]"
                        >
                            <source src="/images/video5.mp4" type="video/mp4" />
                        </video>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="shadow-[0_0_6px_#0000004d] rounded-lg p-2">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover rounded-[22px]"
                        >
                            <source src="/images/video6.mp4" type="video/mp4" />
                        </video>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="shadow-[0_0_6px_#0000004d] rounded-lg p-2">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover rounded-[22px]"
                        >
                            <source src="/images/video7.mp4" type="video/mp4" />
                        </video>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="shadow-[0_0_6px_#0000004d] rounded-lg p-2">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover rounded-[22px]"
                        >
                            <source src="/images/video8.mp4" type="video/mp4" />
                        </video>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}   