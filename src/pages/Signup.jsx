/* eslint-disable react-refresh/only-export-components */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import url from "../../url";
import Spinner from "../components/Spinner";

export default function Signup() {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState(false);
  const [userInfo, setUserInfo] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    dateOfBirth: "",
    phone: "",
    affiliateReference: "",
    password: "",
    confirmPassword:""
  });
  const navigate = useNavigate();

  function handleFormChange(e) {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSignup(e) {
    e.preventDefault();
    if (!userInfo.email || !userInfo.password || !userInfo.username) {
      setFormError(true);
    } else {
      setIsLoading(true);
      const formData = new URLSearchParams();
      for (const [key, value] of Object.entries(userInfo)) {
        formData.append(key, value);
      }
      const response = await fetch(`${url}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData,
      });
      setIsLoading(false);
      if (response.status === 201) return navigate("/login");
      else {
        setIsLoading(false);
        setIsError(true);
      }
    }
  }

  const theme = useSelector((state) => state.theme.value);
  const themeStyles = theme.isDarkMode
    ? "text-mainLight bg-mainDark"
    : "text-mainDark bg-mainLight";
  const loginStyles = theme.isDarkMode
    ? "text-mainLight bg-secDark"
    : "text-mainDark bg-secLight";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <article className={`${themeStyles} w-full h-[90vh] py-12 md:h-[100%]`}>
      <article
        className={`${loginStyles} flex max-h-[85vh] rounded-2xl overflow-hidden w-4/6 md:w-5/6 mx-auto pb-20`}
      >
        <section className="w-1/2 md:w-full bg-light-200 flex flex-col gap-8 py-4 justify-around items-center">
          <div className="flex items-center gap-4">
            <p className="font-serif font-bold text-3xl md:text-2xl">Toovii</p>
          </div>
          <p className="font-bold text-5xl md:text-4xl">Join Now</p>
          <form className="flex flex-col w-4/5 gap-6 md:w-4/5">
            {isError && (
              <p className="text-center text-red-700">
                Sorry!! Username already taken
              </p>
            )}
            {formError && (
              <p className="text-center text-red-700">Required Input Missing</p>
            )}
            <div className="flex gap-4">
              <input
                className={`${
                  theme.isDarkMode ? "bg-mainDark" : "bg-mainLight"
                } outline-none rounded-xl px-4 py-2 w-full`}
                type="texxt"
                placeholder="Firstname"
                name="firstname"
                onChange={(event) => handleFormChange(event)}
                value={userInfo.firstname}
              />
              <input
                className={`${
                  theme.isDarkMode ? "bg-mainDark" : "bg-mainLight"
                } outline-none rounded-xl px-4 py-2 w-full`}
                type="text"
                placeholder="Lastname"
                name="lastname"
                onChange={(event) => handleFormChange(event)}
                value={userInfo.lastname}
              />
            </div>
            <input
              className={`${
                theme.isDarkMode ? "bg-mainDark" : "bg-mainLight"
              } outline-none rounded-xl px-4 py-2 w-full`}
              type="text"
              placeholder="Username"
              value={userInfo.username}
              name="username"
              onChange={(event) => handleFormChange(event)}
            />
            <input
              className={`${
                theme.isDarkMode ? "bg-mainDark" : "bg-mainLight"
              } outline-none rounded-xl px-4 py-2 w-full`}
              type="password"
              placeholder="Password"
              name="password"
              value={userInfo.password}
              onChange={(event) => handleFormChange(event)}
            />
            <button
              className="bg-mainYellow text-light-200 mx-auto font-bold text-xl rounded-xl px-4 py-2 w-full grid place-content-center"
              onClick={handleSignup}
            >
              {isLoading ? <Spinner /> : "Sign Up"}
            </button>
          </form>
          <p>
            {`
          Already have an Account? 
        `}
            <Link to="/login" className="font-bold underline">
              Log In
            </Link>
          </p>
        </section>
        <section className="w-1/2 bg-dark-100 md:hidden">
          <img src="/login.png" alt="" />
        </section>
      </article>
    </article>
  );
}
