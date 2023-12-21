import { useSelector } from "react-redux";

export default function StreamingSection() {
  const theme = useSelector((state) => state.theme.value);
  const themeStyles = theme.isDarkMode
    ? "text-white bg-black"
    : "text-black bg-white";

  return (
    <article className={`${themeStyles} py-16`}>
      <h1 className="font-bold text-5xl text-center mb-16">Now Streaming</h1>
      <article className="grid grid-cols-4 grid-rows-2 px-20 gap-6">
        <section className="col-span-2 h-80 rounded-xl overflow-hidden">
          <img className="w-full h-full object-cover" src="/3.jpg" alt="" />
        </section>
        <section className="col-span-1 row-span-1 h-80 rounded-xl overflow-hidden">
          <img className="w-full h-full object-cover" src="/2.jpg" alt="" />
        </section>
        <section className="col-span-1 row-span-2 rounded-xl overflow-hidden">
          <img className="w-full h-full object-cover" src="/6.jpg" alt="" />
        </section>
        <section className="col-span-1 row-span-1 h-80 rounded-xl overflow-hidden">
          <img className="w-full h-full object-cover" src="/1.jpg" alt="" />
        </section>
        <section className="col-span-2 row-span-1 h-80 rounded-xl overflow-hidden">
          <img className="w-full h-full object-cover" src="/5.jpg" alt="" />
        </section>
      </article>
    </article>
  );
}
