import { useState, useEffect } from "react";
import { GetCookie } from "../utils/Cookie";
import Swal from "sweetalert2";

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
        if (data.token) {
          if (email === "srmaca@srmaca.com") {
            localStorage.setItem("admin", "true");
            document.cookie = `Admin=${data.token}; max-age=3600; path=/`;
          }

          localStorage.setItem("user", data.token);
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

  async function forgotPassword() {
	const { value: email } = await Swal.fire({
	  title: "Restablecer contraseña",
	  input: "email",
	  inputPlaceholder: "Ingresa tu correo electrónico",
	  showCancelButton: true,
	  confirmButtonText: 'Confirmar',
	  cancelButtonText: 'Cancelar',
	  customClass: {
		title: 'text-white',
		confirmButton: 'swal2-confirm',
		cancelButton: 'swal2-cancel'
	  },
	  backdrop: 'rgba(80, 80, 80, 0.73)',
	  iconColor: 'white',
	  background: 'rgb(69, 114, 121)',
	  confirmButtonColor: '#4caf50',
	  cancelButtonColor: '#f44336'
	});
  
	if (email) {
	  // Aquí puedes realizar alguna acción con el correo electrónico ingresado
	  // Por ejemplo, enviar una solicitud al backend para restablecer la contraseña
	  fetch("URL_BACKEND", {
		method: "POST",
		headers: {
		  "Content-Type": "application/json",
		},
		body: JSON.stringify({ email }),
	  })
	  .then((response) => response.json())
	  .then((data) => {
		if (data.message) {
		  Swal.fire({
			icon: "success",
			title: "¡Correo enviado!",
			text: "Se ha enviado un correo electrónico para restablecer tu contraseña.",
		  }).then(() => {
			window.location.reload();
		  });
		} else if (data.error) {
		  Swal.fire({
			icon: "error",
			title: "Error",
			text: data.error,
		  });
		} else {
		  Swal.fire({
			icon: "error",
			title: "Error",
			text: "Ha ocurrido un error.",
		  });
		}
	  })
	  .catch((error) => {
		console.error(error);
		Swal.fire({
		  icon: "error",
		  title: "Error",
		  text: "Ha ocurrido un error.",
		});
	  });
	}
  }
  

  return (
    <div
      className="w-screen min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#6c7134] to-black">
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
    <div className="flex flex-col items-center">
		<div className="flex justify-between pt-2 gap-2 items-center">
			<p className="text-white">¿No tienes una cuenta?</p>
			<a
			href="/register"
			className="text-white border-white border-solid border-[0.1rem] p-1 rounded"
			>
			Regístrate
			</a>
		</div>
		<div className="mt-1">
			<p className="text-white">
			¿Olvidaste tu contraseña?
			<span
				className="underline cursor-pointer ml-1"
				onClick={forgotPassword}
			>
				Haz clic aquí
			</span>
			</p>
		</div>
		</div>
    </div>
	);
}