import React from "react";
import { ScrollAnimate } from '../ScrollAnimate';
import Image from 'next/image';
import star from '../../public/images/star.png';
import Blog01 from '../../public/images/blog-01.jpg';
import Blog02 from '../../public/images/blog-02.jpg';
import Blog03 from '../../public/images/blog-03.jpg';
const inspirations = [
  {
    id: 1,
    image: Blog01,
    title: "Create Your Own Sleep Ritual at Home"
  },
  {
    id: 2,
    image: Blog02,
    title: "Understanding the Role of Vibration in Energy Healing"
  },
  {
    id: 1,
    image: Blog03,
    title: "How Sleep Affects Mental Clarity & Mood"
  },
];

export const Inspiration = () => {
    return (
        <div className="px-5">
            <div className="max-w-335 mx-auto py-30">
                <div className="flex items-center">
                    <ScrollAnimate animation="fade-up" duration={0.8} className='flex flex-col justify-center md:flex-row items-start md:items-end mb-20 gap-6 w-full'>
                        <div>
                            <div className="flex items-center gap-5 mb-5 justify-center">
                                <Image
                                    src={star}
                                    alt=""
                                    aria-hidden="true"
                                    className="rounded-[20px] w-7.5 h-7.5 object-cover"
                                />
                                <span className="text-[#2e2e2e] font-semibold text-lg">Inspiration for Mind, Body & Soul</span>
                            </div>
                            <h2 className='text-primary text-[60px] font-semibold leading-[1.2] max-w-225 text-center'>
                                Explore the Art of Healing Through Sound & Stillness
                            </h2>
                        </div>
                    </ScrollAnimate>
                </div>
                <div className="grid grid-cols-3 gap-5">
                    {inspirations.map((item, index) => {
                        return (
                            <div className="p-2.5 rounded-[20px] bg-light" key={index}>
                                <div>
                                    <Image alt="" src={item.image} className="rounded-[15px]"/>
                                </div>

                                <div className="p-5">
                                    <h5 className="text-[24px] text-primary font-semibold leading-[1.3] mb-2.5">{item.title}</h5>
                                <div className="flex items-center mb-2.5 gap-5">
                                    <div className="flex items-center gap-1">
                                        <svg aria-hidden="true" className="w-3 fill-green"     viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
                                        <p className="text-primary text-sm "><span className="text-green">by</span> pai</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                       <svg aria-hidden="true"  className="w-3 fill-green" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"></path></svg>
                                        <p className="text-green text-sm ">July 6, 2025</p>
                                    </div>
                                </div>
                                    <p className="dm-sans text-base text-text leading-[1.4]">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam commodo interdum leo sit amet semper
                                    </p>
                                </div>
                            </div>

                        )
                    })}
                </div>
            </div>
        </div>
    )
}