import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function AboutSection() {
  const theme = useSelector((state) => state.theme.value);
  const themeStyles = theme.isDarkMode
    ? "text-mainLight bg-mainDark"
    : "text-mainDark bg-mainLight";
  return (
    <article
      className={`${themeStyles} px-20 py-12 flex flex-col gap-20 md:px-10 sm:px-6 relative`}
    >
      <section className="flex items-center gap-12 md:flex-col">
        <div className="w-1/2 flex flex-col gap-8 md:w-full">
          <p className="font-bold text-5xl">Why Us?</p>
          <p className="text-lg">
            At TooVii, we redefine entertainment with affordability, variety,
            and innovation. Our mission is to deliver a streaming experience
            that transcends traditional cable or satellite TV. With a commitment
            to quality, exclusive content, and user-friendly technology, TooVii
            stands out as your top choice for on-the-go entertainment.
          </p>
          <Link
            to="/about"
            className="font-semibold text-2xl bg-mainYellow px-10 py-2 rounded-xl w-fit"
          >
            Learn More
          </Link>
        </div>
        <img
          className="w-1/2 h-96 object-contain md:w-full"
          src="/about.png"
          alt="about toovii image"
        />
      </section>
      <section className="flex items-center gap-12 md:flex-col">
        <img
          className="w-1/2 h-96 object-cover md:w-full md:order-2"
          src="/resp.png"
          alt="toovii responsiveness image"
        />
        <div className="w-1/2 flex flex-col gap-8 md:w-full md:order-1">
          <p className="font-bold text-5xl">Supported devices</p>
          <p className="text-lg">
            TooVii goes beyond boundaries. Our platform is meticulously crafted
            to deliver a seamless experience across all your devices. Whether
            {"you're"} on your smartphone, tablet, laptop, or desktop, TooVii
            adapts effortlessly. Watch your favorite shows, movies, and more,
            with responsive design ensuring an unparalleled viewing experience,
            no matter the screen size. Your entertainment, your way, on every
            device.
          </p>
          <Link
            to="/packages#"
            className="font-semibold text-2xl bg-mainYellow px-10 py-2 rounded-xl w-fit"
          >
            View Plans
          </Link>
        </div>
      </section>
    </article>
  );
}
