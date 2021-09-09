import React from "react";
import moon from "../images/icon-moon.svg";
import sun from "../images/icon-sun.svg";

const Header = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    if (theme === "light") {
      document.body.classList.remove("bg-bg1");
      document.body.classList.add("bg-bg1_d");
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setTheme("dark");
    } else {
      document.body.classList.remove("bg-bg1_d");
      document.body.classList.add("bg-bg1");
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setTheme("light");
    }
  };
  return (
    <header className="flex items-center justify-between font-bold mb-5">
      <h1 className="text-2xl dark:text-text1_d transition">devfinder</h1>
      <p
        className="flex items-center gap-3 text-sm text-themeIcon dark:text-themeIcon_d font-bold cursor-pointer"
        onClick={toggleTheme}>
        {theme === "dark" ? "LIGHT" : "DARK"}
        {theme === "dark" ? (
          <img src={sun} alt="" />
        ) : (
          <img src={moon} alt="" />
        )}
      </p>
    </header>
  );
};
export default Header;
