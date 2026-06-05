import React from 'react';
import Image from 'next/image';
import img1 from '../../public/images/about1.jpg';
import Services from '../../public/images/store_images.jpg';
import star from '../../public/images/star.png';
import { ScrollAnimate } from '../ScrollAnimate';

export const About = () => {
  return (
    <section id="about" className="lg:py-30 tablet:py-22 md:py-15 py-10 sm:px-8 px-6 flex justify-center">
      <div className="max-w-7xl w-full flex tablet:flex-nowrap flex-wrap-reverse md:flex-row items-center tablet:gap-20 sm:gap-10 gap-5">
        {/* Left Content - Image block */}
        <ScrollAnimate animation="scale-in" duration={1.0} className="relative tablet:max-w-134 w-full">
          <div className="relative tablet:max-w-134  w-full before:rounded-[20px] before:content-[''] before:absolute before:inset-0 before:w-full before:h-full before:opacity-50  before:bg-[linear-gradient(rgba(252,252,250,0)_0%,rgb(5,61,53)_100%)] before:z-99">
            <Image
              src={Services}
              alt="Sound healing session with Tibetan singing bowls at Aeny Wellness studio"
              className="rounded-[20px] tablet:w-134 w-full sm:h-125 h-auto object-cover"
            />
          </div>
        </ScrollAnimate>

        {/* Right Content */}
        <div className="flex flex-col gap-6 tablet:max-w-180.75 w-full">
          <ScrollAnimate animation="fade-up" duration={0.8}>
            <div className="flex items-center gap-3">
              <Image
                src={star}
                alt=""
                aria-hidden="true"
                className="rounded-[20px] w-7.5 h-7.5 object-cover"
              />
              <span className="text-[#2e2e2e] font-semibold sm:text-lg text-base">The Heart of Aeny</span>
            </div>
            <h2 className="text-[#2e2e2e] xl:text-[50px] md:text-[38px] sm:text-[26px] text-lg font-medium tan-pearl leading-normal mt-4">
              A Space to Pause, Heal & Reconnect
            </h2>
          </ScrollAnimate>
          
          <ScrollAnimate animation="fade-up" duration={0.8} delay={0.15}>
            <p className="text-text sm:text-lg text-sm dm-sans leading-[1.6]">
              Nestled in the heart of Surat, Aeny offers a calming retreat from the demands of modern life. We believe that true wellness begins when the mind slows down and the body feels safe enough to rest.
            </p>
            <p className="text-text sm:text-lg text-sm dm-sans leading-[1.6] mt-4">
             Through personalized sound healing and holistic wellness experiences, we help individuals release stress, improve sleep, restore emotional balance, and reconnect with their natural rhythm. Every session is guided with care, intention, and a deep understanding of the body's need for rest and renewal.
            </p>
            <p className="text-text sm:text-lg text-sm dm-sans leading-[1.6] mt-4">
             Whether you seek relief from everyday stress or a deeper connection with yourself, Aeny provides a welcoming space where healing unfolds naturally.
            </p>
          </ScrollAnimate>

          <ScrollAnimate animation="fade-up" duration={0.8} delay={0.3} className="border-t border-[#f0f0f0] pt-6 flex flex-col sm:flex-row gap-8 sm:items-center justify-between">
            <div className="flex gap-4 items-center">
              <div>
                <p className="text-primary font-bold text-xl leading-[1.4]">Aeny Zadafiya</p>
                <p className="text-text font-medium text-sm leading-normal"> An International Sound Healer</p>
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
};