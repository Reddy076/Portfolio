import { Sun } from "lucide-react";
import { Moon } from "lucide-react";
import { useEffect, useState } from "react";


export default function ThemeToggle() {



  const [isDarkMode, setIsDarkMode]=useState(false);

  useEffect(()=>{
    const savedTheme = localStorage.getItem("theme");
    if(savedTheme === "dark"){
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }else{
      setIsDarkMode(false);
      localStorage.setItem("theme", "light");
      
    }
  },[])

  const toggleTheme = () => {
    if(isDarkMode){
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }else{
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);

    }
  };
  return (
    <button onClick={toggleTheme}>
      {" "}
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
        ) : (
        <Moon className="h-6 w-6 text-blue-900"/>
        )}
    </button>
  )
}
