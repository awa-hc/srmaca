import React from 'react';

function About() {

  return (
    <section className="bg-gradient-to-br from-[#526C63] via-[#185B69] to-[#7A6121] flex justify-center items-center min-h-screen overflow-hidden">

      <div className="flex flex-col md:flex-row text-center items-center justify-center h-full w-3/4 [&>h1]:py-3 px-5 py-24 mx-auto">

        <div className="md:w-1/2 md:mr-4">
          <h1 className="text-4xl font-bold text-white">Sobre Nosotros</h1>

          <div className="border-2 border-white p-2 rounded-md text-center w-full md:w-full mx-auto">
            <p className="text-white">
              {"Señor Maca es una marca..."} 
            </p>
          </div>

        </div>

        <div className="md:w-1/2 md:ml-4">
          <h1 className="text-4xl font-bold text-white">Estamos Ubicados en</h1>

          <iframe 
            src="https://www.google.com/maps/..."
            width="500"
            height="300"
            style={{border:0}}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <a
            target="_blank" 
            href="https://maps.app.goo.gl/YndWgLVjCvJNV2me6?g_st=iw"
            className="text-white underline">
            Avenida Cristo, Jaime Mendoza, Santa Cruz de la Sierra
          </a>

        </div>

      </div>

    </section>
  );
}

export default About;