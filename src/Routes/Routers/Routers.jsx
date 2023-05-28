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
]);
