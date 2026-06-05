import React from 'react';
import Image from 'next/image';
import img1 from '../../public/images/about1.jpg';
import star from '../../public/images/star.png';
// import sign from '../../public/images/sign.png';
import { ScrollAnimate } from '../ScrollAnimate';

export const About = () => {
  return (
    <section id="about" className="py-30 px-8 flex justify-center">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-20">
        {/* Left Content - Image block */}
        <ScrollAnimate animation="scale-in" duration={1.0} className="relative max-w-134 w-full">
          <div className="relative max-w-134 w-full">
            <Image
              src={img1}
              alt="Sound healing session with Tibetan singing bowls at Aeny Wellness studio"
              className="rounded-[20px] w-134 h-125 object-cover"
            />
          </div>
          {/* Badge list remains as defined in layout */}
          <div className="absolute bottom-7 left-3 flex flex-wrap gap-1 w-110">
            <div className="border border-white bg-white py-1.5 px-3 rounded-full cursor-pointer flex items-center gap-3">
              <span className="text-sm font-medium text-green">Certified Therapists</span>
            </div>
            <div className="border border-white bg-transparent hover:bg-white py-1.5 px-3 rounded-full cursor-pointer flex items-center gap-3">
              <span className="text-sm font-medium text-white hover:text-green">Guided Healing</span>
            </div>
            <div className="border border-white bg-transparent hover:bg-white py-1.5 px-3 rounded-full cursor-pointer flex items-center gap-3">
              <span className="text-sm font-medium text-white hover:text-green">Peaceful Studio</span>
            </div>
            <div className="border border-white bg-transparent hover:bg-white py-1.5 px-3 rounded-full cursor-pointer flex items-center gap-3">
              <span className="text-sm font-normal text-white hover:text-green">Holistic Approach</span>
            </div>
            <div className="border border-white bg-transparent hover:bg-white py-1.5 px-3 rounded-full cursor-pointer flex items-center gap-3">
              <span className="text-sm font-medium text-white hover:text-green">Natural Sleep Support</span>
            </div>
            <div className="border border-white bg-transparent hover:bg-white py-1.5 px-3 rounded-full cursor-pointer flex items-center gap-3">
              <span className="text-sm font-medium text-white hover:text-green">Personalized Programs</span>
            </div>
            <div className="border border-white bg-transparent hover:bg-white py-1.5 px-3 rounded-full cursor-pointer flex items-center gap-3">
              <span className="text-sm font-medium text-white hover:text-green">Natural Sleep Support</span>
            </div>
          </div>
        </ScrollAnimate>

        {/* Right Content */}
        <div className="flex flex-col gap-6 max-w-180.75 w-full">
          <ScrollAnimate animation="fade-up" duration={0.8}>
            <div className="flex items-center gap-3">
              <Image
                src={star}
                alt=""
                aria-hidden="true"
                className="rounded-[20px] w-7.5 h-7.5 object-cover"
              />
              <span className="text-[#2e2e2e] font-semibold text-lg">The Heart of Aeny</span>
            </div>
            <h2 className="text-[#2e2e2e] text-[60px] font-semibold leading-[1.2] mt-4">
              Restoring Calm to Your Busy Mind
            </h2>
          </ScrollAnimate>
          
          <ScrollAnimate animation="fade-up" duration={0.8} delay={0.15}>
            <p className="text-text text-lg dm-sans leading-[1.6]">
              Aeny was born out of a desire to create a sanctuary from the noise of modern life. We specialize in integrative practices that help you slow down, recover deep rest, and restore your body’s natural rhythm.
            </p>
            <p className="text-text text-lg dm-sans leading-[1.6] mt-4">
              Whether you are struggling with chronic stress, sleep disruption, or simply seeking a space to breathe, our certified therapists design customized sessions to support your healing.
            </p>
          </ScrollAnimate>

          <ScrollAnimate animation="fade-up" duration={0.8} delay={0.3} className="border-t border-[#f0f0f0] pt-6 flex flex-col sm:flex-row gap-8 sm:items-center justify-between">
            <div className="flex gap-4 items-center">
              <div>
                <p className="text-primary font-bold text-xl leading-[1.4]">Anjali Mehta</p>
                <p className="text-text font-medium text-sm leading-normal">Founder & Sound Therapist</p>
              </div>
            </div>
            {/* <div>
              <Image src={sign} alt="Anjali Mehta Signature representation" className="w-[120px] opacity-80" />
            </div> */}
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
};