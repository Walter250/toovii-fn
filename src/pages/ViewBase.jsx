import { Link } from "react-router-dom";
import ChannelSection from "../components/ChannelsSection";
import StreamingSection from "../components/StreamingSection";
import { useEffect } from "react";
import { channelTypes } from "../assets/channels";
import { useSelector } from "react-redux";

export default function ViewBase() {
  const theme = useSelector((state) => state.theme.value);
  const themeStyles = theme.isDarkMode
    ? "text-mainLight bg-mainDark"
    : "text-mainDark bg-mainLight";

  const channels = channelTypes.map((channel) => (
    <ChannelSection key={channel} category="base" name={channel} />
  ));
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <article className={`${themeStyles} pt-12`}>
      <section className="px-20 md:px-10 sm:px-6">
        <h1 className="font-bold text-4xl mb-4 text-center">Base</h1>
        <p className="text-center w-5/6 mx-auto">
          Dive into a world of entertainment with our Base Subscription! Enjoy a
          curated selection of must-watch shows, movies, and exclusive content.
          Elevate your streaming experience without the fuss. Your gateway to
          entertainment awaits!
        </p>
        <section className="w-full h-72 mt-20 flex md:h-[32rem] md:flex-col">
          <img
            className="h-full w-3/5 object-cover md:h-1/2 md:w-full"
            src="/base.jpg"
            alt="base image"
          />
          <div className="h-full w-2/5 md:h-1/2 md:w-full flex flex-col justify-center items-center gap-6 border border-mainYellow/40">
            <p className="text-2xl font-bold text-center">
              A FORMULA ACCESSIBLE TO ALL!
            </p>
            <p className="font-bold">
              <span className="font-bold text-3xl">3000</span> RWF/MONTH
            </p>
            <Link
              to="/cart"
              className="bg-mainYellow px-10 py-2 rounded-xl font-bold text-xl"
            >
              SUBSCRIBE
            </Link>
          </div>
        </section>
        <section className="py-12">
          <p className="font-bold text-4xl text-center">All Channels in Base</p>
          <section className="flex flex-col gap-8 mt-8">{channels}</section>
        </section>
      </section>
      <StreamingSection />
    </article>
  );
}
