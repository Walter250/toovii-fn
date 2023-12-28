import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Payment() {
  const location = useLocation();
  const [step, setStep] = useState(1);
  const bouquet = location.state ? location.state : { id: 1, name: "base" };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <article className="bg-mainDark px-20 md:px-10 sm:px-6">
      <section className="text-white flex justify-between">
        <div className="flex items-center gap-4">
          <div className="font-bold text-lg bg-[#2e2e2e] w-10 h-10 grid place-content-center rounded-full">
            {step === 1 ? (
              "1"
            ) : (
              <img className="w-5 object-contain" src="/check.png" />
            )}
          </div>
          <p>Select Plan</p>
          <div className="w-1/6 h-px bg-mainYellow"></div>
        </div>
        <div className="flex items-center gap-4">
          <div className="font-bold text-lg bg-[#2e2e2e] w-10 h-10 grid place-content-center rounded-full">
            {step < 3 ? (
              "2"
            ) : (
              <img className="w-5 object-contain" src="/check.png" />
            )}
          </div>
          <p>Plan details</p>
          <div className="w-1/6 h-px bg-mainYellow"></div>
        </div>
        <div className="flex items-center gap-4">
          <div className="font-bold text-lg bg-[#2e2e2e] w-10 h-10 grid place-content-center rounded-full">
            {step < 3 ? (
              "3"
            ) : (
              <img className="w-5 object-contain" src="/check.png" />
            )}
          </div>
          <p>Your Details</p>
          <div className="w-1/6 h-px bg-mainYellow"></div>
        </div>
        <div className="flex items-center gap-4">
          <div className="font-bold text-lg bg-[#2e2e2e] w-10 h-10 grid place-content-center rounded-full">
            {step < 4 ? (
              "4"
            ) : (
              <img className="w-5 object-contain" src="/check.png" />
            )}
          </div>
          <p>Pay</p>
        </div>
      </section>
    </article>
  );
}
