"use client"
import React from 'react';
import { useState } from "react";
import Image from 'next/image';
import star from '../../public/images/star.png';
import Icon01 from '../../public/images/Icon-1.png';
import Icon02 from '../../public/images/Icon-2.png';
import Icon03 from '../../public/images/Icon-3.png';
import Icon04 from '../../public/images/Icon-4.png';
import { supabase } from "@/lib/supabase";
import { ScrollAnimate } from '../ScrollAnimate';
import Flatpickr from "react-flatpickr";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from "react";
import CustomDropdown from './CustomDropdown';
const timeOptions = [
  { label: "Morning", value: "Morning" },
  { label: "Afternoon", value: "Afternoon" },
  { label: "Evening", value: "Evening" },
  { label: "Night", value: "Night" },
];

const sessionOptions = [
  { label: "Chakra Healing", value: "Chakra Healing" },
  { label: "Energy Healing", value: "Energy Healing" },
  { label: "Reiki Healing", value: "Reiki Healing" },
  { label: "Meditation", value: "Meditation" },
];
export const HealingJourney = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    session: "",
    notes: "",
  });
  const [loading, setLoading] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);
  const [captchaToken, setCaptchaToken] = useState("");
  const handleChange = (e:any) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    if (!captchaToken) {
      alert("Please verify captcha");
      return;
    }
    setLoading(true);
    const [day, month, year] = formData.date.split("-");
    const payload = {
      ...formData,
      date: `${year}-${month}-${day}`,
    };
    const { data, error } = await supabase
      .from("bookings")
      .insert([payload])
      .select();
    setLoading(false);
    console.log("DATA:", data);
    console.log("ERROR:", error);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Booking submitted!");
setCaptchaToken("");
recaptchaRef.current?.reset();
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      session: "",
      notes: "",
    });
  };
  return (
    <section id="booking" className="px-5">
      <div className='max-w-335 w-full mx-auto lg:pt-30 tablet:pt-22 md:pt-15 pt-10 flex flex-col lg:flex-row xl:gap-16 sm:gap-10 gap-5'>

        {/* Left Side Column */}
        <div className='w-full lg:max-w-[54%] flex gap-5 flex-col'>
          <ScrollAnimate animation="fade-up" duration={0.8}>
            <div className="flex items-center gap-5 mb-5">
              <Image
                src={star}
                alt=""
                aria-hidden="true"
                className="rounded-[20px] w-7.5 h-7.5 object-cover"
              />
              <span className="text-[#2e2e2e] font-semibold text-lg">Plan Your Healing Journey</span>
            </div>
            <h2 className='text-primary xl:text-[50px] md:text-[38px] sm:text-[26px] text-lg font-medium tan-pearl leading-normal tablet:mb-5'>
              Book a Personalized Sleep & Sound Session
            </h2>
          </ScrollAnimate>

          <ScrollAnimate animation="fade-up" duration={0.8} delay={0.15}>
            <p className='dm-sans sm:text-lg text-sm text-text leading-[1.6] tablet:mb-8'>
              Ready to begin your path toward deep rest and emotional clarity? Booking a session with Aeny is simple and intentional. Whether you’re new to healing or returning for continued support, we’re here to hold space for you with care and presence.
            </p>
          </ScrollAnimate>

          {/* Staggered Step Cards Grid */}
          <ScrollAnimate animation="stagger-fade" duration={0.8} stagger={0.15} className='flex gap-5 flex-wrap justify-between'>

            {/* Step 1 */}
            <div className='p-7.5 bg-[radial-gradient(at_0%_0%,rgb(26,117,103)_0%,rgb(5,61,53)_100%)] rounded-[20px] max-w-full sm:max-w-[calc(50%-10px)] w-full min-h-55 flex flex-col justify-between'>
              <div className='flex items-start justify-between mb-5 '>
                <Image src={Icon01} alt='Choose Your Therapy step icon' className='max-w-15 w-full ' />
                <h6 className='text-orange text-base font-semibold leading-normal'>01</h6>
              </div>
              <div>
                <h5 className='text-white md:text-2xl text-lg font-semibold leading-normal mb-2'>Choose Your Therapy</h5>
                <p className='text-base text-border dm-sans leading-normal'>
                  Select from our sound healing, sleep rituals, or custom sessions.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className='p-7.5 bg-[#fcfcfa] border border-light rounded-[20px] max-w-full sm:max-w-[calc(50%-10px)] w-full min-h-55 flex flex-col justify-between'>
              <div className='flex items-start justify-between mb-5 '>
                <Image src={Icon02} alt='Pick a Date & Time step icon' className='max-w-15 w-full ' />
                <h6 className='text-green text-base font-semibold leading-normal'>02</h6>
              </div>
              <div>
                <h5 className='text-primary md:text-2xl text-lg font-semibold leading-normal mb-2'>Pick a Date & Time</h5>
                <p className='text-base text-text dm-sans leading-normal'>
                  Our calendar offers flexible slots to match your rhythm.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className='p-7.5 bg-[#fcfcfa] border border-light rounded-[20px] max-w-full sm:max-w-[calc(50%-10px)] w-full min-h-55 flex flex-col justify-between'>
              <div className='flex items-start justify-between mb-5 '>
                <Image src={Icon03} alt='Share a Few Details step icon' className='max-w-15 w-full ' />
                <h6 className='text-green text-base font-semibold leading-normal'>03</h6>
              </div>
              <div>
                <h5 className='text-primary md:text-2xl text-lg font-semibold leading-normal mb-2'>Share a Few Details</h5>
                <p className='text-base text-text dm-sans leading-normal'>
                  Tell us what you’re looking for so we can guide you better.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className='p-7.5 bg-[#fcfcfa] border border-light rounded-[20px] max-w-full sm:max-w-[calc(50%-10px)] w-full min-h-55 flex flex-col justify-between'>
              <div className='flex items-start justify-between mb-5 '>
                <Image src={Icon04} alt='Receive Confirmation step icon' className='max-w-15 w-full ' />
                <h6 className='text-green text-base font-semibold leading-normal'>04</h6>
              </div>
              <div>
                <h5 className='text-primary md:text-2xl text-lg  font-semibold leading-normal mb-2'>Receive Confirmation</h5>
                <p className='text-base text-text dm-sans leading-normal'>
                  We’ll send a gentle reminder and welcome you in a calm setting.
                </p>
              </div>
            </div>

          </ScrollAnimate>
        </div>

        {/* Right Side Schedule Form Column */}
        <ScrollAnimate animation="fade-up" duration={0.8} delay={0.2} className='bg-[radial-gradient(at_100%_100%,rgb(26,117,103)_0%,rgb(5,61,53)_100%)] xl:p-10 p-6 rounded-[20px] flex flex-col gap-10 max-w-full lg:max-w-[42%] w-full self-stretch'>
          <h3 className='md:text-[32px] text-2xl text-white font-semibold text-center'>Schedule Your Session</h3>
          <form onSubmit={handleSubmit} className="flex flex-wrap gap-5">
            <div className='w-full sm:max-w-[calc(50%-10px)]'>
              <label htmlFor="booking-name" className='text-white text-sm font-semibold mb-2 block'>Full Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder='Your Name' id="booking-name" className='border border-white  px-4 py-3 rounded-[15px] bg-white outline-none focus:border-orange w-full text-sm' />
            </div>
            <div className='w-full sm:max-w-[calc(50%-10px)]'>
              <label htmlFor="booking-email" className='text-white text-sm font-semibold mb-2 block'>Email Address</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Your Email' id="booking-email" className='border border-white px-4 py-3 rounded-[15px] bg-white outline-none focus:border-orange w-full text-sm' />
            </div>
            <div className='w-full sm:max-w-[calc(50%-10px)]'>
              <label htmlFor="booking-phone" className='text-white text-sm font-semibold mb-2 block'>Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Number"
                id="booking-phone"
                className='border border-white px-4 py-3 rounded-[15px] bg-white outline-none focus:border-orange w-full text-sm'
              />
            </div>
            <div className='w-full sm:max-w-[calc(50%-10px)]'>
              <label htmlFor="booking-date" className='text-white text-sm font-semibold mb-2 block'>Preferred Date</label>
              <div className='px-4 py-2.5 rounded-[15px] relative bg-white outline-none focus:border-orange w-full border border-white'>
                <Flatpickr
                  value={formData.date}
                  placeholder="Select Date"
                  options={{
                    dateFormat: "d-m-Y",
                    minDate: "today",
                  }}
                  className="outline-none text-sm w-full relative z-10"
                  onChange={(selectedDates, dateStr) =>
                    setFormData((prev) => ({
                      ...prev,
                      date: dateStr,
                    }))
                  }
                />
                <svg className="absolute top-1/2 w-4 fill-[rgb(83,83,83)] z-1 transform -translate-y-1/2 right-4.25" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19,4H17V3a1,1,0,0,0-2,0V4H9V3A1,1,0,0,0,7,3V4H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm1,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12H20Zm0-9H4V7A1,1,0,0,1,5,6H7V7A1,1,0,0,0,9,7V6h6V7a1,1,0,0,0,2,0V6h2a1,1,0,0,1,1,1Z" /></svg>
              </div>
            </div>
            <div className='w-full sm:max-w-[calc(50%-10px)]'>
              <label htmlFor="booking-time" className='text-white text-sm font-semibold mb-2 block'>Preferred Time</label>
              <div className="relative w-full">
                <CustomDropdown
                  name="time"
                  placeholder="Select Time"
                  value={formData.time}
                  onChange={handleChange}
                  options={timeOptions}
                />

              </div>
            </div>
            <div className='w-full sm:max-w-[calc(50%-10px)]'>
              <label htmlFor="booking-session" className='text-white text-sm font-semibold mb-2 block'>Select Session</label>
              <CustomDropdown
                name="session"
                placeholder="Select Session"
                value={formData.session}
                onChange={handleChange}
                options={sessionOptions}
              />
            </div>
            <div className='w-full'>
              <label htmlFor="booking-notes" className='text-white text-sm font-semibold mb-2 block'>Notes or Intentions</label>
              <textarea name="notes" cols={30} rows={10} value={formData.notes} onChange={handleChange} placeholder='Write your intentions.' id="booking-notes" className='resize-none border border-white w-full px-4 py-3 rounded-[15px] bg-white outline-none focus:border-orange text-sm' />
            </div>
            <div className="w-full overflow-auto">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                onChange={(token:any) => setCaptchaToken(token || "")}
              />
            </div>
            <div className="w-full mt-4">
              <button
                type="submit"
                className="group inline-flex cursor-pointer items-center justify-center gap-2 px-8 py-3.5 bg-orange text-white rounded-full font-bold transition-all duration-500 hover:bg-white hover:text-dark-green w-full"
                disabled={loading}
              >
                {loading ? (
                  <span>Submitting...</span>
                ) : (
                  <span>Book Session</span>
                )}
                <svg aria-hidden="true" className="w-4 fill-current transition-all duration-500" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z"></path></svg>
              </button>
            </div>
          </form>
        </ScrollAnimate>

      </div>
    </section>
  );
};
