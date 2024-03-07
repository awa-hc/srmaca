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
		src: "/images/combo3/combo3.png",
		active: true
	}
];

// Componente principal
const Combo3 = () => {
    const [mainImage, setMainImage] = useState(images[0].src);
    const [quantity, setQuantity] = useState(1);
    const pricePerItem = 310;

    // Actualiza el precio total en función de la cantidad
    const totalPrice = pricePerItem * quantity;

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

    // Función para manejar la compra (simplificada para el ejemplo)
    const buyCombo3 = () => {
        localStorage.setItem("Combo3", true);
        localStorage.setItem("Combo3Price", totalPrice);
        localStorage.setItem("Combo3Quantity", quantity);
    };
    
    return (
        <div
        class="text-white bg-gradient-to-b from-[#081742] to-[#7A6121] body-font min-h-screen overflow-hidden"
      >
        <div class="container px-5 py-16 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <div
              class="lg:w-1/2 w-full lg:pr-10 lg:py-6 flex flex-col justify-center mb-6 lg:mb-0">
              <h2 class="title-font text-white tracking-widest text-3xl">
                Combo 3!!
              </h2>
              <h1 class="text-gray-200 title-font font-medium mb-2">
                Testo Plus, Maca Negra, Cartilago de tiburon
              </h1>
              <div className="flex mb-4">
                <p
                className="flex-grow text-white/90 border-b-2 border-white py-2 text-base px-1"
                >Descripcion</p>
              </div>
              <p class="leading-relaxed mb-4">
                <strong>Testo Plus :</strong> Es un suplemento natural que aumenta los niveles de testosterona <br />
                <strong>Maca Negra :</strong> Es un suplemento natural que mejora la libido y la energía. <br />
                <strong>Cartílago de tiburón :</strong> Es un suplemento natural que mejora la salud articular.
              </p>
    
              <div className="flex">
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
                <span className="title-font font-medium text-2xl" id="price">
                Precio: {totalPrice} Bs.</span>
                <a
                className="flex ml-auto text-white bg-[#294437] border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-[#294437] transition-colors ease-in-out duration-300 delay-100 rounded"
                onClick={buyCombo3}
                href="/buy/confirm">
                    Comprar
                </a>
            </div>
            </div>
                {/* Imagenes y Fancybox */}
                <div className="lg:w-1/2 w-full flex flex-col lg:flex-row">
                <div className="relative flex justify-center">
                <img
                alt="combo3"
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
    )
};

export default Combo3;