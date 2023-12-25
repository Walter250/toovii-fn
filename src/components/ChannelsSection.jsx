import { useState } from "react";

/* eslint-disable react/prop-types */
export default function ChannelSection({ name }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen((prev) => !prev);
  }
  return (
    <div
      className="bg-[#242424] w-full flex flex-col gap-4 items-center py-6 transition-all duration-300"
      onClick={handleOpen}
    >
      <div className="flex justify-between w-full px-4">
        <div className="w-6"></div>
        <p className="font-bold text-2xl">{name}</p>
        <img className="w-6 object-contain" src="/down.png" alt="" />
      </div>
      {isOpen && (
        <div className="flex justify-center gap-8 flex-wrap">
          <img className="w-20 object-contain" src="/channel.png" alt="" />
          <img className="w-20 object-contain" src="/channel.png" alt="" />
          <img className="w-20 object-contain" src="/channel.png" alt="" />
          <img className="w-20 object-contain" src="/channel.png" alt="" />
          <img className="w-20 object-contain" src="/channel.png" alt="" />
        </div>
      )}
    </div>
  );
}
