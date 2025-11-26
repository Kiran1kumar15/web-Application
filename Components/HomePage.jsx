import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-[#181D26] to-[#141518] overflow-hidden text-white font-sans">
      {/* Blurry Background Shapes */}
      <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-pink-500 opacity-35 rounded-full blur-3xl z-0 animate-pulse-slow" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-yellow-400 opacity-25 rounded-full blur-2xl z-0 animate-pulse-slower" />

      {/* Floating Food Images with Animations */}
      <img
        src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
        className="w-28 absolute top-10 right-16 z-10 animate-custom-float"
        alt=""
        style={{ filter: "drop-shadow(0 8px 16px #ffb3c6)" }}
      />
      <img
        src="https://cdn-icons-png.flaticon.com/512/590/590836.png"
        className="w-24 absolute bottom-24 left-12 z-10 animate-spin-slow"
        alt=""
        style={{ filter: "drop-shadow(0 8px 24px #fff1b6)" }}
      />
      <img
        src="https://cdn-icons-png.flaticon.com/512/135/135620.png"
        className="w-20 absolute top-1/3 left-0 z-10 animate-float-x"
        alt=""
        style={{ filter: "drop-shadow(0 4px 12px #d3f96f)" }}
      />

      {/* Glassmorphism Center Content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-6 z-20 relative">
        <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-12 shadow-2xl border-white/10 border max-w-2xl text-center">
          <h1
            className="
  text-5xl md:text-6xl font-extrabold tracking-tight
  bg-gradient-to-r from-pink-400 via-yellow-200 to-orange-400
  bg-clip-text text-transparent
  head-glow
"
          >
            Food That Inspires{" "}
            <span role="img" aria-label="plate">
              🍽️
            </span>
          </h1>

          <p className="text-gray-200 mt-6 max-w-lg mx-auto text-lg drop-shadow">
            Explore{" "}
            <span className="text-pink-400 font-bold">mouth-watering</span>{" "}
            recipes crafted for{" "}
            <span className="text-yellow-300 font-bold">flavor</span>,{" "}
            <span className="text-orange-400 font-bold">creativity</span>, and
            unforgettable taste.
          </p>
          <button
            onClick={() => navigate("/recipes")}
            className="mt-8 px-10 py-3 rounded-full bg-gradient-to-r from-pink-500 via-yellow-400 to-orange-400 font-bold text-black text-xl shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 border-4 border-white/20 cursor-pointer"
            style={{
              boxShadow: "0 4px 24px 0 #ff9aa2aa, 0 2px 8px #ffe9a7cc",
            }}
          >
            Explore Recipes →
          </button>
        </div>
      </div>

      {/* Neon Bottom Highlight */}
      <div className="w-full bg-gradient-to-r from-pink-500 to-yellow-400 text-black py-8 text-center font-bold text-3xl shadow-2xl tracking-wider animate-fade-slide-up">
        Donuts. Pizza. Desserts. More.{" "}
        <span role="img" aria-label="fire">
          🔥
        </span>
      </div>
    </div>
  );
}
