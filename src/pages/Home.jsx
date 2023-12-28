import { useEffect } from "react";
import AboutSection from "../components/AboutSection";
import Hero from "../components/Hero";
import PricingSection from "../components/PricingSection";
import StreamingSection from "../components/StreamingSection";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <article>
      <Hero />
      <AboutSection />
      <PricingSection />
      <StreamingSection />
    </article>
  );
}
