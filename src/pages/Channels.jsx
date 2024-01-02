import { useEffect } from "react";
import ChannelSection from "../components/ChannelsSection";
import { channelTypes } from "../assets/channels";
import { useSelector } from "react-redux";

export default function Channels() {
  const theme = useSelector((state) => state.theme.value);
  const themeStyles = theme.isDarkMode
    ? "text-mainLight bg-mainDark"
    : "text-mainDark bg-mainLight";

  const channels = channelTypes.map((channel) => (
    <ChannelSection category="all" name={channel} />
  ));
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <article className={`${themeStyles} bg-mainDark flex flex-col gap-4 px-20 md:px-10 sm:px-6 py-12`}>
      <p className="font-bold text-4xl text-center mb-6">Our Channels</p>
      {channels}
    </article>
  );
}
