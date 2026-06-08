import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { HealingPrograms } from '@/components/sections/HealingPrograms';
import { Testimonials } from '@/components/sections/Testimonials';
import { Footer } from '@/components/sections/Footer';
import { Communities } from '@/components/sections/Communities';
import { Pricing } from '@/components/sections/Pricing';
import { HealingJourney } from '@/components/sections/HealingJourney';
import { BeginHealing } from '@/components/sections/BeginHealing';
import { SoundHealing } from '@/components/sections/SoundHealing';
import { HealingExperience } from '@/components/sections/HealingExperience';
import { WeAreHere } from '@/components/sections/WeAreHere';
import ReelsDisplay from '@/components/sections/ReelsDisplay';

export default function Home() {
  return (
    <div className="bg-secondary min-h-screen">
      <div className='sm:p-7.5 p-5 pb-0! relative '>
        <Navbar />
        <Hero />
      </div>
      <main>
        <About />
        <BeginHealing />
        <HealingPrograms />
        <SoundHealing />
        <Services />
        <HealingExperience />
        <Communities />
        <Testimonials />
        <HealingJourney />
        <ReelsDisplay/>
        <Pricing />
        <WeAreHere />
      </main>
      <Footer />
    </div>
  );
}
