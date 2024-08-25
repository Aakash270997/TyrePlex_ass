import { createBrowserRouter, RouterProvider, Route, Outlet } from "react-router-dom";
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import HomePage from "./page/HomePage";
import Login from "./page/Login";

const Layout = () =>{
  return(
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

const router = createBrowserRouter([
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

function App() {
  return (
    <div className="App bg-[#f5f6f9]">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
