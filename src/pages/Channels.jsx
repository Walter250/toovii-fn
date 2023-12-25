import ChannelSection from "../components/ChannelsSection";

export default function Channels() {
  return (
    <article className="text-white bg-black flex flex-col gap-4 px-20 md:px-10 sm:px-6 py-12">
      <p className="font-bold text-4xl text-center mb-6">Our Channels</p>
      <ChannelSection name="Movies" />
      <ChannelSection name="Sports" />
      <ChannelSection name="Entertainment" />
      <ChannelSection name="Music" />
      <ChannelSection name="History" />
    </article>
  );
}
