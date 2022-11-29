import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../Blog/Blog";
import AddProduct from "../Dashobard/AddProduct/AddProduct";
import AllUser from "../Dashobard/AllUser/AllUser";
import Dashboard from "../Dashobard/Dashboard";
import MyProducts from "../Dashobard/MyProduct/MyProducts";
import ErPage from "../ErrorPage/ErPage";
import Home from "../Home/Home/Home";
import Login from "../Home/Login/Login";
import Products from "../Home/Products/Products";


import Signup from "../Home/Signup/Signup";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/products/:id',
                element: <PrivateRoute> <Products></Products></PrivateRoute>,
                loader: ({ params }) => fetch(`https://happy-trade-server.vercel.app/products/${params.id}`)
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myProducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/allUser',
                element: <AllUser></AllUser>
            }
        ]
    },
    {
        path: '*',
        element: <ErPage></ErPage>
    }
])

export default router;