import React from "react";
import { Link } from "react-router-dom";
import cityImage from "../assets/cidade011.jpg"; // 🏙️ imagem de fundo da cidade
import navLogo from "../assets/logo.png"; // 🔥 tua logo da navbar

export function Navbar() {
  return (
    <nav
      className="relative shadow-[0_0_25px_rgba(255,0,0,0.5)] sticky top-0 z-50 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${cityImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center backdrop-blur-sm">
        {/* Logo + Nome */}
        <div className="flex items-center gap-3">
          <img
            src={navLogo}
            alt="Área 011 Logo"
            className="w-10 h-10 rounded-lg object-cover"
          />
          <h1 className="text-2xl font-extrabold text-white tracking-wide drop-shadow-[0_0_8px_rgba(255,0,0,0.6)]">
            Área 011 VIP
          </h1>
        </div>

        {/* Links */}
        <div className="flex items-center space-x-6">
          <Link
            to="/"
            className="text-white font-semibold hover:text-red-400 transition duration-200"
          >
            Home
          </Link>
          <Link
            to="/checkout"
            className="text-white font-semibold hover:text-red-400 transition duration-200"
          >
            Checkout
          </Link>

          {/* Link Discord */}
          <a
            href="https://discord.gg/xgxpbSes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-semibold hover:text-blue-400 transition duration-200 flex items-center gap-1"
          >
            Discord
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/discord.svg"
              alt="Discord"
              className="w-5 h-5 filter brightness-0 invert sepia saturate-100 hue-rotate-180"
            />
          </a>
        </div>
      </div>

      {/* Linha vermelha inferior */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-red-600 via-red-400 to-red-600"></div>
    </nav>
  );
}
