import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

const EmailVerificationPage = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const verificationToken = urlParams.get('token');

    if (!verificationToken) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se encontró un token de verificación',
      }).then(() => {
        window.location.href = '/';
      });
      return;
    }

    async function verifyToken() {
      try {
        const response = await fetch('https://srmacaback.fly.dev/verify', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token: verificationToken }),
        });
        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error);
        }
        const data = await response.json();
        const verificationStatus = data.message;
        await new Promise(resolve => setTimeout(resolve, 500));
        Swal.fire({
          icon: 'success',
          title: '¡Correo electrónico verificado!',
          text: verificationStatus,
          showConfirmButton: true,
          allowOutsideClick: false,
        }).then(() => {
          window.location.href = '/';
        });
      } catch (error) {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.message,
          showConfirmButton: true,
          allowOutsideClick: false,
        }).then(() => {
          window.location.href = '/';
        });
      }
    }

    verifyToken();
  }, []);

  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#22623e] to-black">
      {/* Puedes agregar un mensaje de espera aquí si lo deseas */}
    </div>
  );
};

export default EmailVerificationPage;
