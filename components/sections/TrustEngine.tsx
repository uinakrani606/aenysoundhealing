import React from "react";
import Services01 from "../../public/images/service-01.png";
import Services02 from "../../public/images/service-02.png";
import Services03 from "../../public/images/service-03.png";
import { ScrollAnimate } from "../ScrollAnimate";

const services = [
    {
        id: 1,
        title: "Human Origin",
        desc: "This space was created because burnout, anxiety, and emotional overload are becoming normal — and they shouldn’t be.",
        image: Services01,
        categories: "“I built this after experiencing complete nervous system exhaustion myself.”",
    },
    {
        id: 2,
        title: "What Actually Happens",
        desc: "You lie down. Eyes closed. No pressure to perform or explain anything. You simply receive sound vibrations.",
        image: Services02,
        categories: "“I didn’t have to do anything — and my mind finally stopped fighting.”",
    },
    {
        id: 3,
        title: "Real Internal Shifts",
        desc: "Clients often report emotional quietness, reduced mental noise, and a feeling of internal reset.",
        image: Services03,
        categories: "“My mind finally became quiet for the first time in months.”",
    }
];

export const TrustEngine = () => {
    return (
        <section className="relative overflow-hidden sm:px-7.5  px-4">
            <div className="px-5 border border-light rounded-[30px] relative z-10 bg-white">
                <div className="max-w-335 mx-auto w-full py-30">
                    <div className="flex flex-col justify-between w-full items-center gap-16 mb-20">
                        <ScrollAnimate animation="fade-up" duration={0.8} className="text-left w-full">
                            <h2 className="text-[48px] lg:text-[60px] text mb-5  font-semibold text-primary text-center leading-[1.2] mt-4">
                                Why People Trust This Space
                            </h2>
                            <p className="text-lg dm-sans leading-normal text-center">Not marketing. Real human experience, structure, and emotional safety.</p>
                        </ScrollAnimate>
                        <div className="flex flex-col gap-20">
                            <ScrollAnimate
                                animation="stagger-fade"
                                duration={0.8}
                                stagger={0.15}
                                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
                            >
                                {services.map((service) => (
                                    <div
                                        key={service.id}
                                        className="group relative service-items rounded-[15px] overflow-hidden shadow-soft transition-all duration-500"
                                    >
                                        <div className="transition-all duration-300 shadow-card p-8 pb-6 flex items-end z-999">
                                            <div className="flex justify-between items-start gap-4">
                                                <div>
                                                    <h3 className="text-xl font-semibold text-green leading-[1.3] mb-3">
                                                        {service.title}
                                                    </h3>
                                                    <p className="text-lg text-text dm-sans leading-[1.4]">
                                                        {service.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </ScrollAnimate>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 