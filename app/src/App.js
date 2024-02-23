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
      path: "/buy/confirm",
      element: <Confirm />,
    },
    {
      path: "/profile",
      element: <ProfilePage />,
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
