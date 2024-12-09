import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import PrivateRoutes from "./PrivateRoutes";
import About from "../Pages/About/About";
import Review from "../Pages/Review/Review";
import Dashboardlayout from "../Layout/Dashboardlayout";
import Myappointment from "../Pages/Myappointment/Myappointment";
import AddDoctor from "../Pages/AddDoctor/AddDoctor";
import ManageDoctors from "../Pages/ManageDoctors/ManageDoctors";
import AllUsers from "../Pages/AllUsers/AllUsers";
import Payment from "../Pages/Payment/Payment";
import AdminPrivateRoutes from "./AdminPrivateRoutes";
import BookingDetails from "../Pages/BookingDetails(Admin_see_Only)/BookingDetails";
import BookingPaymentDetails from "../Pages/BookingDetails(Admin_see_Only)/BookingPaymentDetails";



export const routes = createBrowserRouter([
    {
        path: "/",
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
                path: 'registration',
                element: <Registration></Registration>
            },
            {
                path: '/appointment',
                element: <PrivateRoutes><Appointment></Appointment></PrivateRoutes>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/reviews',
                element: <Review></Review>
            },
            {
                path: "/myappointment",
                element: <Myappointment></Myappointment>

            },
            {
                path: 'payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://doctors-portal-server-bay-nine.vercel.app/bookings/${params.id}`)

            },
        ]

    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><Dashboardlayout></Dashboardlayout></PrivateRoutes>,
        children: [


            {
                path: '/dashboard',
                element: <AdminPrivateRoutes> <AllUsers></AllUsers></AdminPrivateRoutes>
            },
            {
                path: '/dashboard/adddoctor',
                element: <AdminPrivateRoutes><AddDoctor></AddDoctor></AdminPrivateRoutes>
            },
            {
                path: '/dashboard/managedoctors',
                element: <AdminPrivateRoutes><ManageDoctors></ManageDoctors></AdminPrivateRoutes>
            },
            {
                path: '/dashboard/bookings',
                element: <AdminPrivateRoutes><BookingDetails></BookingDetails></AdminPrivateRoutes>
            },
            {
                path: '/dashboard/payments',
                element: <AdminPrivateRoutes><BookingPaymentDetails></BookingPaymentDetails></AdminPrivateRoutes>
            },


        ]
    }
])