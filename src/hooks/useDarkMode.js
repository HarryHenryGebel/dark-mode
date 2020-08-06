import useLocalStorage from "./localStorage";

export default function useDarkMode () {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

  return [darkMode, setDarkMode];
}

//  LocalWords:  localStorage
