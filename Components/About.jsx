import React from "react";

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ✅ Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          About RecipeHub 🍽️
        </h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          Your destination to discover, explore, and enjoy mouth-watering recipes from across the globe.
        </p>
      </section>

      {/* ✅ Mission Section */}
      <section className="max-w-6xl mx-auto px-6 py-14 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Our Mission 🎯
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg">
          RecipeHub was created to make cooking simple, fun, and inspiring.
          Whether you're a beginner or a food enthusiast, we help you explore
          easy-to-follow recipes that bring flavor and joy to your table.
        </p>
      </section>

      {/* ✅ Features Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-10">
          Why RecipeHub? ⭐
        </h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          
          <div className="bg-white shadow-md p-6 rounded-xl text-center hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2">🍕 Easy Recipes</h3>
            <p className="text-gray-600 text-sm">
              Step-by-step recipes anyone can cook — simple, tasty, and quick.
            </p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-xl text-center hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2">🌍 Global Cuisine</h3>
            <p className="text-gray-600 text-sm">
              Discover flavors from around the world — Italian, Indian, Asian & more.
            </p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-xl text-center hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2">⭐ Ratings & Details</h3>
            <p className="text-gray-600 text-sm">
              Know difficulty, cook time, calories, and ratings before you try.
            </p>
          </div>

        </div>
      </section>

      {/* ✅ Footer Message */}
      <section className="text-center pb-16 px-6">
        <h2 className="text-xl font-bold text-gray-800 mb-3">
          Built With ❤️
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          This project was created with passion for learning, coding, and great food.
          We hope RecipeHub inspires you to try something new in your kitchen!
        </p>
      </section>

    </div>
  );
}
