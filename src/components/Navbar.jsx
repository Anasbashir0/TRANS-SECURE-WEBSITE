import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logos/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0F2E82]/95 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Trans Secure"
            className="h-12 w-auto"
          />

          <div>
            <h2 className="text-white font-bold text-xl">
              TRANS-SECURE
            </h2>

            <p className="text-red-400 text-xs tracking-widest">
              LIMITED
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex gap-10 text-white font-medium">

          <a href="#">Home</a>

          <a href="#">About</a>

          <a href="#">Services</a>

          <a href="#">Projects</a>

          <a href="#">Subsidiaries</a>

          <a href="#">Contact</a>

        </nav>

        {/* Button */}
        <button className="hidden lg:block bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full text-white font-semibold transition">
          Request Quote
        </button>

        {/* Mobile Menu */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-[#0F2E82] text-white px-8 py-6 space-y-5">

          <a className="block">Home</a>

          <a className="block">About</a>

          <a className="block">Services</a>

          <a className="block">Projects</a>

          <a className="block">Subsidiaries</a>

          <a className="block">Contact</a>

        </div>
      )}
    </header>
  );
}

export default Navbar;