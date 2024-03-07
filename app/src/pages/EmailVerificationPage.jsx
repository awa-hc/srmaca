import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const EmailVerificationPage = () => {
  const [didClickButton, setDidClickButton] = useState(false);

  useEffect(() => {
    // Obtener el token de verificación de la URL
    const params = new URLSearchParams(window.location.search);
    const verificationToken = params.get('token');

    // Enviar solicitud al backend para verificar el token de verificación
fetch('https://srmacaback.fly.dev/verify', {
  method: 'POST', // Establecer el método como POST
  headers: {
    'Content-Type': 'application/json', // Establecer el tipo de contenido como JSON
  },
  body: JSON.stringify({ token: verificationToken }), // Enviar el token como JSON en el cuerpo de la solicitud
})
  .then((response) => {
    if (response.ok) {
      // Obtener el mensaje del cuerpo de la respuesta
      return response.json().then((data) => {
        // Mostrar mensaje de éxito con el mensaje del backend
        Swal.fire({
          icon: 'success',
          title: '¡Correo electrónico verificado!',
          text: data.message, // Utilizar el mensaje del backend
          showConfirmButton: true,
          allowOutsideClick: false,
        }).then(() => {
          setDidClickButton(true);
        });
      });
    } else {
      // Obtener el mensaje del cuerpo de la respuesta de error
      return response.json().then((data) => {
        // Mostrar mensaje de error con el mensaje del backend
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: data.error,
          showConfirmButton: true,
          allowOutsideClick: false,
        }).then(() => {
          setDidClickButton(true);
        });
      });
    }
  })
  .catch((error) => {
    console.error('Error:', error);
    // Mostrar mensaje de error genérico
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Hubo un error al verificar tu correo electrónico. Por favor, inténtalo de nuevo más tarde.',
      showConfirmButton: true,
      allowOutsideClick: false,
    }).then(() => {
      setDidClickButton(true);
    });
  })}, []);

  useEffect(() => {
    if (didClickButton) {
      // Redirigir al usuario a la página de inicio de sesión
      setTimeout(() => {
        window.location.href = '/login';
      }, 2000); // Redirigir después de 2 segundos
    }
  }, [didClickButton]);

  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#22623e] to-black">
      {/* Puedes agregar un mensaje de espera aquí si lo deseas */}
    </div>
  );
};

export default EmailVerificationPage;
