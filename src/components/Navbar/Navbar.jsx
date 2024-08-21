import React from "react";
import { Link } from "react-router-dom";
import Switch from "../ui/Switch";

const Navbar = ({ onToggleTheme, isDarkMode }) => {
  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center p-4 transition-colors duration-300 ${
          isDarkMode ? "bg-[#141414de]" : "bg-white"
        }`}
      >
        <div>
          <h1 className="text-2xl">Santino Bertola</h1>
        </div>

        <nav className="flex justify-center gap-10 text-2xl">
          <a>Home</a>
          <a>About me</a>
          <a>Projects</a>
          <a>Contact</a>
        </nav>

        <div className="p-4">
          <Switch checked={isDarkMode} onCheckedChange={onToggleTheme} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
