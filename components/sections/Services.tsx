"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import star from "../../public/images/star.png";
import Services01 from "../../public/images/service-01.png";
import Services02 from "../../public/images/service-02.png";
import Services03 from "../../public/images/service-03.png";
import Services04 from "../../public/images/service-04.png";
import { ScrollAnimate } from "../ScrollAnimate";

const services = [
  {
    id: 1,
    title: "A quieter mind",
    desc: "The mental chatter softens. Your thoughts feel less heavy and overwhelming.",
    image: Services01,
    categories: "Most Popular",
  },
  {
    id: 2,
    title: "Deeper inner rest",
    desc: "A sense of stillness deeper than just physical relaxation. ",
    image: Services02,
    categories: "Energy Work",
  },
  {
    id: 3,
    title: "Emotional lightness",
    desc: "The weight you carry feels lighter. Things don't feel as heavy.",
    image: Services03,
    categories: "Movement",
  },
  {
    id: 4,
    title: "Easier relaxation",
    desc: "Falling asleep feels natural. Rest becomes truly restful.",
    image: Services04,
    categories: "Inner Work",
  },
];

export const Services = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
const [isPlaying, setIsPlaying] = useState(true);

const playVideo = () => {
  if (!videoRef.current) return;

  if (videoRef.current.paused) {
    videoRef.current.play();
    setIsPlaying(true);
  } else {
    videoRef.current.pause();
    setIsPlaying(false);
  }
};

  return (
    <section id="therapies" className="relative overflow-hidden sm:px-7.5  px-4">
      <div className="lg:px-5 relative z-1">
        <div className="max-w-335 mx-auto w-full lg:py-30 tablet:py-22 md:py-15 py-10">
          {/* Header block with ScrollAnimate on Title */}
          <div className="flex flex-col tablet:flex-row justify-between w-full items-center xl:gap-20 lg:gap-12 md:gap-4 gap-2 xl:mb-20 lg:mb-12 md:mb-8 mb-4">
            <ScrollAnimate animation="fade-up" duration={0.8} className="text-left lg:max-w-150 w-full">
              <div className="inline-block lg:px-4 lg:py-2 bg-white/10 text-white rounded-full w-fit">
                <div className="flex items-center gap-5">
                  <Image
                    src={star}
                    alt=""
                    aria-hidden="true"
                    className="rounded-[20px] w-7.5 h-7.5 object-cover"
                  />
                  <span className="text-[#2e2e2e] font-semibold text-lg">our services</span>
                </div>
              </div>
              <h2 className="xl:text-[60px] md:text-[42px] sm:text-[28px] text-[24px] font-semibold text-primary leading-[1.2] mt-4">
                Healing Therapies for Mind, Body & Soul
              </h2>
            </ScrollAnimate>
            <ScrollAnimate animation="fade-up" duration={0.8} delay={0.15} className="lg:max-w-xl w-full">
              <p className="text-lg dm-sans leading-normal text-text mb-5">
               Explore a wide range of holistic healing services at Aeny Healing Studio designed to bring energy balance, emotional clarity, and deep inner peace. Whether you seek transformation, relaxation, or spiritual awakening, we have a therapy to support your journey.
              </p>
              <Link
                href="#booking"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-orange text-white rounded-full font-bold hover:bg-green transition-all duration-300"
              >
                Book Session
              </Link>
            </ScrollAnimate>
          </div>

          {/* Cards Grid with Stagger Animation */}
          <div className="flex flex-col tablet:gap-20 sm:gap-10 gap-5">
            <ScrollAnimate
              animation="fade-up"
              duration={0.8}
              delay={1}
              stagger={0.15}
              className="grid grid-cols-1 sm:grid-cols-2 tablet:grid-cols-4 gap-4"
            >
              {services.map((service) => (
                <div
                  key={service.id}
                  className="group relative service-items rounded-[15px] overflow-hidden aspect-3/4 shadow-soft transition-all duration-500 before:content-[''] before:absolute before:inset-0 before:w-full before:h-full before:opacity-50  before:bg-[linear-gradient(rgba(252,252,250,0)_0%,rgb(5,61,53)_100%)] before:z-99"
                >
                  <Image
                    src={service.image}
                    alt={`${service.title} - ${service.desc}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="p-[5px_10px] absolute bg-secondary rounded-[10px] left-2.5 top-2.5 text-green text-sm font-semibold leading-[1.6]">
                    {service.categories}
                  </span>
                  <div className="absolute inset-0 transition-all duration-300 shadow-card lg:p-8 lg:pb-6 p-4 flex items-end z-999">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h3 className="text-[24px] font-semibold text-white leading-[1.3] mb-3">
                          {service.title}
                        </h3>
                        <p className="text-lg text-border dm-sans leading-[1.4]">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </ScrollAnimate>

            {/* Video Banner with ScrollAnimate */}
            <ScrollAnimate animation="fade-up" duration={0.8} delay={0.2}>
              <div className="h-125 service-items gradient-bg relative rounded-[20px_20px_20px_65px] before:content-[''] before:absolute before:inset-0 before:w-full before:h-full before:opacity-70 before:rounded-[20px_20px_20px_65px] before:z-99">
                <div className="h-full gradient-bg relative rounded-[20px_20px_20px_65px] before:content-[''] before:absolute before:inset-0 before:w-full before:h-full before:opacity-70 before:rounded-[20px_20px_20px_65px] before:z-99">
                  <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover rounded-[20px_20px_20px_65px]"
                  >
                    <source src="/images/heroimage.mp4" type="video/mp4" />
                  </video>
                  <div className="xs:max-w-95 max-w-fit w-full bg-glass flex p-5 rounded-[100px] absolute left-2.5 bottom-2.5 z-999 before:content-[''] before:w-full before:h-full before:backdrop-blur-[6px] before:absolute before:inset-0 before:rounded-[100px] before:z-9">
                    <div className="relative z-999 flex gap-5 items-center">
                      <div onClick={playVideo}>
                        <div className='border border-orange  w-17.5 h-17.5 rounded-full flex items-center justify-center cursor-pointer'>
                            {isPlaying ? (
    // Pause Icon
    <svg className="w-4 fill-white" viewBox="0 0 320 512">
      <path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112C128 85.5 106.5 64 80 64H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/>
    </svg>
  ) : (
    // Play Icon
    <svg className="w-4 fill-white" viewBox="0 0 448 512">
      <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"/>
    </svg>
  )}
                          {/* <svg className='w-4 fill-white' aria-hidden="true" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg> */}
                        </div>
                      </div>

                      <p className="text-white text-xl font-semibold leading-[1.4] xs:block hidden">
                        Preview a Guided Sound Healing Session
                      </p>
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
