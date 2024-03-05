import React, { useState } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

// Componente para las miniaturas
const Thumbnail = ({ image, onClick }) => (
	<div onClick={onClick} className="mb-2 mr-0 cursor-pointer">
		<img
			className="thumbnail w-80 h-32 object-cover object-center rounded ml-[0.5rem] mb-[0.3rem]"
			src={image.src}
			alt="thumbnail"
		/>
	</div>
);

// Imagenes de producto
const images = [
	{
		src: "/images/macanegra/maca1.png",
		active: true
	},
	{
		src: "/images/macanegra/maca2.png",
		active: false
	},
	{
		src: "/images/macanegra/maca3.png",
		active: false
	}
];

// Componente principal
const MacaNegra = () => {
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
    localStorage.setItem("MacaNegra", true);
    localStorage.setItem("MacaNegraPrice", totalPrice);
    localStorage.setItem("MacaNegraQuantity", quantity);
  };

  return (
    <div className="text-white bg-gradient-to-b from-[#7d6321] to-black flex items-center justify-center min-h-screen overflow-hidden">
      <div className="container px-5 py-16 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="title-font text-white tracking-widest text-3xl">
              Maca Negra
            </h2>
            <h1 className="text-gray-200 title-font font-medium mb-4">
              Regulador hormonal y energizante natural.
            </h1>
            <p className="leading-relaxed mb-4">
              Su formulación única proporciona apoyo para mejorar la vitalidad y el bienestar general. Incorporar Maca Negra en tu rutina diaria puede ayudar a promover un equilibrio hormonal óptimo y mejorar tu calidad de vida.
            </p>
            <div className="flex border-t border-gray-200 py-2">
              <span>Cápsulas :</span>
              <span className="ml-auto">100 cápsulas.</span>
            </div>
            <div className="flex border-b mb-3 border-gray-200 pb-2">
              <span>Dosis :</span>
              <span className="ml-auto">2 cápsulas diarias.</span>
            </div>
            <div className="flex align-center">
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
          <div className="lg:w-1/2 w-full flex flex-col lg:flex-row">
          <div className="relative flex justify-center">
            <img
              alt="maca-negra"
              className="h-auto w-auto object-fill object-center rounded"
              src={mainImage}
              onClick={() => {
                const index = images.indexOf(currentImage);
                Fancybox.show(images, {
                  Toolbar: {
                    display: {
                      right: ["close"],
                    },
                  },
                  animated: true,
                  backdropClick: "close",
                  Thumbs: {
                    showOnStart: false,
                  },
                  startIndex: index,
                });
              }}
            />
            </div>
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

export default MacaNegra;
