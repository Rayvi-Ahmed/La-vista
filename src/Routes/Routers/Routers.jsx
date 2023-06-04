import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../../Main/Main";
import Home from "../../Pages/Home/Home/Home";
import Menu from "../../Pages/Menu/Menu";
import Order from "../../Pages/Order/Order";
import Login from "../../Pages/Login/Login";
import SignUp from "../../SignUp/SignUp";
import Secrate from "../../Secrate/Secrate";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import Dashboard from "../../Main/DashBoard LayOut/Dashboard";
import MyCart from "../../Main/DashBoard LayOut/MyCart/MyCart";
import AllUsers from "../../Main/DashBoard LayOut/AllUsers/AllUsers";
import AddItems from "../../Main/DashBoard LayOut/Additems/AddItems";
import AdminRoute from "./AdminRoute/AdminRoute";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: '/order/:category',
                element: <Order></Order>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signUp',
                element: <SignUp></SignUp>
            },
            {
                path: 'secrate',
                element: <PrivateRoutes> <Secrate></Secrate></PrivateRoutes>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'mycart',
                element: <MyCart></MyCart>
            },
            {
                path: 'allusers',
                element: <AllUsers></AllUsers>
            },
            {
                path: 'additem',
                element: <AdminRoute><AddItems></AddItems></AdminRoute>
            }
        ]
    }
]);
