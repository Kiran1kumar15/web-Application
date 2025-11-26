import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { getRecipe } from "./appUtils";
import axios from "axios";
import "../src/index.css";
import RecipeCard from "./Components/RecipeCard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Recipes from "./Components/Recipes";
import Root from "./Components/Root";
import HomePage from "./Components/HomePage";
import About from "./Components/About";
import Contact from "./Components/Contact";
import RecipeDetails from "./Components/RecipeDetails";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        { path: "/recipes", element: <Recipes /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        {path:'/recipes/:id' , element:<RecipeDetails />}
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
