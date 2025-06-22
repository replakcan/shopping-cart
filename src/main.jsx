import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShopPage from "./routes/shop-page.jsx";
import Root from "./routes/root.jsx";
import ErrorPage from "./routes/error-page.jsx";
import Index from "./routes/index.jsx";
import ShoppingCart from "./routes/shopping-cart.jsx";
import HomePage from "./routes/home-page.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: "home",
            element: <HomePage />,
          },
          {
            path: "shop",
            element: <ShopPage />,
          },
          {
            path: "shopping-cart",
            element: <ShoppingCart />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
