import { cn } from '../lib/utils'
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
  { name: "Home", href: "/home", hash: "#hero" },
  { name: "About", href: "/about", hash: "#about" },
  { name: "Skills", href: "/skills", hash: "#skills" },
  { name: "Projects", href: "/projects", hash: "#projects" },
  { name: "Contact", href: "/contact", hash: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const handleNavClick = (hash) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };
  
  const handleHomeClick = (e) => {
    // For Home button, we want to navigate to /home and scroll to top
    setIsMenuOpen(false);
    // The Link component will handle the navigation, we just need to ensure we're at the top
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };
  
  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-500",
        isScrolled ? "py-3 bg-background/80" : "py-5 bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link
          className="text-xl font-bold flex items-center gap-2"
          to="/home"
        >
          <span className="relative z-10">
            <span className="text-primary">Dasthagiri </span>
            <span className="text-foreground">Portfolio</span>
          </span>
        </Link>

        {/* desktop nav */}
        <div className="hidden md:flex space-x-1">
          {navItems.map((item, key) => (
            <Link
              key={key}
              to={item.href}
              onClick={item.name === "Home" ? handleHomeClick : () => handleNavClick(item.hash)}
              className="px-4 py-2 rounded-lg text-foreground/80 hover:text-primary hover:bg-secondary/50 transition-all duration-300 relative group"
            >
              {item.name}
              <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-3/4 group-hover:left-1/8"></span>
            </Link>
          ))}
        </div>

        {/* mobile nav */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50 rounded-lg hover:bg-secondary/50 transition-colors"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={cn(
            "fixed inset-0 bg-background/90 z-40 flex flex-col items-center justify-center",
            "transition-all duration-500 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-6 text-2xl">
            {navItems.map((item, key) => (
              <Link
                key={key}
                to={item.href}
                onClick={item.name === "Home" ? handleHomeClick : () => handleNavClick(item.hash)}
                className="text-foreground/80 hover:text-primary transition-all duration-300 py-3 px-6 rounded-xl hover:bg-secondary/50 w-full text-center pop-in"
                style={{ animationDelay: `${key * 100}ms` }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;