import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { Spin as Hamburger } from "hamburger-react";
import Menu from "./Menu";
import { useSelector } from "react-redux";
import Theme from "./Theme";

export default function Header() {
  const theme = useSelector((state) => state.theme.value);
  const themeStyles = theme.isDarkMode
    ? "text-mainLight bg-mainDark"
    : "text-mainDark bg-mainLight";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  function closeMenus() {
    setIsMenuOpen(false);
  }

  function handleMenu(e) {
    e.stopPropagation();
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <section
      onClick={closeMenus}
      className={`flex justify-between items-center px-8 md:px-4 sm:px-1 border-b border-gray-700 ${
        location.pathname === "/"
          ? "bg-mainDark/70 text-mainLight"
          : `${themeStyles}`
      }`}
    >
      <Link to="/">
        <img
          className="w-28 md:w-24 sm:w-20"
          src="/logo.png"
          alt="toovii logo"
        />
      </Link>

      <div className="flex justify-between items-center gap-6 md:hidden">
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
          to="/channels"
          className={({ isActive }) =>
            `${
              isActive ? "text-mainYellow" : ""
            } font-semibold hover:text-mainYellow`
          }
        >
          Channels
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
          className={({ isActive }) =>
            `${
              isActive ? "text-mainYellow" : ""
            } font-semibold hover:text-mainYellow`
          }
          to="https://cloudtv.akamaized.net/donotremove/tvms/webtv/v10.0.31/index.html?packageid=com.toovii.toovii/"
          target="_blank"
        >
          WebTV
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
      <div className="flex justify-between items-center gap-6 md:gap-4 sm:gap-2">
        <Link
          to="https://portal.tvms.io/?o=shop&h=eyJjbGllbnQiOiJUb292aWkiLCJkZXBsb3ltZW50IjoidG9vdmlpLWNvbnRlbnQiLCJzZXJ2aWNlIjoidG9vdmlpLWN1c3RvbWVycyIsInBvcnRhbElkIjoiNjU4NDQ3ZDY5OTZhNDdkMGJmY2U3YjdmIn0="
          className="bg-mainYellow px-8 py-2 rounded-lg font-bold sm:hidden"
          target="_blank"
        >
          Join
        </Link>
        <Theme />
        <div className="hidden md:block z-50" onClick={handleMenu}>
          <Hamburger color="#faa41a" toggled={isMenuOpen} size={25} />
        </div>
        {isMenuOpen && <Menu />}
      </div>
    </section>
  );
}
