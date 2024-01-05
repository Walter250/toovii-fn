import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useDispatch, useSelector } from "react-redux";
import { handleTheme } from "../features/theme";

export default function Theme() {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();

  const toggleDarkMode = () => {
    if (theme.isDarkMode) {
      dispatch(handleTheme({ theme: "light", isDarkMode: false }));
    } else {
      dispatch(handleTheme({ theme: "dark", isDarkMode: true }));
    }
  };

  return (
    <DarkModeSwitch
      checked={theme.isDarkMode}
      onChange={toggleDarkMode}
      size={30}
      moonColor="#faa41a"
      sunColor="#faa41a"
    />
  );
}
