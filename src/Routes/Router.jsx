import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import DashBoard from "../Layout/DashBoard";
import MySelectedClass from "../Pages/Dashboard/MySelectedClass/MySelectedClass";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import PrivateRoute from "./PrivateRoute";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import InstructorRoute from "./InstructorRouter";
import AdminRoute from "./AdminRoute";
import ManageClass from "../Pages/Dashboard/ManageClass/ManageClass";
import MyAllClass from "../Pages/Dashboard/MyAllClass/MyAllClass";
import Payment from "../Pages/Dashboard/Payment/Payment";
import Error from "../Pages/ErrorPage/Error";
import EnrolledClass from "../Pages/Dashboard/EnrolledClass/EnrolledClass";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/instructors',
            element: <Instructors></Instructors>
        },
        {
            path: '/classes',
            element: <Classes></Classes>
        },
        {
            path: '/login',
            element: <Login></Login>,
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>,
        },
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
      children:[
        {
          path: 'myselectedclass',
          element: <MySelectedClass></MySelectedClass>
        },
        {
          path: 'payment/:id',
          element: <Payment></Payment>,
        },
        {
          path: 'enrolledclass',
          element: <EnrolledClass></EnrolledClass>,
        },
        {
          path: 'history',
          element: <PaymentHistory></PaymentHistory>,
        },
        {
          path: 'allusers',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path: 'manageclass',
          element: <AdminRoute><ManageClass></ManageClass></AdminRoute>
        },
        {
          path: 'additem',
          element: <InstructorRoute><AddItem></AddItem></InstructorRoute>
        },
        {
          path: 'myallclass',
          element: <InstructorRoute><MyAllClass></MyAllClass></InstructorRoute>
        },
      ]
    }
  ]);

  export default router;