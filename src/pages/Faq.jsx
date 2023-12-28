import { useEffect } from "react";
import ControlledAccordions from "../components/FaqQue";
import { useSelector } from "react-redux";

export default function Faq() {
  const theme = useSelector((state) => state.theme.value);
  const themeStyles = theme.isDarkMode
    ? "text-mainLight bg-mainDark"
    : "text-mainDark bg-mainLight";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className={`${themeStyles} px-20 py-12 md:px-10 sm:px-6`}>
      <ControlledAccordions />
    </section>
  );
}
