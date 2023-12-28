import { useEffect } from "react";
import ControlledAccordions from "../components/FaqQue";

export default function Faq() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="px-20 bg-mainLight my-12 md:px-10 sm:px-6">
      <ControlledAccordions />
    </section>
  );
}
