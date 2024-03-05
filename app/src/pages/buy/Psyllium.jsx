import React, { useState } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

// Componente para las miniaturas
const Thumbnail = ({ image, onClick }) => (
	<div onClick={onClick}>
		<img
			className="thumbnail"
			src={image.src}
			alt="thumbnail"
			style={{
				width: "7vw",
				height: "7vw",
				objectFit: "contain",
				objectPosition: "center",
				marginBottom: "0.3rem",
				marginLeft: "0.5rem",
				cursor: "pointer",
			}}
		/>
	</div>
);

// Imagenes de producto
const images = [
	{
		src: "/images/psyllium/psy1.png",
		active: true
	},
	{
		src: "/images/psyllium/psy2.png",
		active: false
	},
	{
		src: "/images/psyllium/psy3.png",
		active: false
	}
];

// Componente principal
const Psyllium = () => {
  const [mainImage, setMainImage] = useState(images[0].src);
  const [quantity, setQuantity] = useState(1);
  const pricePerItem = 210;

  // Estado para guardar el mainImage actual
	const currentImage = images.find(x => x.active);

	// Funcion para setear imagen
	function setActiveImage(image) {
		// Desactivar todas
		images.forEach(img => img.active = false); 
		// Activar la seleccionada
		image.active = true;
		// Setear como principal  
		setMainImage(image.src);
	}

  const handleBuyProduct = () => {
    const totalPrice = quantity * pricePerItem;

    localStorage.setItem("Psyllium", true);
    localStorage.setItem("PsylliumPrice", totalPrice);
    localStorage.setItem("PsylliumQuantity", quantity);
  };

  return (
    <div className="text-white bg-gradient-to-b from-[#b6b3b2] to-black flex items-center justify-center min-h-screen overflow-hidden">
      <div className="container px-5 py-16 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="title-font text-white tracking-widest text-3xl">Psyllium</h2>
            <h1 className="text-gray-200 title-font font-medium mb-4">
            Suplemento natural para el alivio del estreñimiento, rico en fibra y vitaminas.
            </h1>
            <p className="leading-relaxed mb-4">
            Una opción natural y rica en fibra y nutrientes que promueve la salud digestiva y alivia el estreñimiento, contribuyendo al bienestar intestinal.
            </p>
            <div className="flex border-t border-gray-200 py-2">
              <span>Cápsulas :</span>
              <span className="ml-auto">120 cápsulas.</span>
            </div>
            <div className="flex border-b mb-3 border-gray-200 pb-2">
              <span>Dosis :</span>
              <span className="ml-auto">2 cápsulas diarias.</span>
            </div>
            <div className="flex ">
              <span className="title-font flex-grow basis-0 font-medium text-2xl">
                Cantidad :
              </span>
              <input
                className="bg-transparent text-white border border-white rounded-md w-1/4 md:w-20 appearance-none text-center mb-2"
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                min="1"
              />
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl">
                Precio: {pricePerItem * quantity} Bs.
              </span>
              <a
                className="flex ml-auto text-white bg-[#294437] border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-[#294437] transition-colors ease-in-out duration-300 delay-100 rounded"
                onClick={handleBuyProduct}
                href="/buy/confirm"
              >
                Comprar
              </a>
            </div>
          </div>
          {/* Imagenes y Fancybox */}
          <div className="lg:w-1/2 w-full flex">
            <img
              alt="psyllium"
              className="h-[30vh] w-[30vh] lg:h-[80vh] lg:w-[45vh] object-cover object-center rounded mx-auto"
              src={mainImage}
              onClick={() => {
                const index = images.indexOf(currentImage);
                Fancybox.show(images, {
                  Toolbar: {
                    display: {
                      right: ["close"]
                    }
                  },
                  animated: true,
                  backdropClick: "close",
                  Thumbs:{
                    showOnStart: false
                  },
                  startIndex: index
              })}}
            />
            <div className="thumbnails lg:block md:block hidden">
            {images.map((image) => (
              <Thumbnail 
                image={image} 
                onClick={() => setActiveImage(image)}
              />
            ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Psyllium;
