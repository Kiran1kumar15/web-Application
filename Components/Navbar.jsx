import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-blue-600">
        Recipe<span className="text-gray-800">Hub</span>
      </h1>

      {/* Menu Items */}
      <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
        <NavLink to="/" className="hover:text-blue-600 cursor-pointer">Home</NavLink>
        <NavLink to="/recipes" className="hover:text-blue-600 cursor-pointer">
          Recipes
        </NavLink>
        <NavLink to="/about" className="hover:text-blue-600 cursor-pointer">About</NavLink>
        <NavLink to="/contact" className="hover:text-blue-600 cursor-pointer">Contact</NavLink>
      </ul>

    </nav>
  );
}
