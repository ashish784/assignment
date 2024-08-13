import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Service from "./components/Service";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <div className="px-[20px] lg:container lg:px-20 mx-auto">   
        <HeroSection />
        <AboutMe />
        <Service />
        <Projects />
        <Testimonials />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
