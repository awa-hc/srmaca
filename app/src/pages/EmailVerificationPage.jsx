import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

const EmailVerificationPage = () => {
  useEffect(() => {
    // Obtener el token de verificación de la URL
    const params = new URLSearchParams(window.location.search);
    const verificationToken = params.get('token');

    // Enviar solicitud al backend para verificar el token de verificación
    fetch(`https://srmacaback.fly.dev/verify?token=${verificationToken}`)
      .then((response) => {
        if (response.ok) {
          // Mostrar mensaje de éxito
          Swal.fire({
            icon: 'success',
            title: '¡Correo electrónico verificado!',
            text: 'Tu correo electrónico ha sido verificado correctamente.',
          }).then(() => {
            // Redirigir al usuario a la página de inicio de sesión
            window.location.href = '/login';
          });
        } else {
          // Mostrar mensaje de error
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Hubo un error al verificar tu correo electrónico. Por favor, inténtalo de nuevo más tarde.',
          }).then(() => {
            // Redirigir al usuario a la página de inicio
            window.location.href = '/';
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
        }).then(() => {
          // Redirigir al usuario a la página de inicio
          window.location.href = '/';
        });
      });
  }, []);

  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#6c7134] to-black">
      {/* Puedes agregar un mensaje de espera aquí si lo deseas */}
    </div>
  );
};

export default EmailVerificationPage;
