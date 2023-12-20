import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function AboutSection() {
  const theme = useSelector((state) => state.theme.value);
  const themeStyles = theme.isDarkMode
    ? "text-white bg-black"
    : "text-black bg-white";
  return (
    <article className={`${themeStyles} px-20 py-12 flex flex-col gap-20`}>
      <section className="flex items-center gap-12">
        <div className="w-1/2 flex flex-col gap-8">
          <p className="font-bold text-5xl">Why Us?</p>
          <p className="text-lg">
            At TooVii, we redefine entertainment with affordability, variety,
            and innovation. Our mission is to deliver a streaming experience
            that transcends traditional cable or satellite TV. With a commitment
            to quality, exclusive content, and user-friendly technology, TooVii
            stands out as your top choice for on-the-go entertainment.
          </p>
          <Link
            to="/plans"
            className="font-semibold text-2xl bg-mainYellow px-10 py-2 rounded-xl w-fit"
          >
            View Plans
          </Link>
        </div>
        <img
          className="w-1/2 h-96 object-cover"
          src="/about.jpg"
          alt="about toovii image"
        />
      </section>
      <section className="flex items-center gap-12">
        <img
          className="w-1/2 h-96 object-cover"
          src="/resp.png"
          alt="toovii responsiveness image"
        />
        <div className="w-1/2 flex flex-col gap-8">
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
            to="/plans"
            className="font-semibold text-2xl bg-mainYellow px-10 py-2 rounded-xl w-fit"
          >
            View Plans
          </Link>
        </div>
      </section>
    </article>
  );
}
