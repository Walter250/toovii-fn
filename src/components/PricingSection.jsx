import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function PricingSection() {
  const navigate = useNavigate();
  const theme = useSelector((state) => state.theme.value);
  const themeStyles = theme.isDarkMode
    ? "text-mainLight bg-mainDark"
    : "text-mainDark bg-mainLight";
  return (
    <article className={`${themeStyles} py-12`}>
      <p className="text-center text-5xl font-bold md:text-3xl sm:text-2xl">
        Subscribe to our packages
      </p>
      <section className="flex justify-center gap-12  mt-28 md:flex-col md:items-center">
        <div className="w-1/3 md:w-4/5 pt-12 border border-mainYellow rounded-2xl relative h-fit">
          <div className="py-10 px-5 flex flex-col items-center border-b border-b-mainYellow gap-6">
            <p className="border border-mainYellow text-mainYellow px-8 py-1 w-fit rounded-full">
              Base
            </p>
            <p>
              <span className="text-4xl font-bold text-mainYellow">3 USD</span>
              /mo
            </p>
          </div>
          <section className="flex flex-col px-5 py-10 gap-7">
            <div className="flex items-center gap-4">
              <img className="w-7 object-contain" src="/dot.png" alt="tick" />
              <p className="text-xl">1 dubbed movie/week</p>
            </div>
            <div className="flex items-center gap-4">
              <img className="w-7 object-contain" src="/dot.png" alt="tick" />
              <p className="text-xl">2 dubbed episodes/week</p>
            </div>
            <div className="flex items-center gap-4">
              <img className="w-7 object-contain" src="/dot.png" alt="tick" />
              <p className="text-xl">Football news</p>
            </div>
            <div className="flex items-center gap-4">
              <img className="w-7 object-contain" src="/dot.png" alt="tick" />
              <p className="text-xl">190+ Channels</p>
            </div>
            <button
              className="flex items-center justify-center border border-mainYellow py-2 rounded-xl mt-3 gap-4"
              onClick={() => navigate("/packages/base")}
            >
              <img src="/3d.png" alt="start" />
              <p className="font-semibold text-xl">Get Started</p>
            </button>
          </section>
          <div
            className={`${
              theme.isDarkMode ? "bg-mainDark" : "bg-mainLight"
            } border border-mainYellow w-16 h-16 grid place-content-center rounded-full absolute -top-8 left-[44%]`}
          >
            <img className="" src="/3d.png" alt="" />
          </div>
        </div>
        <div className="w-1/3 md:w-4/5 pt-12 border border-mainYellow rounded-2xl relative">
          <div className="py-10 px-5 flex flex-col items-center border-b border-b-mainYellow gap-6">
            <p className="border border-mainYellow text-mainYellow px-8 py-1 w-fit rounded-full">
              Premium
            </p>
            <p>
              <span className="text-4xl font-bold text-mainYellow">7 USD</span>
              /mo
            </p>
          </div>
          <section className="flex flex-col px-5 py-10 gap-7">
            <div className="flex items-center gap-4">
              <img className="w-7 object-contain" src="/dot.png" alt="tick" />
              <p className="text-xl">3 dubbed movie/week</p>
            </div>
            <div className="flex items-center gap-4">
              <img className="w-7 object-contain" src="/dot.png" alt="tick" />
              <p className="text-xl">5 dubbed episodes/week</p>
            </div>
            <div className="flex items-center gap-4">
              <img className="w-7 object-contain" src="/dot.png" alt="tick" />
              <p className="text-xl">Football news</p>
            </div>
            <div className="flex items-center gap-4">
              <img className="w-7 object-contain" src="/dot.png" alt="tick" />
              <p className="text-xl">300+ Channels</p>
            </div>
            <button
              className="flex items-center justify-center border border-mainYellow py-2 rounded-xl mt-3 gap-4"
              onClick={() => navigate("/packages/prem")}
            >
              <img src="/cells.png" alt="start" />
              <p className="font-semibold text-xl">Get Started</p>
            </button>
          </section>
          <div
            className={`${
              theme.isDarkMode ? "bg-mainDark" : "bg-mainLight"
            } border border-mainYellow w-16 h-16 grid place-content-center rounded-full absolute -top-8 left-[44%]`}
          >
            <img className="" src="/cells.png" alt="" />
          </div>
        </div>
      </section>
    </article>
  );
}
