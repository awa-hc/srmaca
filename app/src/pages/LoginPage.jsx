import { useState, useEffect } from "react";
import { GetCookie } from "../utils/Cookie";
export default function LoginPage() {
  useEffect(() => {
    if (GetCookie("Auth")) {
      window.location.href = "/";
    }
  });

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  function login(event) {
    event.preventDefault();
    fetch("https://srmacaback.fly.dev/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.token) {
          document.cookie = `Auth=${data.token}; max-age=3600; path=/`;
          window.location.href = "/";
        }
        if (data.error) {
          document.getElementById("response").innerText = data.error;
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center p-10 bg-black">
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={login}
      >
        <div
          id="response"
          className="text-red-500 font-bold text-lg py-2"
        ></div>
        <h1 className="text-white text-3xl mb-4">Iniciar sesión</h1>
        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="text-white mb-1">
            Correo Electrónico
          </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            name="email"
            className="p-2 border border-white rounded-md focus:outline-none focus:border-blue-300"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="password" className="text-white mb-1">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="p-2 border border-white rounded-md focus:outline-none focus:border-blue-300"
          />
        </div>
        <button
          type="submit"
          id="loginButton"
          className="bg-[#526C63] hover:bg-white hover:text-black text-white transition-colors duration-300 ease-in-out delay-75 font-bold py-2 px-4 rounded"
        >
          Iniciar sesión
        </button>
      </form>
      <a className="text-white" href="/auth/register">
        No tienes una cuenta? Registrate.
      </a>
    </div>
  );
}
