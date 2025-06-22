import Products from "./components/products.jsx";
import ErrorPage from "./routes/error-page";
import HomePage from "./routes/home-page.jsx";
import Index from "./routes/index.jsx";
import Root from "./routes/root";
import ShopPage, { loader as categoryLoader } from "./routes/shop-page.jsx";
import ShoppingCart from "./routes/shopping-cart";

const routes = [
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
            path: "products",
            element: <ShopPage />,
            loader: categoryLoader,
            children: [
              {
                index: true,
                element: <Products />,
              },
              {
                path: "category/:category",
                element: <Products />,
              },
            ],
          },
          {
            path: "shopping-cart",
            element: <ShoppingCart />,
          },
        ],
      },
    ],
  },
];

export default routes;
