import React, { useState } from 'react';
import { ScrollAnimate } from '../ScrollAnimate';

export const Booking = () => {
    const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    notes: "",
  });

  const handleChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Booking Submitted Successfully!");
  };

  return (
    <section id="booking" className="py-16 md:py-24 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left Features */}
          <div className="w-full">
            <ScrollAnimate animation="fade-up" duration={0.8}>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2 h-2 rounded-full bg-green"></span>
                <span className="text-[12px] font-bold text-text uppercase tracking-widest">Free Consultation Session</span>
              </div>
              
              <h2 className="text-[40px] md:text-[56px] font-bold text-primary leading-[1.1] tracking-tight mb-8">
                Book a Personalized<br/>Sleep & Sound Session
              </h2>
            </ScrollAnimate>
            
            <ScrollAnimate animation="fade-up" duration={0.8} delay={0.15}>
              <p className="text-[14px] text-text leading-relaxed mb-12 max-w-[500px]">
                Start your journey to better rest with a complimentary consultation. We'll listen to your needs and help you find the perfect therapeutic path.
              </p>
            </ScrollAnimate>

            <ScrollAnimate animation="stagger-fade" duration={0.8} stagger={0.12} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="bg-light rounded-[20px] p-6 border border-border/50">
                <div className="w-10 h-10 bg-green rounded-full flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                </div>
                <h3 className="text-[16px] font-bold text-primary mb-2">Choose Your Session</h3>
                <p className="text-[12px] text-text">Select between sound healing, sleep therapy, or a hybrid session.</p>
              </div>

              <div className="bg-white rounded-[20px] p-6 border border-border/50 shadow-soft">
                <div className="w-10 h-10 bg-[#E8D4C8] rounded-full flex items-center justify-center mb-4 text-orange font-bold text-xl">
                  ✓
                </div>
                <h3 className="text-[16px] font-bold text-primary mb-2">Pick a Date & Time</h3>
                <p className="text-[12px] text-text">Find a slot that fits seamlessly into your schedule.</p>
              </div>

              <div className="bg-white rounded-[20px] p-6 border border-border/50 shadow-soft">
                <div className="w-10 h-10 bg-[#C9D6CE] rounded-full flex items-center justify-center mb-4 text-green font-bold text-xl">
                  ♡
                </div>
                <h3 className="text-[16px] font-bold text-primary mb-2">Personalize Details</h3>
                <p className="text-[12px] text-text">Let us know your specific goals for the session.</p>
              </div>

              <div className="bg-white rounded-[20px] p-6 border border-border/50 shadow-soft">
                <div className="w-10 h-10 bg-[#E8E1D9] rounded-full flex items-center justify-center mb-4 text-primary font-bold text-xl">
                  ★
                </div>
                <h3 className="text-[16px] font-bold text-primary mb-2">Begin Your Journey</h3>
                <p className="text-[12px] text-text">Arrive and let our experts guide you to deep relaxation.</p>
              </div>

            </ScrollAnimate>
          </div>

          {/* Right Form Box */}
          <ScrollAnimate animation="fade-up" duration={0.8} delay={0.2} className="bg-dark-green rounded-[40px] p-8 md:p-12 shadow-card w-full lg:max-w-[480px] ml-auto">
             <div className="text-center mb-8">
               <h3 className="text-[24px] font-bold text-white mb-2">Schedule Your Session</h3>
             </div>
             
             <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/80 text-[12px] font-bold uppercase tracking-wider mb-2" name="firstName" value={formData.firstName} onChange={handleChange}>First Name</label>
                    <input type="text" className="w-full bg-white rounded-full px-4 py-3 text-[14px] text-primary focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-white/80 text-[12px] font-bold uppercase tracking-wider mb-2" name="lastName" value={formData.lastName} onChange={handleChange}>Last Name</label>
                    <input type="text" className="w-full bg-white rounded-full px-4 py-3 text-[14px] text-primary focus:outline-none" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/80 text-[12px] font-bold uppercase tracking-wider mb-2" name="email" value={formData.email} onChange={handleChange}>Email Address</label>
                    <input type="email" className="w-full bg-white rounded-full px-4 py-3 text-[14px] text-primary focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-white/80 text-[12px] font-bold uppercase tracking-wider mb-2" name="phone" value={formData.phone} onChange={handleChange}>Phone Number</label>
                    <input type="number" className="w-full bg-white rounded-full px-4 py-3 text-[14px] text-primary focus:outline-none" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/80 text-[12px] font-bold uppercase tracking-wider mb-2" name="service" value={formData.service} onChange={handleChange}>Select Service</label>
                    <input type="text" className="w-full bg-white rounded-full px-4 py-3 text-[14px] text-primary focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-white/80 text-[12px] font-bold uppercase tracking-wider mb-2" name="date" value={formData.date} onChange={handleChange}>Select Date</label>
                    <input type="date" className="w-full bg-white rounded-full px-4 py-3 text-[14px] text-primary focus:outline-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-white/80 text-[12px] font-bold uppercase tracking-wider mb-2">Notes or Questions</label>
                  <textarea rows={4} className="w-full bg-white rounded-[20px] px-4 py-3 text-[14px] text-primary focus:outline-none resize-none" name="notes" value={formData.notes} onChange={handleChange}></textarea>
                </div>
                
                <button type="button" className="bg-orange w-full text-white font-bold text-[16px] py-4 rounded-full hover:bg-orange/90 transition-all shadow-soft mt-4">
                  Confirm Booking
                </button>
             </form>
          </ScrollAnimate>

        </div>
      </div>
    </section>
  );
};
