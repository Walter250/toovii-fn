import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function StreamingSection() {
  const theme = useSelector((state) => state.theme.value);
  const themeStyles = theme.isDarkMode
    ? "text-mainLight bg-mainDark"
    : "text-mainDark bg-mainLight";

  return (
    <article className={`${themeStyles} py-16`}>
      <div className="flex items-center justify-between px-20 md:px-10 sm:px-6 sm:justify-center mb-16">
        <div className="w-40 md:hidden"></div>
        <h1 className="font-bold text-4xl sm:text-4xl">Now Streaming</h1>
        <Link
          to="/webtv"
          className="bg-mainYellow px-10 py-2 rounded-xl font-bold text-xl sm:hidden"
        >
          Start Watching
        </Link>
      </div>
      <article className="grid grid-cols-4 grid-rows-2 px-20 gap-6 md:grid-cols-1 md:grid-rows-5 md:px-8">
        <section className="col-span-2 h-80 rounded-xl overflow-hidden md:col-span-1 md:row-span-1 md:w-full md:h-96">
          <img className="w-full h-full object-cover" src="/3.jpg" alt="" />
        </section>
        <section className="col-span-1 row-span-1 h-80 rounded-xl overflow-hidden md:col-span-1 md:row-span-1  md:w-full md:h-96">
          <img className="w-full h-full object-cover" src="/2.jpg" alt="" />
        </section>
        <section className="col-span-1 row-span-2 rounded-xl overflow-hidden md:col-span-1 md:row-span-1 md:w-full md:h-96">
          <img className="w-full h-full object-cover" src="/6.jpg" alt="" />
        </section>
        <section className="col-span-1 row-span-1 h-80 rounded-xl overflow-hidden md:col-span-1 md:row-span-1  md:w-full md:h-96">
          <img className="w-full h-full object-cover" src="/1.jpg" alt="" />
        </section>
        <section className="col-span-2 row-span-1 h-80 rounded-xl overflow-hidden md:col-span-1 md:row-span-1  md:w-full md:h-96">
          <img className="w-full h-full object-cover" src="/5.jpg" alt="" />
        </section>
      </article>
    </article>
  );
}
