import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function ContactPage() {
  const theme = useSelector((state) => state.theme.value);
  const themeStyles = theme.isDarkMode
    ? "text-mainLight bg-mainDark"
    : "text-mainDark bg-mainLight";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <article className={`${themeStyles} px-20 md:px-10 sm:px-6 py-8`}>
      <h1 className="font-bold text-4xl md:text-3xl sm:text-2xl text-center mb-6">
        Contact Us
      </h1>
      <section className="flex justify-between">
        <div className="w-2/5 flex flex-col">
          <img
            className="w-full object-contain md:hidden"
            src="/contact.png"
            alt="contact image"
          />
        </div>
        <section
          className={`${
            theme.isDarkMode ? "bg-secDark" : "bg-secLight"
          } w-1/2 md:w-full p-6 my-auto`}
        >
          <form className="flex flex-col gap-6 w-full">
            <div className="flex justify-between gap-4">
              <label className="flex flex-col w-1/2 font-semibold gap-2">
                Firstname
                <input
                  className={`${
                    theme.isDarkMode ? "bg-mainDark" : "bg-mainLight"
                  } py-2 px-4 placeholder:font-normal rounded-lg`}
                  placeholder="Firstname"
                  type="text"
                />
              </label>
              <label className="flex flex-col w-1/2 font-semibold gap-2">
                Lastname
                <input
                  className={`${
                    theme.isDarkMode ? "bg-mainDark" : "bg-mainLight"
                  } py-2 px-4 placeholder:font-normal rounded-lg`}
                  placeholder="Lastname"
                  type="text"
                />
              </label>
            </div>
            <div className="flex justify-between gap-4">
              <label className="flex flex-col w-1/2 font-semibold gap-2">
                Email
                <input
                  className={`${
                    theme.isDarkMode ? "bg-mainDark" : "bg-mainLight"
                  } py-2 px-4 placeholder:font-normal rounded-lg`}
                  placeholder="Emain"
                  type="email"
                />
              </label>
              <label className="flex flex-col w-1/2 font-semibold gap-2">
                Phone Number
                <input
                  className={`${
                    theme.isDarkMode ? "bg-mainDark" : "bg-mainLight"
                  } py-2 px-4 placeholder:font-normal rounded-lg`}
                  placeholder="Phone Number"
                  type="text"
                />
              </label>
            </div>
            <label className="font-semibold">
              Message
              <textarea
                className={`${
                  theme.isDarkMode ? "bg-mainDark" : "bg-mainLight"
                } w-full h-40 placeholder:font-normal px-4 py-2 rounded-lg mt-2`}
                name="message"
                placeholder="Write your message"
              ></textarea>
            </label>
            <button className="w-full py-2 bg-mainYellow font-bold text-xl rounded-full">
              Send
            </button>
          </form>
        </section>
      </section>
      <section
        className={`${
          theme.isDarkMode ? "bg-secDark" : "bg-secLight"
        } p-4 md:hidden`}
      >
        <div className="flex justify-around gap-10 mb-6">
          <div className="flex flex-col font-semibold items-center">
            <img className="w-12" src="/location.png" alt="" />
            <p>Location</p>
            <p>Kigali/Rwanda</p>
          </div>
          <div className="flex flex-col font-semibold items-center">
            <img className="w-12" src="/mail.png" alt="" />
            <p>Email</p>
            <p>Contact@toovii.com</p>
          </div>
          <div className="flex flex-col font-semibold items-center">
            <img className="w-12" src="/phone.png" alt="" />
            <p>Phone</p>
            <p>+250780000000</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="w-2/6 h-px bg-mainYellow"></div>
          <div className="flex justify-start gap-3">
            <img className="w-6" src="/twitter.png" alt="twitter" />
            <img className="w-6" src="/facebook.png" alt="twitter" />
            <img className="w-6" src="/linkedin.png" alt="twitter" />
            <img className="w-6" src="/instagram.png" alt="twitter" />
          </div>
          <div className="w-2/6 h-px bg-mainYellow"></div>
        </div>
      </section>
    </article>
  );
}
