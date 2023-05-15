import Hero from "@/components/homepage/hero/Hero";
import Partners from "@/components/homepage/partners/Partners";
import Section from "@/components/section/Section";
import About from "@/components/homepage/about/About";
import Testimonials from "@/components/testimonials/Testimonials";
import HowToHelp from "@/components/homepage/how-to-help/HowToHelp";

export default function Home() {
  return (
    <>
      <Hero />
      <Section />
      <About />
      {/* <HowToHelp /> */}
      <Testimonials />
      <Partners />
    </>
  );
}
