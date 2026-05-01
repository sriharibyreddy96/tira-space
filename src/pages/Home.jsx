import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Services from '../components/home/Services';
import Products from '../components/home/Products';
import WhyChooseUs from '../components/home/WhyChooseUs';
import CTA from '../components/home/CTA';
import CountUpSection from '../components/home/CountUpSection';

const Home = () => {
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