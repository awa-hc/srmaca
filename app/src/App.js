import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
export default function App() {
  const routes = [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ];

  // function register(event) {
  //   event.preventDefault(); // Prevenir la recarga de la página
  //   fetch("https://srmacaback.fly.dev/auth/signup", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       fullname: fullname,
  //       email: email,
  //       password: password,
  //       confirmpassword: confirmpassword,
  //       phone: phone,
  //       address: address,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       // Aquí podrías redirigir al usuario o manejar la respuesta de la API como necesites
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }

  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
}
