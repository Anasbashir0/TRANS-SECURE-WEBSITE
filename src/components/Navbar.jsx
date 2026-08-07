import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logos/logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const navbarSolid = !isHome || scroll;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        navbarSolid
          ? "bg-white shadow-lg py-2.5 sm:py-3"
          : "bg-transparent py-3 sm:py-5 lg:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center">

          {/* Logo */}

          <NavLink
            to="/"
            className="flex items-center gap-2 sm:gap-3"
          >
            <img
              src={logo}
              alt="TRANS-SECURE"
              className={`h-10 sm:h-12 lg:h-14 w-auto rounded-md transition-all duration-300 ${
                navbarSolid ? "shadow-md" : ""
              }`}
            />

            <div className="leading-none">
              <h2
                className={`text-base sm:text-lg lg:text-xl font-bold transition-colors duration-300 ${
                  navbarSolid
                    ? "text-[#0F2E82]"
                    : "text-white"
                }`}
              >
                TRANS-SECURE
              </h2>

              <p className="text-[9px] sm:text-[10px] lg:text-xs font-bold text-red-600 mt-0.5">
                LIMITED
              </p>
            </div>
          </NavLink>

          {/* Mobile Menu Button */}

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="lg:hidden ml-8 p-2 rounded-lg bg-white/90 text-[#0F2E82] shadow-md hover:bg-white transition-all duration-300"
          >
            {open ? <X size={27} /> : <Menu size={27} />}
          </button>

          {/* Desktop Navigation */}

          <nav className="hidden lg:flex items-center gap-8 xl:gap-10 ml-auto">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `font-medium transition-all duration-300 ${
                    isActive
                      ? "text-red-600"
                      : navbarSolid
                      ? "text-slate-800 hover:text-red-600"
                      : "text-white hover:text-red-400"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Button */}

          <NavLink
            to="/contact"
            className="hidden lg:block ml-10 bg-red-600 hover:bg-red-700 px-6 xl:px-7 py-3 rounded-full text-white font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            Request Quote
          </NavLink>

        </div>

        {/* Mobile Menu */}

        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            open
              ? "max-h-[500px] opacity-100 bg-white shadow-xl"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col px-1 sm:px-2 py-4 sm:py-6">

            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `py-3.5 sm:py-4 border-b border-gray-100 transition-colors ${
                    isActive
                      ? "text-red-600 font-semibold"
                      : "text-slate-700 hover:text-red-600"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <NavLink
              to="/contact"
              className="mt-5 bg-red-600 text-white text-center py-3.5 rounded-full font-semibold hover:bg-red-700 transition"
            >
              Request Quote
            </NavLink>

          </div>
        </div>

      </div>
    </header>
  );
}

export default Navbar;