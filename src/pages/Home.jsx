import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Services from '../components/home/Services';
import Products from '../components/home/Products';
import WhyChooseUs from '../components/home/WhyChooseUs';
import CTA from '../components/home/CTA';
import CountUpSection from '../components/home/CountUpSection';
import { useEffect } from 'react';

const Home = () => {
      // ✅ Runs when About page loads
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <>
      <Hero />
      <CountUpSection />
      <About />
      <Services />
      <Products />
      <WhyChooseUs />
      <CTA />
    </>
  );
};

export default Home;