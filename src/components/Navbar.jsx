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

    return () => window.removeEventListener("scroll", handleScroll);
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
          ? "bg-white shadow-lg py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">

        {/* Logo */}

        <NavLink
          to="/"
          className="flex items-center gap-3"
        >
          <img
            src={logo}
            alt="TRANS-SECURE"
            className={`h-14 rounded-md transition-all duration-300 ${
              navbarSolid ? "shadow-md" : ""
            }`}
          />

          <div>
            <h2
              className={`text-xl font-bold transition-colors duration-300 ${
                navbarSolid
                  ? "text-[#0F2E82]"
                  : "text-white"
              }`}
            >
              TRANS-SECURE
            </h2>

            <p className="text-xs font-bold text-red-600">
              LIMITED
            </p>
          </div>
        </NavLink>

        {/* Desktop Navigation */}

        <nav className="hidden lg:flex items-center gap-10">

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
          className="hidden lg:block bg-red-600 hover:bg-red-700 px-7 py-3 rounded-full text-white font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
        >
          Request Quote
        </NavLink>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden transition-colors duration-300 ${
            navbarSolid
              ? "text-[#0F2E82]"
              : "text-white"
          }`}
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Mobile Menu */}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          open
            ? "max-h-96 bg-white shadow-xl"
            : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-8 py-6">

          {links.map((link) => (

            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `py-4 border-b border-gray-100 transition-colors ${
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
            className="mt-6 bg-red-600 text-white text-center py-3 rounded-full font-semibold hover:bg-red-700 transition"
          >
            Request Quote
          </NavLink>

        </div>
      </div>
    </header>
  );
}

export default Navbar;