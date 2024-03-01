import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/[...products]/[title]";
import Navbar from "./Components/Navbar";
import TestoPlus from "./pages/buy/TestoPlus";
import Cartilago from "./pages/buy/Cartilago";
import MacaNegra from "./pages/buy/MacaNegra";
import Confirm from "./pages/buy/Confirm";
import Psyllium from "./pages/buy/Psyllium";
import Combo1 from "./pages/buy/Combo1";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/Profilepage";
import Combo2 from "./pages/buy/Combo2";
import Combo3 from "./pages/buy/Combo3";
import Contact from "./pages/ContactPage";
import About from "./pages/AboutPage";
import AdminPage from "./pages/AdminPage";

export default function App() {
  const routes = [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/products/:title",
      element: <ProductPage />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/buy/testo-plus",
      element: <TestoPlus />,
    },
    {
      path: "/buy/cartilago",
      element: <Cartilago />,
    },
    {
      path: "/buy/maca-negra",
      element: <MacaNegra />,
    },
    {
      path: "/buy/psyllium",
      element: <Psyllium />,
    },
    {
      path: "/buy/Combo1",
      element: <Combo1 />,
    },
    {
      path: "/buy/Combo2",
      element: <Combo2 />,
    },
    {
      path: "/buy/Combo3",
      element: <Combo3 />,
    },
    {
      path: "/buy/confirm",
      element: <Confirm />,
    },
    {
      path: "/profile",
      element: <ProfilePage />,
    },
    {
      path: "/admin",
      element: <AdminPage />,
    },
  ];

  return (
    <Router>
      <Navbar />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      <div className="relative flex justify-end items-end">
        <div className="  absolute h-10 w-10 mb-10 mr-10   rounded-full bg-green-500 text-white flex items-center justify-center ">
          <a href="https://wa.link/g4wyjl" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-phone"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
            </svg>
          </a>
        </div>
      </div>
    </Router>
  );
}
