import { Sun } from "lucide-react";
import { Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";


export default function ThemeToggle() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else if (savedTheme === "light" || !savedTheme) {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };
  
  return (
    <button 
      onClick={toggleTheme} 
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-3 rounded-full transition-all duration-300",
        "focus:outline-hidden glass hover:scale-110",
        isDarkMode ? "bg-indigo-900/30" : "bg-amber-100/30"
      )}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-indigo-900"/>
      )}
    </button>
  )
}