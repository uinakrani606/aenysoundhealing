import React from 'react';
import Image from 'next/image';
import star from '../../public/images/star.png';
import StarYellow from '../../public/images/start.svg';
import Photographer from '../../public/images/photographer.jpg';
import Studio from '../../public/images/studio.jpg';
export const Testimonials = () => {
  return (
    <section id="testimonials" className="px-5 bg-secondary">
      <div className='lg:pt-30 tablet:pt-22 md:pt-15 pt-10 max-w-335 mx-auto'>
        <div className='flex tablet:gap-0 gap-5 flex-wrap '>
          <div className='tablet:max-w-[42%] w-full tablet:bg-green'>
            <div className='flex flex-col gap-5 justify-between bg-secondary rounded-br-[50px] pr-10 md:pb-10 pb-5 h-full'>
              <div className="flex items-center gap-5">
                <Image
                  src={star}
                  alt=""
                  aria-hidden="true"
                  className="rounded-[20px] w-7.5 h-7.5 object-cover"
                />
                <span className="text-[#2e2e2e] font-semibold sm:text-lg text-base">Testimonials</span>
              </div>
              <h2 className='text-primary xl:text-[50px] md:text-[38px] sm:text-[26px] text-lg font-medium tan-pearl leading-normal'>
                What Our Clients Are Saying
              </h2>
              <p className='dm-sans sm:text-lg text-sm text-text leading-normal'>
                At Aeny, we’ve guided hundreds of individuals through personal transformation—helping them release stress, sleep deeply, and reconnect with themselves. Here are some of their stories.
              </p>
            </div>
          </div>
          <div className='tablet:max-w-[58%] w-full bg-[radial-gradient(at_0%_100%,rgb(26,117,103)_28%,rgb(5,61,53)_100%)] md:p-10 p-6 rounded-[20px] tablet:rounded-bl-none'>
            <div className='flex  flex-col h-full  justify-between'>
              <p className=' md:text-[27px]  sm:text-2xl text-lg font-normal text-white mb-12.5'>“I walked in carrying the weight of the world. After one sound healing session, I felt completely weightless. Profoundly transformative.”</p>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-5'>
                  <div className='max-w-17.5 w-full h-17.5 rounded-full'>
                    <Image src={Photographer} alt='Priya S. - Corporate Professional client at Aeny Wellness' className='rounded-full' />
                  </div>
                  <div>
                    <h6 className='text-xl font-semibold  leading-[1.4] text-white'>Priya S.</h6>
                    <p className='text-sm  font-medium  leading-[1.6] text-orange'>Corporate Professional</p>
                  </div>

                </div>
                <div className='max-w-15 w-full h-17.5 flex items-center justify-center'>
                  <svg className='w-full fill-orange' xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="40" height="40" x="0" y="0" viewBox="0 0 32 32" xmlSpace="preserve"><g><path d="M27.791 6.459a1 1 0 0 0-.84-.459H20c-1.654 0-3 1.346-3 3v7c0 1.654 1.346 3 3 3h1.985c-.928 2.69-1.721 3.978-4.36 5.077A1 1 0 0 0 18.01 26h.002c5.505-.01 8.667-2.217 10.909-7.611A13.772 13.772 0 0 0 30 13c0-2.893-.875-4.468-2.209-6.541zm-.715 11.157c-1.287 3.097-2.808 4.899-5.067 5.758 1.047-1.306 1.626-2.94 2.312-5.066a1 1 0 0 0-.95-1.308H20a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h6.401C27.486 9.732 28 10.907 28 13c0 1.612-.31 3.163-.924 4.616zM11.95 6H5C3.346 6 2 7.346 2 9v7c0 1.654 1.346 3 3 3h1.985c-.928 2.69-1.721 3.978-4.36 5.077A1 1 0 0 0 3.01 26h.002c5.505-.01 8.667-2.217 10.909-7.611A13.772 13.772 0 0 0 15 13c0-2.893-.875-4.468-2.209-6.541a1 1 0 0 0-.84-.459zm.126 11.616c-1.287 3.097-2.808 4.899-5.067 5.758 1.047-1.306 1.626-2.94 2.312-5.066A1 1 0 0 0 8.371 17H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h6.401C12.486 9.732 13 10.907 13 13c0 1.612-.31 3.163-.924 4.616z" opacity="1"></path></g></svg>
                </div>
              </div>
            </div>
          </div>
          <div className='tablet:max-w-[42%] relative bg-[url(/images/journeys.jpg)] w-full bg-center bg-no-repeat bg-cover rounded-[20px] tablet:rounded-tr-none xl:p-10 p-6 before:content-[""] before:bg-[radial-gradient(at_100%_0%,rgb(26,117,103)_10%,rgba(252,252,250,0)_100%)] before:absolute before:w-full before:h-full before:inset-0 before:opacity-100 before:rounded-[20px] tablet:before:rounded-tr-none before:z-1'>
            <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover rounded-[20px]"
        >
          <source src="/images/video3.mp4" type="video/mp4" />
        </video>
            <div className='relative z-99 flex flex-col gap-25 h-full justify-between'>
              <div className='flex gap-7.5 lg:flex-nowrap flex-wrap'>
                <div className='bg-secondary rounded-[15px] p-5 shadow-[-10px_10px_0px_0px_rgba(250,250,250,0.27)]' >
                  <div>
                    <p className='text-[55px] font-semibold text-green leading-none mb-2.5'>4.9<span className='text-[32px]'>+</span></p>
                    <div className='flex items-center gap-1 mb-2.5 '>
                      <Image src={StarYellow} alt="" aria-hidden="true" className='max-w-5 w-full' />
                      <Image src={StarYellow} alt="" aria-hidden="true" className='max-w-5 w-full' />
                      <Image src={StarYellow} alt="" aria-hidden="true" className='max-w-5 w-full' />
                      <Image src={StarYellow} alt="" aria-hidden="true" className='max-w-5 w-full' />
                      <Image src={StarYellow} alt="" aria-hidden="true" className='max-w-5 w-full' />
                    </div>
                    <p className='font-semibold text-base leading-normal text-primary max-w-29.75'>Average Rank Confidence</p>
                  </div>
                </div>
                <div className='sm:max-w-68.25 w-full flex flex-col justify-between'>
                  <h5 className='text-white text-[24px] font-semibold leading-[1.3]'>We’re grateful for the kind words, love, and trust from our healing community</h5>
                  <a href="#0" className='flex items-center text-orange text-base font-medium gap-2.5'>
                    See all Reviews
                    <svg className='w-4 h-4 fill-orange' aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z"></path></svg>
                  </a>
                </div>
              </div>
              <div className='bg-glass w-fit flex xs:flex-nowrap flex-wrap  relative items-center gap-2.5  rounded-[15px] p-5 before:content-[""] before:absolute before:w-full before:h-full before:backdrop-blur-[6px] before:inset-0 z-99 before:z-[-1] before:rounded-[15px] '>
                 
                <div>
                  <h6 className='text-white xl:text-[55px] text-4xl font-semibold leading-none mb-2.5 text-center'>
                    1,200 <span className='text-[32px] text-orange'>+</span>
                  </h6>
                  <p className='text-base font-semibold text-center text-white'>Over 1,200 Healing Journeys Shared</p>
                </div>
                <div className='xs:border-l xs:border-t-0  border-t xs:w-auto w-full border-orange xs:h-[stretch] ' ></div>
                <div>
                  <h6 className='text-white xl:text-[55px] text-4xl font-semibold leading-none mb-2.5 text-center'>
                    10 <span className='text-[32px] text-orange'>+</span>
                  </h6>
                  <p className='text-base font-semibold text-center text-white'>Over 1,200 Healing Journeys Shared</p>
                </div>
              </div>
            </div>

          </div>
          <div className='tablet:max-w-[58%] w-full tablet:bg-green'>
            <div className='bg-secondary pt-10 tablet:pl-10 rounded-tl-[50px] h-full '>
              <div>
                <div className='flex items-center justify-between gap-5 border-b border-border pb-6.25 xs:flex-nowrap flex-wrap'>
                  <h5 className='md:text-[32px] sm:text-[26px] text-[24px] text-primary font-semibold leading-[1.3]'>Most Loved Therapy</h5>
                  <a className="inline-flex text-nowrap items-center gap-2 px-8 py-3.5 bg-orange text-white rounded-full font-bold hover:bg-green  transition-all duration-300" href="#booking">Reserve Your Spot</a>
                </div>
                <div className='flex overflow-auto items-center md:gap-11.25 gap-5 pt-6.25 mb-5'>
                  <a href='#0' className='text-primary  md:text-[20px] text-base font-semibold leading-[1.4] flex items-center gap-2.5'>
                    <svg className='w-5 h-5 fill-orange' aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z"></path></svg>
                    <p className='text-nowrap sm:text-wrap'>Sound Bath Meditation</p>
                  </a>
                  <a href='#0' className='text-primary  md:text-[20px] text-base font-semibold leading-[1.4] flex items-center gap-2.5'>
                    <svg className='w-5 h-5 fill-orange' aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z"></path></svg>
                    <p className='text-nowrap sm:text-wrap'>Deep Sleep Massage</p>
                  </a>
                  <a href='#0' className='text-primary  md:text-[20px] text-base font-semibold leading-[1.4] flex items-center gap-2.5'>
                    <svg className='w-5 h-5 fill-orange' aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z"></path></svg>
                    <p className='text-nowrap sm:text-wrap'>Chakra Balancing</p>
                  </a>
                </div>
                <p className='text-text dm-sans md:text-lg text-sm leading-normal mb-10'>
                  Our clients’ favorite session combining Tibetan bowls and gongs to create deep vibrational healing. Ideal for stress relief, insomnia, and energetic release.
                </p>
                <Image src={Studio} alt='Tranquil interior of Aeny sound bath studio with mats and healing bowls' className='h-75 object-cover rounded-[20px]' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
