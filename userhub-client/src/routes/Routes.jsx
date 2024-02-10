import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import UserDetails from "../components/UserDetails";
import Error from "../pages/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://userhub-server.vercel.app/users')
            },   
            {
                path: 'user/details/:id', 
                element: <UserDetails></UserDetails>,
                loader: () => fetch('https://userhub-server.vercel.app/users')
            },
        ]
    },
])

export default router;
