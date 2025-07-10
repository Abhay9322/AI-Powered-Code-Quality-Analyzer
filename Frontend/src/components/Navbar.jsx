// components/Navbar.jsx
import React from "react";
import { FaBars, FaSun, FaMoon } from "react-icons/fa";

const Navbar = ({ setSidebarOpen, darkMode, setDarkMode }) => {
  return (
    <nav className={`flex justify-between items-center px-6 py-4 fixed top-0 w-full z-50 transition duration-300 
      ${darkMode ? "bg-[#0f172a]/80 text-white" : "bg-white/60 text-gray-900"} backdrop-blur-md shadow-md`}>
      <button onClick={() => setSidebarOpen(true)} className="text-2xl hover:text-cyan-400 transition">
        <FaBars />
      </button>
      <h1 className="text-2xl sm:text-3xl font-bold tracking-wide font-mono text-cyan-400 drop-shadow-glow">
        ⚡ AI Code Analyzer
      </h1>
      <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 hover:from-cyan-500 hover:to-blue-500 transition text-white">
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </nav>
  );
};

export default Navbar;
