import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home/Home";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import MainLayOut from "../../LayOut/MainLayOut/MainLayOut";
import AllToys from "../../Pages/Home/AllToys/AllToys";
import MyToys from "../../Pages/Home/MyToys/MyToys";
import AddToy from "../../Pages/Home/AddToy/AddToy";
import Blogs from "../../Pages/Home/Blogs/Blogs";
import Contact from "../../Pages/Home/Contact/Contact";
import Login from "../../Pages/Auth/Login/Login";
import SignUp from "../../Pages/Auth/SignUp/SignUp";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/allToy',
          element:<AllToys></AllToys>
        },
        {
          path:'/myToy',
          element:<PrivetRoute><MyToys></MyToys></PrivetRoute> 
        },
        {
          path:'/addToy',
          element:<PrivetRoute><AddToy></AddToy></PrivetRoute> 
        },
        {
          path:'//blogs',
          element:<Blogs></Blogs>
        },
        {
          path:'/contact',
          element:<Contact></Contact>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'//signUp',
          element:<SignUp></SignUp>
        }
    ]
  },
]);
export default router;
