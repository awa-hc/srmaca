import React, { useState } from "react";
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
import ResetPasswordPage from "./pages/ResetPasswordPage";
import EmailVerificationPage from "./pages/EmailVerificationPage";

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
      path: "/reset-password",
      element: <ResetPasswordPage />
    },
    {
      path: "/verify",
      element: <EmailVerificationPage />
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

  const [showText, setShowText] = useState(false);

  return (
    <Router>
      <Navbar />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      <div className="fixed bottom-5 right-5 z-50">
        <div className="relative">
          <div className="h-10 w-10 rounded-full bg-green-500 text-white flex items-center justify-center">
            <a rel="noreferrer" href="https://wa.link/g4wyjl" target="_blank" onMouseEnter={() => setShowText(true)} onMouseLeave={() => setShowText(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-whatsapp" width="48" height="48" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
              <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"/>
            </svg>
            </a>
          </div>
          <div className={`absolute -left-2/3 transform -translate-x-1/2 bottom-full mb-2 text-base bg-white border-[0.2rem] border-green-500 rounded-lg shadow-lg px-3 py-1 ${showText ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition ease-in-out duration-200 h-auto w-auto`}>
            <h3 className="font-bold mb-1 text-black">¡Habla con nosotros!</h3>
            <p className="text-black">
              Contáctanos vía 
              <strong className="text-green-600"> WhatsApp </strong> 
              para asesoría y compra
            </p>
          </div>
        </div>
      </div>
    </Router>
  );
}
