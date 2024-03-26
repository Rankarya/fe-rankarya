import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function Theme() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div >
      <ul className="mt-10">
        <li className="flex gap-2 my-2">
          <input
            type="radio"
            id="lightMode"
            name="theme"
            value="light"
            checked={theme === "light"}
            onChange={toggleTheme}
          />
          <label htmlFor="lightMode">Light Mode</label>
        </li>
        <li className="flex gap-2 my-2">
          <input
            type="radio"
            id="darkMode"
            name="theme"
            value="dark"
            checked={theme === "dark"}
            onChange={toggleTheme}
          />
          <label htmlFor="darkMode">Dark Mode</label>
        </li>
      </ul>
    </div>
  );
}
