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
    </Router>
  );
}
