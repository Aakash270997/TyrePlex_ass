import { createBrowserRouter, RouterProvider, Route, Outlet } from "react-router-dom";
import Footer from './component/Footer';
import Header from './component/Header';
import HomePage from "./page/HomePage";
import Login from "./page/Login";

const Routing = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <HomePage />
            }
        ]
    },
    {
        path: "/login",
        element: <Login />
    }
])

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout