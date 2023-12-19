import * as React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function Theme() {
  const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <DarkModeSwitch
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={40}
      moonColor="#faa41a"
      sunColor="#faa41a"
    />
  );
}
