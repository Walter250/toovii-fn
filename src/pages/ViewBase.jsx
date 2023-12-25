import { useNavigate } from "react-router-dom";
import ChannelSection from "../components/ChannelsSection";
import StreamingSection from "../components/StreamingSection";

export default function ViewBase() {
  const navigate = useNavigate();
  return (
    <article className="bg-black text-white pt-12">
      <section className="px-20 md:px-10 sm:px-6">
        <h1 className="font-bold text-4xl mb-4 text-center">Base</h1>
        <p className="text-center">
          The best entertainment for the whole family with Novelas TV, Nollywood
          TV or National Geographic
          <br />
          or Disney Channel and LEAGUE 1 UBER EATS for sports fans!
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
            <button
              className="bg-mainYellow px-10 py-2 rounded-xl font-bold text-xl"
              onClick={() =>
                navigate("/payment", { state: { id: 1, name: "base" } })
              }
            >
              SUBSCRIBE
            </button>
          </div>
        </section>
        <section className="py-12">
          <p className="font-bold text-4xl text-center">All Channels in Base</p>
          <section className="flex flex-col gap-8 mt-8">
            <ChannelSection name="Sports" />
            <ChannelSection name="Movies" />
            <ChannelSection name="Music" />
            <ChannelSection name="Entertainment" />
            <ChannelSection name="Local ChannelSection" />
            <ChannelSection name="Discovery" />
            <ChannelSection name="Youth and Education" />
            <ChannelSection name="Radio" />
          </section>
        </section>
      </section>
      <StreamingSection />
    </article>
  );
}
