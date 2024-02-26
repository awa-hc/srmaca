import React, { useState } from 'react';

function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const datos = {
      name,
      email,
      message
    };

    console.log(datos);

    fetch('https://srmacaback.fly.dev/email/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });

  }

  return (
    <div className="bg-black text-white">
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-col text-center w-full mb-5">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4">
            Contactanos
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Envianos un mensaje y te responderemos lo antes posible.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Form fields */}
          <div className='flex gap-4 text-center justify-center'>
          {/* Nombre */}
          <div className="mb-4" style={{width: '35vw'}}>
              <label 
                className="block text-white font-bold mb-2"
                htmlFor="name"
              >
                Nombre
              </label>
              <input 
                className="rounded w-full py-2 px-3 text-white focus:outline-none focus:shadow-outline bg-transparent"
                id="name"
                type="text"
                placeholder="Tu nombre"
                style={{
                  border: "0.1em solid white",
                  padding: "0.3rem 0.3rem",
                  borderRadius: "0.5rem",
                }}
              />
            </div>
            {/* Telefono */}
            <div className="mb-4" style={{width: '25vw'}}>
              <label
                className="block text-white font-bold mb-2"  
                htmlFor="phone"
              >
                Teléfono
              </label>
              <input
                className="rounded w-full py-2 px-3 text-white focus:outline-none focus:shadow-outline bg-transparent"
                id="phone"
                type="text" 
                placeholder="Tu teléfono"
                style={{
                  border: "0.1em solid white",
                  padding: "0.3rem 0.3rem",
                  borderRadius: "0.5rem",
                }}
              />
            </div>
            </div>
            {/* Correo Electronico */}
            <div className="flex text-center justify-center">
            <div className="mb-4" style={{width: '61.5vw'}}>
              <label
                className="block text-white font-bold mb-2"  
                htmlFor="Correo"
              >
                Correo Electrónico
              </label>
              <input
                className="rounded w-full py-2 px-3 text-white focus:outline-none focus:shadow-outline bg-transparent"
                id="email"
                type="text" 
                placeholder="Tu Correo Electrónico"
                style={{
                  border: "0.1em solid white",
                  padding: "0.3rem 0.3rem",
                  borderRadius: "0.5rem",
                }}
              />
            </div>
            </div>
            {/* Asunto */}
            <div className="flex text-center justify-center">
            <div className="mb-4" style={{width: '61.5vw'}}>
              <label
                className="block text-white font-bold mb-2"  
                htmlFor="Correo"
              >
                Asunto
              </label>
              <input
                className="rounded w-full py-2 px-3 text-white focus:outline-none focus:shadow-outline bg-transparent"
                id="subject"
                type="text" 
                placeholder="El Asunto"
                style={{
                  border: "0.1em solid white",
                  padding: "0.3rem 0.3rem",
                  borderRadius: "0.5rem",
                }}
              />
            </div>
            </div>
            {/* Mensaje */}
            <div className="flex text-center justify-center">
            <div className="mb-4" style={{width: '61.5vw'}}>
              <label
                className="block text-white font-bold mb-2"  
                htmlFor="Mensaje"
              >
                Mensaje
              </label>
              <textarea
                className="rounded w-full py-2 px-3 text-white focus:outline-none focus:shadow-outline bg-transparent min-h-16 max-h-52"
                id="message"
                type="text" 
                placeholder="Escribe aqui lo que quieres consultar"
                style={{
                  border: "0.1em solid white",
                  padding: "0.3rem 0.3rem",
                  borderRadius: "0.5rem",
                }}
              />
            </div>
            </div>

          <button 
            type="submit"
            className="flex mx-auto text-white bg-green-800 border-0 py-2 px-8 focus:outline-none hover:bg-gradient-to-br hover:bg-[#7A6121] transition-all delay-75 duration-300 ease-in-out rounded text-lg">
            Enviar
          </button>
        </form>

        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a className="text-[#185B69] hover:text-cyan-500" href="mailto:info@srmaca.com">info@srmaca.com</a>
          <a
            className="text-[#18B69] flex items-center justify-center"
            >Escribenos por Whatsapp al numero 
            <a className='text-[#18B69] hover:text-cyan-500' href="https://wa.link/g4wyjl" target="_blank">
              +59171385328</a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-whatsapp"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              ><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path
                d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path><path
                d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"
              ></path></svg>
          </a>

          <br />
          <span className="inline-flex">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                ></path>
              </svg>
            </a>
            <a className="ml-4 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                ></path>
              </svg>
            </a>
            <a className="ml-4 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path
                  d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                ></path>
              </svg>
            </a>
            <a className="ml-4 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                ></path>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </div>
    );
}

export default Contact;