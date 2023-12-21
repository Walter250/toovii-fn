import { Link, NavLink, useLocation } from "react-router-dom";
import Theme from "./Theme";

export default function Header() {
  const location = useLocation();
  console.log(location);
  return (
    <section
      className={`flex justify-between items-center px-8 text-white ${
        location.pathname === "/" ? "bg-black/70" : "bg-black"
      }`}
    >
      <Link to="/">
        <img className="w-28" src="/logo.png" alt="toovii logo" />
      </Link>
      <div className="flex justify-between items-center gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${
              isActive ? "text-mainYellow" : ""
            } font-semibold hover:text-mainYellow`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${
              isActive ? "text-mainYellow" : ""
            } font-semibold hover:text-mainYellow`
          }
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${
              isActive ? "text-mainYellow" : ""
            } font-semibold hover:text-mainYellow`
          }
          to="/packages"
        >
          Packages
        </NavLink>
        <NavLink
          to="/payment"
          className={({ isActive }) =>
            `${
              isActive ? "text-mainYellow" : ""
            } font-semibold hover:text-mainYellow`
          }
        >
          Payment methods
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${
              isActive ? "text-mainYellow" : ""
            } font-semibold hover:text-mainYellow`
          }
        >
          Contacts
        </NavLink>
        <NavLink
          to="/faq"
          className={({ isActive }) =>
            `${
              isActive ? "text-mainYellow" : ""
            } font-semibold hover:text-mainYellow`
          }
        >
          FAQ
        </NavLink>
      </div>
      <div className="flex justify-between items-center gap-6">
        <Link
          to="/signup"
          className="bg-mainYellow px-8 py-2 rounded-lg font-bold"
        >
          Get Started
        </Link>
        <Theme />
      </div>
    </section>
  );
}
