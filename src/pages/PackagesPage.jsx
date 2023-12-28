import { useEffect } from "react";
import PricingSection from "../components/PricingSection";
import StreamingSection from "../components/StreamingSection";

export default function PackagePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <article>
      <PricingSection />
      <StreamingSection />
    </article>
  );
}
