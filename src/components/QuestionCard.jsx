import { useState } from "react";

/* eslint-disable react/prop-types */
export default function QuestionCard({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpening() {
    setIsOpen((prev) => !prev);
  }
  return (
    <section className="w-2/5 md:w-full h-fit">
      <div className="text-white flex justify-between items-center px-4 py-2 bg-black rounded-2xl" onClick={handleOpening}>
        <p>{question}</p>
        <img
          className="w-5"
          src={isOpen ? "/minus.png" : "/plus.png"}
          alt="plus icon"
        />
      </div>
      {isOpen && (
        <div className="border border-mainYellow rounded-2xl px-4 py-2 mt-4">
          {answer}
        </div>
      )}
    </section>
  );
}
