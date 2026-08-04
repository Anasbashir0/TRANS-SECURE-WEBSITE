import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, ArrowRight } from "lucide-react";
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

  const menuItems = [
    "home",
    "about",
    "services",
    "projects",
    "contact",
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scroll
            ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-200 py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8">

          {/* Logo */}

          <div className="flex items-center gap-3 cursor-pointer">

            <img
              src={logo}
              alt="TRANS-SECURE Logo"
              className={`transition-all duration-500 ${
                scroll
                  ? "h-14"
                  : "h-16"
              }`}
            />

            <div>

              <h2
                className={`font-bold text-xl transition duration-500 ${
                  scroll
                    ? "text-[#0F2E82]"
                    : "text-white"
                }`}
              >
                TRANS-SECURE
              </h2>

              <p className="text-red-600 font-bold text-xs tracking-widest">
                LIMITED
              </p>

            </div>

          </div>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-10">

            {menuItems.map((item) => (

              <Link
                key={item}
                to={item}
                smooth
                spy
                offset={-90}
                duration={600}
                activeClass="text-red-600 border-b-2 border-red-600"
                className={`cursor-pointer pb-1 border-b-2 border-transparent transition-all duration-300 ${
                  scroll
                    ? "text-slate-800 hover:text-red-600"
                    : "text-white hover:text-red-400"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>

            ))}

          </nav>

          {/* Desktop CTA */}

          <button className="hidden lg:flex items-center gap-2 bg-red-600 hover:bg-red-700 transition-all duration-300 px-7 py-3 rounded-full text-white font-semibold shadow-xl hover:scale-105">

            Get a Quote

            <ArrowRight size={18} />

          </button>

          {/* Mobile Button */}

          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden ${
              scroll
                ? "text-[#0F2E82]"
                : "text-white"
            }`}
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>
      </header>

      {/* Mobile Menu */}

      <div
        className={`fixed top-0 right-0 h-screen w-72 bg-white shadow-2xl z-50 transform transition-transform duration-500 lg:hidden ${
          open
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >

        <div className="flex justify-between items-center p-6 border-b">

          <h2 className="font-bold text-[#0F2E82]">
            MENU
          </h2>

          <button onClick={() => setOpen(false)}>
            <X />
          </button>

        </div>

        <div className="flex flex-col mt-8">

          {menuItems.map((item) => (

            <Link
              key={item}
              to={item}
              smooth
              spy
              duration={600}
              offset={-90}
              onClick={() => setOpen(false)}
              className="px-8 py-5 border-b hover:bg-gray-100 cursor-pointer font-medium text-slate-700"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>

          ))}

        </div>

        <div className="p-8">

          <button className="w-full bg-red-600 text-white py-4 rounded-full font-semibold hover:bg-red-700 transition">

            Get a Quote

          </button>

        </div>

      </div>

      {/* Mobile Overlay */}

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}
    </>
  );
}

export default Navbar;