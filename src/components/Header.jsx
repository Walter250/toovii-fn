import { Link, NavLink, useLocation } from "react-router-dom";
import ProfileMenu from "./Profile";
import { useState } from "react";
import { Spin as Hamburger } from "hamburger-react";
import Menu from "./Menu";
import { useSelector } from "react-redux";

export default function Header() {
  const theme = useSelector((state) => state.theme.value);
  const themeStyles = theme.isDarkMode
    ? "text-mainLight bg-mainDark"
    : "text-mainDark bg-mainLight";

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  function closeMenus() {
    setIsMenuOpen(false);
    setIsProfileOpen(false);
  }

  function handleMenu(e) {
    e.stopPropagation();
    setIsProfileOpen(false);
    setIsMenuOpen((prev) => !prev);
  }

  function handleProfile(e) {
    e.stopPropagation();
    setIsMenuOpen(false);
    setIsProfileOpen((prev) => !prev);
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
          to="/signup"
          className="bg-mainYellow px-8 py-2 rounded-lg font-bold sm:hidden"
        >
          Get Started
        </Link>
        <div
          className="w-7 h-7 bg-red-200 rounded-full"
          onClick={handleProfile}
        >
          <img src="/user.png" alt="dummy profile" />
        </div>
        <div className="hidden md:block z-50" onClick={handleMenu}>
          <Hamburger color="#faa41a" toggled={isMenuOpen} size={25} />
        </div>
        {isProfileOpen && <ProfileMenu isShowing={isProfileOpen} />}
        {isMenuOpen && <Menu />}
      </div>
    </section>
  );
}
