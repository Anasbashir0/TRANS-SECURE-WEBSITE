import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import logo from "../assets/logos/logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scroll
          ? "bg-white shadow-lg py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8">

        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">

          <img
            src={logo}
            alt="TRANS-SECURE Logo"
            className={`h-14 rounded-md transition-all duration-500 ${
              scroll ? "shadow-md" : ""
            }`}
          />

          <div>

            <h2
              className={`font-bold text-xl transition-colors duration-500 ${
                scroll ? "text-[#0F2E82]" : "text-white"
              }`}
            >
              TRANS-SECURE
            </h2>

            <p className="text-red-600 font-bold text-xs">
              LIMITED
            </p>

          </div>

        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-10">

          {["home", "about", "services", "projects", "contact"].map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={700}
              offset={-90}
              className={`cursor-pointer font-medium transition-all duration-300 ${
                scroll
                  ? "text-slate-800 hover:text-red-600"
                  : "text-white hover:text-red-400"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}

        </nav>

        {/* Desktop Button */}
        <button className="hidden lg:block bg-red-600 hover:bg-red-700 transition-all duration-300 px-7 py-3 rounded-full text-white font-semibold shadow-lg hover:shadow-xl">
          Request Quote
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden transition-colors duration-300 ${
            scroll ? "text-[#0F2E82]" : "text-white"
          }`}
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>
    </header>
  );
}

export default Navbar;