import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="text-white w-full h-[80vh] md:h-[100vh] flex flex-col justify-center items-start gap-8 bg-mainDark/70 px-20 md:px-4">
      <h1 className="font-bold text-5xl md:text-4xl sm:text-3xl">
        With you everywhere
      </h1>
      <p className="w-1/2 text-xl  md:w-full">
        Seamless streaming, exclusive shows, and popular channels – TooVii is
        your go-to platform for limitless entertainment. Wherever you are, we
        bring your favorite content to your fingertips.
      </p>
      <Link
        to="/signup"
        className="font-semibold text-2xl bg-mainYellow px-12 py-2 rounded-xl"
      >
        Get Started
      </Link>
      <video
        className="w-full object-cover h-[120vh] absolute -top-[20vh] right-0 left-0 -z-10"
        autoPlay
        muted
        loop
        src="/herovideo.mp4"
      ></video>
    </section>
  );
}
