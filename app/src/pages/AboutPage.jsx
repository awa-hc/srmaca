import React from 'react';

function About() {
return (
    <section className="bg-gradient-to-br from-[#526C63] via-[#185B69] to-[#7A6121] flex justify-center items-center min-h-screen overflow-hidden">
    	<div className="flex flex-col md:flex-row text-center items-center justify-center h-full [&>h1]:py-3 px-5 py-16 mx-auto" style={{width: '100vw'}}>
        <div className="md:w-1/2 md:mr-4">
        	<h1 className="text-4xl font-bold text-white">Sobre Nosotros</h1>
        	<div className="border-2 border-white p-2 rounded-md text-center w-full md:w-full mx-auto">
            <p className="text-white">
              {"Señor Maca es una marca boliviana dedicada a la producción y venta de vitaminas y suplementos. Nos enorgullece ofrecer productos 100% naturales y orgánicos, diseñados para potenciar y regular tus hormonas, mejorando así tu calidad de vida. Creemos firmemente en el poder de los productos naturales y en su capacidad para hacer una diferencia positiva en la vida de las personas. Estamos comprometidos con la excelencia y la satisfacción del cliente, y trabajamos incansablemente para garantizar que cada producto que vendemos cumpla con nuestros altos estándares."} 
            </p>
          </div>
        </div>
        <div className="md:w-1/2 md:ml-4">
          <h1 className="text-4xl font-bold text-white">Estamos Ubicados en</h1>
          <iframe
            title="Mapa de ubicación"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d643.9512801544053!2d-63.18368604457507!3d-17.77093131737336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e7ea9d44dbfd%3A0xd4b1a0d517017ac2!2sSe%C3%B1or%20Maca!5e0!3m2!1ses-419!2sbo!4v1708963744371!5m2!1ses-419!2sbo"
            width="100%"
            height="300"
            style={{border:0}}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a
            target="_blank"
            rel="noreferrer"
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