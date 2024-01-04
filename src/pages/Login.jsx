/* eslint-disable react-refresh/only-export-components */
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import url from "../../url";
import Spinner from "../components/Spinner";
import { login } from "../features/user";

export default function Login() {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const [isError, setIsError] = useState(false);
  const [formError, setFormError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const theme = useSelector((state) => state.theme.value);

  const themeStyles = theme.isDarkMode
    ? "text-mainLight bg-mainDark"
    : "text-mainDark bg-mainLight";
  const loginStyles = theme.isDarkMode
    ? "text-mainLight bg-secDark"
    : "text-mainDark bg-secLight";

  function handleFormChange(e) {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleLogin(e) {
    e.preventDefault();
    if (!userInfo.password || !userInfo.email) {
      setFormError(true);
    } else {
      setIsLoading(true);
      const formData = new URLSearchParams();
      for (const [key, value] of Object.entries(userInfo)) {
        formData.append(key, value);
      }
      const response = await fetch(`${url}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData,
      });
      const user = await response.json();
      dispatch(login({ isLogged: true, currentUser: user }));
      setIsLoading(false);
      if (response.status === 201) {
        return navigate("/");
      } else {
        setIsLoading(false);
        setIsError(true);
      }
    }
  }

  return (
    <article className={`${themeStyles} w-full h-[93vh] pt-8 md:h-[100%]`}>
      <article
        className={`${loginStyles} flex max-h-[85vh] text-dark-200 rounded-2xl overflow-hidden w-4/6 md:w-11/12 mx-auto pb-20 pt-4 gap-12`}
      >
        <section className="w-1/2 md:w-full bg-light-200 flex flex-col gap-8 py-4 justify-around items-center">
          <div className="flex items-center gap-4">
            <p className="font-serif font-bold text-3xl md:text-2xl">Toovii</p>
          </div>
          <p className="font-bold text-5xl md:text-4xl">Welcome Back</p>
          <form className="flex flex-col w-4/5 gap-6">
            {isError && (
              <p className="text-center text-red-700">
                Incorrect Username or password
              </p>
            )}
            {formError && (
              <p className="text-center text-red-700">Required input missing</p>
            )}
            <input
              className={`${
                theme.isDarkMode ? "bg-mainDark" : "bg-mainLight"
              } outline-none rounded-xl px-4 py-2 w-full`}
              type="email"
              placeholder="Email"
              value={userInfo.username}
              name="email"
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
              className="bg-mainYellow text-light-200 font-bold text-xl rounded-xl px-4 py-2 w-full grid place-content-center"
              onClick={handleLogin}
            >
              {isLoading ? <Spinner /> : "Log in"}
            </button>
          </form>
          <p>
            {`
          Don't have an Account yet? 
        `}
            <Link to="/signup" className="font-bold underline">
              Sign Up
            </Link>
          </p>
        </section>
        <section className="w-1/2 md:hidden">
          <img src="/login.png" alt="" />
        </section>
      </article>
    </article>
  );
}
