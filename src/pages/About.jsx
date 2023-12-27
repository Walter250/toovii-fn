import { useSelector } from "react-redux";

export default function About() {
  const theme = useSelector((state) => state.theme.value);
  const themeStyles = theme.isDarkMode
    ? "text-white bg-black"
    : "text-black bg-white";

  return (
    <article className={`${themeStyles} pb-12`}>
      <section className="relative w-full h-96 grid place-content-center">
        <p className="z-50 font-bold text-6xl md:text-5xl sm:text-4xl text-mainYellow">
          About Us
        </p>
        <img
          className="w-full h-full object-cover absolute top-0 left-0"
          src="/abouthead.jpg"
          alt="header"
        />
        <div
          className={`${
            theme.isDarkMode ? "bg-black/40" : "bg-white/40"
          } w-full h-full absolute top-0 left-0`}
        ></div>
      </section>
      <article className="flex flex-col py-10 px-20 md:px-10 sm:px-6 gap-12">
        <section className="-mb-12">
          <p
            className={`${
              theme.isDarkMode ? "shadow-white/20" : "shadow-black/30"
            } shadow-lg border border-gray-400 px-10 py-[6px] font-semibold text-center w-fit rounded-xl`}
          >
            About us
          </p>
        </section>
        <section className="flex justify-between items-center gap-8 md:flex-col">
          <div className="w-2/5 md:w-full font-bold text-5xl md:text-4xl sm:text-3xl text-justify">
            <span className="text-mainYellow">Introduction </span>
            to best
            <br />
            Streaming Platform
          </div>
          <div className="w-3/5 md:w-full text-justify flex justify-end gap-8 sm:flex-col">
            <p className="w-1/2 sm:w-full">
              Step into a world of endless possibilities with TooVii. We are not
              just a streaming service; we are your go-to destination for
              curated entertainment that fits your lifestyle. Our commitment is
              simple yet powerful: to provide you with a seamless, affordable,
              and diverse streaming experience.
            </p>
            <p className="w-1/2 sm:w-full">
              At TooVii, {"we're"} more than just a streaming platform.{" "}
              {"We're"} a team passionate about bringing joy to your screens.
              Our mission is simple: to revolutionize how you experience
              entertainment. With a focus on affordability, variety, and
              innovation, TooVii is your gateway to a world of exclusive
              content, seamless streaming, and unparalleled convenience.
            </p>
          </div>
        </section>
        <section className="flex justify-between gap-8 md:flex-col">
          <div
            className={`${
              theme.isDarkMode
                ? "shadow-white/30 md:shadow-white/10"
                : "shadow-black/30 md:shadow-black/20"
            } w-1/3 flex justify-start items-center gap-6 shadow-xl rounded-2xl px-5 py-4 md:w-full`}
          >
            <div className="w-16 h-16 rounded-full bg-mainYellow grid place-content-center">
              <img
                className="w-10 h-10 object-contain"
                src="/price.png"
                alt="price icon"
              />
            </div>
            <div className="w-4/6">
              <p className="font-bold text-xl">Best Prices</p>
              <p>
                TooVii offers an affordable streaming experience, ensuring
                top-notch content is accessible to all.
              </p>
            </div>
          </div>
          <div
            className={`${
              theme.isDarkMode
                ? "shadow-white/30 md:shadow-white/10"
                : "shadow-black/30 md:shadow-black/20"
            } w-1/3 flex justify-start items-center gap-6 shadow-xl rounded-2xl px-5 py-4 md:w-full`}
          >
            <div className="w-16 h-16 rounded-full bg-mainYellow grid place-content-center">
              <img
                className="w-10 h-10 object-contain"
                src="/price.png"
                alt="price icon"
              />
            </div>
            <div className="w-4/6">
              <p className="font-bold text-xl">Fast, Available Everywhere</p>
              <p>
                Experience the speed of entertainment Everywhere like never
                before.
              </p>
            </div>
          </div>
          <div
            className={`${
              theme.isDarkMode
                ? "shadow-white/30 md:shadow-white/10"
                : "shadow-black/30 md:shadow-black/20"
            } w-1/3 flex justify-start items-center gap-6 shadow-xl rounded-2xl px-5 py-4 md:w-full`}
          >
            <div className="w-16 h-16 rounded-full bg-mainYellow grid place-content-center">
              <img
                className="w-10 h-10 object-contain"
                src="/team.png"
                alt="price icon"
              />
            </div>
            <div className="w-4/6">
              <p className="font-bold text-xl">Professional Team</p>
              <p>
                Our experts curate, create, and deliver entertainment with
                precision and passion.
              </p>
            </div>
          </div>
        </section>
        <img
          className="w-4/5 mx-auto sm:w-full object-contain"
          src="/aboutgrid.png"
          alt="about team"
        />
      </article>
      <article className="w-full px-20 md:px-10 sm:px-6 flex flex-col gap-8 items-center">
        <section className="">
          <p
            className={`${
              theme.isDarkMode ? "shadow-white/20" : "shadow-black/30"
            } shadow-lg border border-gray-400 px-10 py-[6px] font-semibold text-center w-fit rounded-xl`}
          >
            Our Trustees
          </p>
        </section>
        <p className="text-center w-4/5">
          TooVii is proud to collaborate with a network of visionary sponsors
          who share our commitment to revolutionizing entertainment. Their
          support empowers us to bring you a premium streaming experience,
          making quality content accessible to audiences worldwide.
        </p>
        <div className="flex justify-between w-full">
          <img className="w-28 object-contain" src="/sharp.png" alt="logo" />
          <img className="w-28 object-contain" src="/sharp.png" alt="logo" />
          <img className="w-28 object-contain" src="/sharp.png" alt="logo" />
          <img className="w-28 object-contain" src="/sharp.png" alt="logo" />
        </div>
      </article>
      <article className="px-20 md:px-10 sm:px-6 flex flex-col items-center gap-10">
        <section className="">
          <p
            className={`${
              theme.isDarkMode ? "shadow-white/20" : "shadow-black/30"
            } shadow-lg border border-gray-400 px-10 py-[6px] font-semibold text-center w-fit rounded-xl`}
          >
            Our Team
          </p>
        </section>

        <section className="flex justify-between gap-8 w-full md:flex-col items-center">
          <div className="flex justify-between gap-8 w-3/5 md:w-full sm:flex-col items-center">
            <div className="h-60 w-4/6 sm:w-full flex flex-col gap-6 md:w-1/2">
              <p className="text-4xl font-bold">
                <span className="text-mainYellow">Team</span> Members
              </p>
              <p className="w-full text-justify">
                Our team at TooVii is a tight-knit group of enthusiasts
                dedicated to redefining entertainment. From tech wizards
                ensuring seamless streaming to creative minds curating exclusive
                content, each member plays a pivotal role in bringing you the
                best in entertainment.
              </p>
            </div>
            <div className="h-80 w-2/6 sm:w-full md:w-1/2 relative group">
              <img
                className="w-full h-full object-cover"
                src="/member1.jpg"
                alt=""
              />
              <div
                className={`${
                  theme.isDarkMode ? "bg-black/30" : "bg-white/30"
                } w-full h-full bg-black absolute top-0 left-0 hidden group-hover:grid place-content-center transition-all duration-200`}
              >
                {" "}
                <div className="flex flex-col items-center">
                  <p className="font-bold text-xl">Aristide Isingizwe</p>
                  <p>Frontend Dev</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-8 w-2/5 md:w-full sm:flex-col items-center">
            <div className="h-80 w-1/2 sm:w-full relative group">
              <img
                className="w-full h-full object-cover"
                src="/member1.jpg"
                alt=""
              />
              <div
                className={`${
                  theme.isDarkMode ? "bg-black/30" : "bg-white/30"
                } w-full h-full bg-black absolute top-0 left-0 hidden place-content-center group-hover:grid transition-all duration-200`}
              >
                <div className="flex flex-col items-center">
                  <p className="font-bold text-xl">Aristide Isingizwe</p>
                  <p>Frontend Dev</p>
                </div>
              </div>
            </div>
            <div className="h-80 w-1/2 sm:w-full relative group">
              <img
                className="w-full h-full object-cover"
                src="/member1.jpg"
                alt=""
              />
              <div
                className={`${
                  theme.isDarkMode ? "bg-black/30" : "bg-white/30"
                } w-full h-full bg-black absolute top-0 left-0 hidden place-content-center group-hover:grid transition-all duration-200`}
              >
                <div className="flex flex-col items-center">
                  <p className="font-bold text-xl">Aristide Isingizwe</p>
                  <p>Frontend Dev</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </article>
  );
}
