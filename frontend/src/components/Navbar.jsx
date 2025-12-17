import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ onLoginClick }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  const handleNavClick = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(id), 300);
    } else {
      scrollToSection(id);
    }
  };

  return (
    <nav className="bg-green-900 text-white px-6 py-4 sticky top-0 z-50">
      <div className="flex justify-between items-center">

        {/* Logo */}
        <h1
          onClick={() => handleNavClick("hero")}
          className="text-xl font-bold cursor-pointer"
        >
          🌱 PlantAI
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <button onClick={() => handleNavClick("hero")} className="hover:text-green-300">
            Home
          </button>

          <button onClick={() => handleNavClick("about")} className="hover:text-green-300">
            About
          </button>

          <button onClick={() => handleNavClick("whyuse")} className="hover:text-green-300">
            Why Use
          </button>

          <Link to="/plant-recognition" className="hover:text-green-300">
            Plant Recognition
          </Link>

          {/* 🔥 LOGIN BUTTON (NO ROUTE) */}
          <button
            onClick={onLoginClick}
            className="bg-green-600 px-4 py-1 rounded hover:bg-green-700"
          >
            Login
          </button>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 bg-green-800 rounded-lg p-4 space-y-4">
          <button onClick={() => handleNavClick("hero")} className="block w-full text-left">
            Home
          </button>

          <button onClick={() => handleNavClick("about")} className="block w-full text-left">
            About
          </button>

          <button onClick={() => handleNavClick("whyuse")} className="block w-full text-left">
            Why Use
          </button>

          <Link
            to="/plant-recognition"
            onClick={() => setOpen(false)}
            className="block"
          >
            Plant Recognition
          </Link>

          {/* 🔥 MOBILE LOGIN */}
          <button
            onClick={() => {
              onLoginClick();
              setOpen(false);
            }}
            className="block bg-green-600 px-3 py-1 rounded"
          >
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
