import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const form = useRef();
  const [messages, setMessages] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });
  const [firstnameError, setFirstnameError] = useState(false);
  const [lastnameError, setLastnameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [, setGeneralError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const theme = useSelector((state) => state.theme.value);
  const themeStyles = theme.isDarkMode
    ? "text-mainLight bg-mainDark"
    : "text-mainDark bg-mainLight";

  async function handlesubmit(event) {
    event.preventDefault();
    if (!checkerror()) return;
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_68l50r9",
        "template_ku415cn",
        form.current,
        "E0z4beJwjYyTgZaaz"
      )
      .then(
        () => {
          setMessages({
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            message: "",
          });
          toast.success("Message Sent ", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setIsLoading(false);
        },
        () => {
          setMessages({
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            message: "",
          });
          toast.error("Sorry message not sent, try again", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setGeneralError(true);
        }
      );
  }

  function checkerror() {
    if (!messages.firstname) {
      setFirstnameError(true);
      return false;
    }
    if (!messages.lastname) {
      setLastnameError(true);
      return false;
    }
    if (!messages.email) {
      setEmailError(true);
      return false;
    }
    if (!messages.phone) {
      setPhoneError(true);
      return false;
    }
    if (!messages.message) {
      setMessageError(true);
      return false;
    }
    return true;
  }

  function cancelErrors() {
    setFirstnameError(false);
    setLastnameError(false);
    setEmailError(false);
    setPhoneError(false);
    setMessageError(false);
    setGeneralError(false);
  }

  function handleFormChange(e) {
    cancelErrors();
    setMessages((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

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
          <form className="flex flex-col gap-6 w-full" ref={form}>
            <div className="flex justify-between gap-4">
              <label className="flex flex-col w-1/2 font-semibold gap-2">
                Firstname
                <input
                  className={`${
                    theme.isDarkMode ? "bg-mainDark" : "bg-mainLight"
                  } py-2 px-4 placeholder:font-normal rounded-lg`}
                  placeholder="Firstname"
                  type="text"
                  value={messages.firstname}
                  name="firstname"
                  onChange={handleFormChange}
                />
                {firstnameError && (
                  <p className="text-red-500 text-sm font-normal">
                    Firstname is required
                  </p>
                )}
              </label>
              <label className="flex flex-col w-1/2 font-semibold gap-2">
                Lastname
                <input
                  className={`${
                    theme.isDarkMode ? "bg-mainDark" : "bg-mainLight"
                  } py-2 px-4 placeholder:font-normal rounded-lg`}
                  placeholder="Lastname"
                  type="text"
                  value={messages.lastname}
                  name="lastname"
                  onChange={handleFormChange}
                />
                {lastnameError && (
                  <p className="text-red-500 text-sm font-normal">
                    Lastname is required
                  </p>
                )}
              </label>
            </div>
            <div className="flex justify-between gap-4">
              <label className="flex flex-col w-1/2 font-semibold gap-2">
                Email
                <input
                  className={`${
                    theme.isDarkMode ? "bg-mainDark" : "bg-mainLight"
                  } py-2 px-4 placeholder:font-normal rounded-lg`}
                  placeholder="Email"
                  type="email"
                  value={messages.email}
                  name="email"
                  onChange={handleFormChange}
                />
                {emailError && (
                  <p className="text-red-500 text-sm font-normal">
                    Email is required
                  </p>
                )}
              </label>
              <label className="flex flex-col w-1/2 font-semibold gap-2">
                Phone Number
                <input
                  className={`${
                    theme.isDarkMode ? "bg-mainDark" : "bg-mainLight"
                  } py-2 px-4 placeholder:font-normal rounded-lg`}
                  placeholder="Phone Number"
                  type="text"
                  value={messages.phone}
                  name="phone"
                  onChange={handleFormChange}
                />
                {phoneError && (
                  <p className="text-red-500 text-sm font-normal">
                    Phone number is required
                  </p>
                )}
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
                value={messages.message}
                onChange={handleFormChange}
              ></textarea>
              {messageError && (
                <p className="text-red-500 text-sm font-normal">
                  Message is required
                </p>
              )}
            </label>
            <button
              className="w-full py-2 bg-mainYellow font-bold text-xl rounded-full grid place-content-center"
              onClick={handlesubmit}
            >
              {isLoading ? <Spinner /> : "Send"}
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
            <p>info@toovii.com</p>
          </div>
          <div className="flex flex-col font-semibold items-center">
            <img className="w-12" src="/phone.png" alt="" />
            <p>Phone</p>
            <p>+250785478021</p>
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
