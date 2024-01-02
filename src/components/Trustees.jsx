import { useSelector } from "react-redux";

export default function Trustees() {
  const theme = useSelector((state) => state.theme.value);
  const themeStyles = theme.isDarkMode
    ? "text-mainLight bg-mainDark"
    : "text-mainDark bg-mainLight";

  return (
    <article className="w-full px-20 md:px-10 sm:px-6 flex flex-col gap-8 items-center">
      <section className="">
        <p
          className={`${
            theme.isDarkMode ? "shadow-secLight/20" : "shadow-secDark/30"
          } shadow-lg border border-gray-400 px-10 py-[6px] font-semibold text-center w-fit rounded-xl`}
        >
          Our Trustees
        </p>
      </section>
      <p className="text-center w-4/5">
        TooVii is proud to collaborate with a network of visionary sponsors who
        share our commitment to revolutionizing entertainment. Their support
        empowers us to bring you a premium streaming experience, making quality
        content accessible to audiences worldwide.
      </p>
      <section className="w-full flex flex-col gap-8">
        <div className="flex justify-between w-full flex-wrap gap-6 md:justify-center">
          <img
            className="w-28 object-contain"
            src="/part/aiter.png"
            alt="logo"
          />
          <img
            className="w-28 object-contain"
            src="/part/arsenal.png"
            alt="logo"
          />
          <img className="w-28 object-contain" src="/part/bbc.svg" alt="logo" />
          <img
            className="w-28 object-contain"
            src="/part/british.png"
            alt="logo"
          />
          <img
            className="w-28 object-contain"
            src="/part/disney.png"
            alt="logo"
          />
        </div>
        <div className="flex justify-between w-full flex-wrap gap-6 md:justify-center">
          <img className="w-28 object-contain" src="/part/nba.png" alt="logo" />
          <img className="w-28 object-contain" src="/part/pbs.png" alt="logo" />
          <img
            className="w-28 object-contain"
            src="/part/sabc.svg"
            alt="logo"
          />
          <img className="w-28 object-contain" src="/part/ted.png" alt="logo" />
          <img className="w-28 object-contain" src="/part/tv5.png" alt="logo" />
          <img
            className="w-28 object-contain"
            src="/part/hollywood.jpg"
            alt="logo"
          />
        </div>
        <div className="flex justify-between w-full flex-wrap gap-6 md:justify-center">
          <img
            className="w-28 object-contain"
            src="/part/khan.png"
            alt="logo"
          />
          <img
            className="w-28 object-contain"
            src="/part/camtel.jpg"
            alt="logo"
          />
          <img className="w-28 object-contain" src="/part/mtn.svg" alt="logo" />
          <img
            className="w-28 object-contain"
            src="/part/mwaretv.svg"
            alt="logo"
          />
          <img
            className="w-28 object-contain"
            src="/part/vodacom.png"
            alt="logo"
          />
          <img
            className="w-28 object-contain"
            src="/part/vroom.png"
            alt="logo"
          />
        </div>
      </section>
    </article>
  );
}
