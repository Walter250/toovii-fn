import { Link } from "react-router-dom";
import ChannelSection from "../components/ChannelsSection";
import StreamingSection from "../components/StreamingSection";
import { useEffect } from "react";
import { channelTypes } from "../assets/channels";
import { useSelector } from "react-redux";

export default function ViewPrem() {
  const theme = useSelector((state) => state.theme.value);
  const themeStyles = theme.isDarkMode
    ? "text-mainLight bg-mainDark"
    : "text-mainDark bg-mainLight";

  const channels = channelTypes.map((channel) => (
    <ChannelSection key={channel} category="prem" name={channel} />
  ));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <article className={`${themeStyles} pt-12`}>
      <section className="px-20 md:px-10 sm:px-6">
        <h1 className="font-bold text-4xl mb-4 text-center">Premium</h1>
        <p className="text-center w-5/6 mx-auto">
          Experience streaming like never before with our Premium Subscription!
          Unlock a treasure trove of premium content, including blockbuster
          movies, exclusive series, and live events. Elevate your entertainment
          journey to the next level. Upgrade to premium, because exceptional
          content deserves an exceptional experience!
        </p>
        <section className="w-full h-72 mt-20 flex md:h-[32rem] md:flex-col">
          <img
            className="h-full w-3/5 object-cover md:h-1/2 md:w-full"
            src="/prem.jpg"
            alt="base image"
          />
          <div className="h-full w-2/5 flex flex-col  md:h-1/2 md:w-full justify-center items-center gap-6 border border-mainYellow/40">
            <p className="text-2xl font-bold text-center">
              THE MOST COMPLETE FORMULA FOR THE WHOLE FAMILY!
            </p>
            <p className="font-bold">
              <span className="font-bold text-3xl">7000</span> RWF/MONTH
            </p>
            <Link
              to="https://portal.tvms.io/?o=shop&h=eyJjbGllbnQiOiJUb292aWkiLCJkZXBsb3ltZW50IjoidG9vdmlpLWNvbnRlbnQiLCJzZXJ2aWNlIjoidG9vdmlpLWN1c3RvbWVycyIsInBvcnRhbElkIjoiNjU4NDQ3ZDY5OTZhNDdkMGJmY2U3YjdmIn0="
              className="bg-mainYellow px-10 py-2 rounded-xl font-bold text-xl"
            >
              SUBSCRIBE
            </Link>
          </div>
        </section>
        <section className="py-12">
          <p className="font-bold text-4xl text-center">
            All Channels in Premium
          </p>
          <section className="flex flex-col gap-8 mt-8">{channels}</section>
        </section>
      </section>
      <StreamingSection />
    </article>
  );
}
