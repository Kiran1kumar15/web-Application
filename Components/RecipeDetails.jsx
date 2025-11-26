import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipe } from "../appUtils";

export default function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const response = await getRecipe(`https://dummyjson.com/recipes/${id}`);
      setRecipe(response.data);
    };
    fetchRecipe();
  }, [id]);

  if (!recipe) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      
      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        {recipe.name}
      </h1>

      {/* Image */}
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-80 object-cover rounded-xl shadow-md mb-8"
      />

      {/* Info Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-10">
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <p className="font-semibold">🍽 Cuisine</p>
          <p>{recipe.cuisine}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <p className="font-semibold">⚡ Difficulty</p>
          <p>{recipe.difficulty}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <p className="font-semibold">⏱ Prep</p>
          <p>{recipe.prepTimeMinutes} min</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <p className="font-semibold">🔥 Cook</p>
          <p>{recipe.cookTimeMinutes} min</p>
        </div>
      </div>

      {/* Ingredients */}
      <h2 className="text-2xl font-bold mb-3">🧂 Ingredients</h2>
      <ul className="list-disc ml-6 mb-8 text-gray-700 leading-relaxed">
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Instructions */}
      <h2 className="text-2xl font-bold mb-3">👨‍🍳 Instructions</h2>
      <ol className="list-decimal ml-6 text-gray-700 leading-relaxed space-y-2 mb-10">
        {recipe.instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>

      {/* Extra Info */}
      <div className="text-gray-700 text-sm space-y-2">
        <p><strong>Servings:</strong> {recipe.servings}</p>
        <p><strong>Calories per Serving:</strong> {recipe.caloriesPerServing}</p>
        <p><strong>Rating:</strong> ⭐ {recipe.rating} ({recipe.reviewCount} reviews)</p>
      </div>
    </div>
  );
}
