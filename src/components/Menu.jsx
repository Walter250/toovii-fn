import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

export default function Menu() {
  const theme = useSelector((state) => state.theme.value);
  const themeStyles = theme.isDarkMode
    ? "text-white bg-black"
    : "text-black bg-blue-50";
  return (
    <section
      className={`${themeStyles} w-4/5 h-screen absolute top-0 left-0 px-6 overflow-hidden flex flex-col justify-between items-center py-8`}
    >
      <img className="w-28 object-contain" src="logo.png" alt="main logo" />
      <div className="flex flex-col justify-between items-center gap-6 w-full">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${
              isActive ? "text-mainYellow" : ""
            } font-semibold hover:text-mainYellow w-full text-center py-2 hover:bg-[#242424] border-b border-mainYellow`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/channels"
          className={({ isActive }) =>
            `${
              isActive ? "text-mainYellow" : ""
            } font-semibold hover:text-mainYellow w-full text-center py-2 hover:bg-[#242424] border-b border-mainYellow`
          }
        >
          Channels
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${
              isActive ? "text-mainYellow" : ""
            } font-semibold hover:text-mainYellow w-full text-center py-2 hover:bg-[#242424] border-b border-mainYellow`
          }
          to="/packages"
        >
          Packages
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${
              isActive ? "text-mainYellow" : ""
            } font-semibold hover:text-mainYellow w-full text-center py-2 hover:bg-[#242424] border-b border-mainYellow`
          }
        >
          Contacts
        </NavLink>
        <NavLink
          to="/faq"
          className={({ isActive }) =>
            `${
              isActive ? "text-mainYellow" : ""
            } font-semibold hover:text-mainYellow w-full text-center py-2 hover:bg-[#242424] border-b border-mainYellow`
          }
        >
          FAQ
        </NavLink>
        <NavLink
          to="/privacy"
          className={({ isActive }) =>
            `${
              isActive ? "text-mainYellow" : ""
            } font-semibold hover:text-mainYellow w-full text-center py-2 hover:bg-[#242424] border-b border-mainYellow`
          }
        >
          Privacy Policy
        </NavLink>
      </div>
      <Link
        to="/signup"
        className="bg-mainYellow px-8 py-2 rounded-lg font-bold"
      >
        Get Started
      </Link>
    </section>
  );
}
