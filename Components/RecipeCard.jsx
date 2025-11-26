import React from "react";
import { useNavigate } from "react-router-dom";

export default function RecipeCard({ recipe }) {
    const navigate = useNavigate();
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-2xl p-4 border hover:shadow-xl transition">
      {/* Image */}
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-48 object-cover rounded-xl"
      />

      {/* Title */}
      <h2 className="text-xl font-bold mt-4">{recipe.name}</h2>

      {/* Cuisine + Difficulty */}
      <div className="flex justify-between text-sm text-gray-600 mt-1">
        <span>🍽 Cuisine: {recipe.cuisine}</span>
        <span>⚡ {recipe.difficulty}</span>
      </div>

      {/* Rating */}
      <div className="mt-2 text-yellow-500 font-semibold">
        ⭐ {recipe.rating} ({recipe.reviewCount} reviews)
      </div>

      {/* Tags */}
      <div className="flex gap-2 mt-3 flex-wrap">
        {recipe.tags.map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Time & Servings */}
      <div className="mt-4 grid grid-cols-3 text-center text-sm">
        <div>
          ⏱️ <strong>{recipe.prepTimeMinutes}</strong>
          <p className="text-xs text-gray-500">Prep</p>
        </div>
        <div>
          🔥 <strong>{recipe.cookTimeMinutes}</strong>
          <p className="text-xs text-gray-500">Cook</p>
        </div>
        <div>
          🍽️ <strong>{recipe.servings}</strong>
          <p className="text-xs text-gray-500">Servings</p>
        </div>
      </div>

      {/* Button */}
      <button
        onClick={() => navigate(`/recipes/${recipe.id}`)}
        className="w-full bg-blue-600 text-white mt-5 py-2 rounded-xl hover:bg-blue-700 transition cursor-pointer   "
      >
        View Recipe
      </button>
    </div>
  );
}
