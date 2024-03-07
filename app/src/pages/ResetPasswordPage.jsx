import { useState } from "react";
import Swal from "sweetalert2";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function resetPassword(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Las contraseñas no coinciden',
        confirmButtonText: 'Cerrar',
        confirmButtonColor: 'rgb(105, 110, 49)'
      });
      return;
    }

    const requestBody = {
      password: password,
      confirm_password: confirmPassword
    };

    try {
      const response = await fetch("https://srmacaback.fly.dev/auth/resetPassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }

      Swal.fire({
        icon: 'success',
        title: '¡Contraseña restablecida!',
        text: 'Tu contraseña ha sido restablecida correctamente',
        confirmButtonText: 'OK'
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/login";
        }
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: "Hubo error en el servicio, intente de nuevo por favor"
      });
    }
  }

  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#6c7134] to-black">
      <form className="flex flex-col items-center justify-center" onSubmit={resetPassword}>
        <h1 className="text-white text-3xl mb-4">Restablecer Contraseña</h1>
        <div className="flex flex-col mb-4">
          <label htmlFor="password" className="text-white mb-1">
            Nueva Contraseña
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
        <div className="flex flex-col mb-4">
          <label htmlFor="confirmPassword" className="text-white mb-1">
            Confirmar Contraseña
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            className="p-2 border border-white rounded-md focus:outline-none focus:border-blue-300"
          />
        </div>
        <button
          type="submit"
          className="bg-[#526C63] hover:bg-white hover:text-black text-white transition-colors duration-300 ease-in-out delay-75 font-bold py-2 px-4 rounded"
        >
          Restablecer Contraseña
        </button>
      </form>
    </div>
  );
}
