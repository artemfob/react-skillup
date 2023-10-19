import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage, DetailsPage, CartPage, HomePage, LoginPage } from "./pages/exports.js";

export default function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
      children:[
        {
          path: "/details",
          element: <DetailsPage />,
        },
        {
          path: "/cart",
          element: <CartPage />,
        },{
          path: "/home",
          element: <HomePage />,
        },
      ],
    },
    {path:'/login',
    element: <LoginPage/>}

  ], {
    basename:'/'
  });

  return <RouterProvider router={router} />;
}
