import useLocalStorage from "./localStorage";

export default function useDarkMode (defaultValue) {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", defaultValue);

  return [darkMode, setDarkMode];
}

//  LocalWords:  localStorage
