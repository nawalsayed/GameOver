import React from "react";
import Pixel from "./Component/Pixel/Pixel";
import Mmorpg from "./Component/Mmorpg/Mmorpg";
import Sailing from "./Component/Sailing/Sailing";
import Shooter from "./Component/Shooter/Shooter";
import Permadeath from "./Component/Permadeath/Permadeath";
import Superhero from "./Component/Superhero/Superhero";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Component/Layout/Layout";

const routing = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Mmorpg /> },
      { path: "Shooter", element: <Shooter /> },
      { path: "Sailing", element: <Sailing /> },
      { path: "Superhero", element: <Superhero /> },
      { path: "Permadeath", element: <Permadeath /> },
      { path: "Pixel", element: <Pixel /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routing}></RouterProvider>
    </>
  );
}

export default App;
