import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="text-white w-full h-[80vh] flex flex-col justify-center items-center gap-8">
      <h1 className="font-bold text-4xl">With you everywhere</h1>
      <Link
        to="/signup"
        className="font-semibold text-xl bg-mainYellow px-8 py-2 rounded-xl"
      >
        Get Started
      </Link>
      <img
        className="absolute w-full h-full top-0 left-0 object-cover -z-10"
        src="/sample.jpg"
        alt=""
      />
    </section>
  );
}
