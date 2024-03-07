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
		src: "/images/combo2/combo2.png",
		active: true
	}
];

// Componente principal
const Combo2 = () => {
    const [mainImage, setMainImage] = useState(images[0].src);
    const [quantity, setQuantity] = useState(1);
    const pricePerItem = 260;

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
    const buyCombo2 = () => {
        localStorage.setItem("combo2", true);
        localStorage.setItem("combo2Price", totalPrice);
        localStorage.setItem("combo2Quantity", quantity);
    };
    
    return (
        <div className="text-white bg-gradient-to-b from-[#081742] to-[#7A6121] body-font min-h-screen overflow-hidden">
            <div className="container px-5 py-16 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div
            className="lg:w-1/2 w-full lg:pr-10 lg:py-6 flex flex-col justify-center mb-6 lg:mb-0"
            >
            <h2 className="text-3xl title-font text-white tracking-widest">
                Combo 2!!
            </h2>
            <h1 className="text-gray-200 title-font font-medium mb-4">
                Testo Plus y Maca Negra
            </h1>
            <div className="flex mb-4">
                <p
                className="flex-grow text-white/90 border-b-2 border-white py-2 text-base px-1"
                >Descripcion</p>
            </div>
            <p className="leading-relaxed mb-4">
                Testo Plus es un suplemento que aumenta la testosterona, mejora la libido y la masa muscular. Maca Negra, por su parte, mejora la fertilidad y la libido, y aumenta la energía. Juntos, son ideales para mejorar la vida sexual y la salud en general.
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
                onClick={buyCombo2}
                href="/buy/confirm">
                    Comprar
                </a>
            </div>
            </div>
                {/* Imagenes y Fancybox */}
                <div className="lg:w-1/2 w-full flex flex-col lg:flex-row">
                <div className="relative flex justify-center">
                <img
                alt="combo2"
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

export default Combo2;