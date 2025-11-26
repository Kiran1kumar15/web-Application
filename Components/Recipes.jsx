import React, { useEffect, useState } from "react";
import { getRecipe } from "../appUtils";
import RecipeCard from "./RecipeCard";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await getRecipe("https://dummyjson.com/recipes");
      console.log(response.data.recipes)
      setRecipes(response.data.recipes);
      setFiltered(response.data.recipes);
    };
    fetchData();
  }, []);

  // ✅ Filtering Logic
  useEffect(() => {
    const results = recipes.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(results);
  }, [search, recipes]);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      
      {/* ✅ Header + Filter */}
      <div className="max-w-7xl mx-auto mb-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-3xl font-bold text-gray-800">
          Browse Recipes 🍽️
        </h1>

        {/* ✅ Search Input */}
        <input
          type="text"
          placeholder="Search recipes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-72 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      {/* ✅ Responsive Grid Layout */}
      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((item) => (
          <RecipeCard key={item.id} recipe={item} />
        ))}
      </div>

      {/* ✅ No Results */}
      {filtered.length === 0 && (
        <p className="text-center text-gray-600 mt-10 text-lg">
          No recipes found 😔
        </p>
      )}
    </div>
  );
};

export default Recipes;
