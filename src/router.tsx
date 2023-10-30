import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {CartPage, DetailsPage, HomePage, LoginPage, MainPage} from "./pages/exports.js";

export default function AppRouter() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainPage/>,
            children: [
                {
                    path: "/details",
                    element: <DetailsPage/>,
                },
                {
                    path: "/cart",
                    element: <CartPage/>,
                }, {
                    path: "/",
                    element: <HomePage/>,
                },
            ],
        },
        {
            path: '/login',
            element: <LoginPage/>
        }

    ], {
        basename: '/'
    });

    return <RouterProvider router={router}/>;
}
