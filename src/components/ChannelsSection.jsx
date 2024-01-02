import { useState } from "react";
import { baseChannels } from "../assets/channels";
import { premChannels } from "../assets/channels";
import { channelTypes } from "../assets/channels";

/* eslint-disable react/prop-types */
export default function ChannelSection({ name, category }) {
  const [isOpen, setIsOpen] = useState(false);

  const channels =
    category === "base"
      ? baseChannels.filter((channel) => channel.Type === name)
      : category === "prem"
      ? premChannels.filter((channel) => channel.Type === name)
      : [
          ...baseChannels.filter((channel) => channel.Type === name),
          ...premChannels.filter((channel) => channel.Type === name),
        ];

  function handleOpen() {
    setIsOpen((prev) => !prev);
  }
  return (
    channels.length > 0 && (
      <div
        className="bg-secDark w-full flex flex-col gap-4 items-center py-6 transition-all duration-300 px-6"
        onClick={handleOpen}
      >
        <div className="flex justify-between w-full px-4">
          <div className="w-6"></div>
          <p className="font-bold text-2xl">{name}</p>
          <img className="w-6 object-contain" src="/down.png" alt="" />
        </div>
        {isOpen && (
          <div className="flex justify-center gap-8 flex-wrap">
            {channels.map((channel) => (
              <p className="font-bold text-xl">{channel["Channel Name"]}</p>
            ))}
          </div>
        )}
      </div>
    )
  );
}
