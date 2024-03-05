import React, { useState } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

// Componente para las miniaturas
const Thumbnail = ({ image, onClick }) => (
  <div onClick={onClick}>
    <img
    //   className="thumbnail h-56 w-auto object-cover object-center rounded mx-auto cursor-pointer hover:opacity-80 transition-opacity ease-in-out duration-300 delay-100"
      src={image.src}
      alt="thumbnail"
      style={{
      	width: "7vw",
      	height: "7vw",
      	objectFit: "cover",
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
    src: "/images/testoplus/testo1.png",
    active: true,
  },
  {
    src: "/images/testoplus/testo2.png",
    active: false,
  },
  {
    src: "/images/testoplus/testo3.png",
    active: false,
  },
];

// Componente principal
const TestoPlus = () => {
  const [mainImage, setMainImage] = useState(images[0].src);
  const [quantity, setQuantity] = useState(1);
  const pricePerItem = 210;

  // Estado para guardar el mainImage actual
  const currentImage = images.find((x) => x.active);

  // Funcion para setear imagen
  function setActiveImage(image) {
    // Desactivar todas
    images.forEach((img) => (img.active = false));
    // Activar la seleccionada
    image.active = true;
    // Setear como principal
    setMainImage(image.src);
  }

  // Actualiza el precio total en función de la cantidad
  const totalPrice = pricePerItem * quantity;

  // Función para manejar la compra (simplificada para el ejemplo)
  const buyTesto = () => {
    localStorage.setItem("TestoPlus", true);
    localStorage.setItem("TestoPlusPrice", totalPrice);
    localStorage.setItem("TestoPlusQuantity", quantity);
  };

  return (
    <div className="text-white bg-gradient-to-b from-[#294437] to-black flex items-center justify-center overflow-hidden min-h-screen">
      <div className="container px-5 py-16 mx-auto ">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 flex flex-col justify-center mb-6 lg:mb-0">
            <h2 className="title-font text-white tracking-widest text-3xl">
              Testo Plus
            </h2>
            <h1 className="text-gray-200 title-font font-medium">
              Potenciador de energía y vitalidad.
            </h1>
            <p className="leading-relaxed mb-4">
              Suplemento natural diseñado para respaldar la capacidad del cuerpo
              para mantener un equilibrio hormonal saludable. Su objetivo
              principal es promover niveles óptimos de energía y vitalidad
              masculina de manera natural.
            </p>
            <div className="flex border-t border-gray-200 py-2">
              <span>Cápsulas :</span>
              <span className="ml-auto">90 cápsulas.</span>
            </div>
            <div className="flex border-b mb-3 border-gray-200 pb-2">
              <span>Dosis :</span>
              <span className="ml-auto">2 cápsulas diarias.</span>
            </div>

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
              <span className="title-font flex-grow basis-0 font-medium text-2xl">
                Precio: {totalPrice} Bs.
              </span>
              <a
                className="flex ml-auto text-white bg-[#294437] border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-[#294437] transition-colors ease-in-out duration-300 delay-100 rounded"
                onClick={buyTesto}
                href="/buy/confirm"
              >
                Comprar
              </a>
            </div>
          </div>
          {/* Imagenes y Fancybox */}
          <div className="lg:w-1/2 w-full flex">
            <img
              alt="testo-plus"
              className="h-[30vh] w-[30vh] lg:h-[80vh] lg:w-[45vh] object-cover object-center rounded mx-auto"
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

export default TestoPlus;
