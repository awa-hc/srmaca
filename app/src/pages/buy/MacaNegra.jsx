import React, { useState, useEffect } from "react";
// import "@fancyapps/ui/dist/fancybox.css"; // Asegúrate de instalar este paquete o incluir el CSS de otra manera

// Componente para las miniaturas
const Thumbnail = ({ src, onClick }) => (
  <img
    className="thumbnail"
    src={src}
    alt="thumbnail"
    onClick={() => onClick(src)}
    style={{
      width: "20vh",
      height: "10vh",
      objectFit: "contain",
      objectPosition: "center",
      marginBottom: "10px",
      marginLeft: "10px",
      cursor: "pointer",
    }}
  />
);

// Componente principal
const MacaNegra = () => {
  const [mainImage, setMainImage] = useState("/images/testoplus/testo1.png");
  const [quantity, setQuantity] = useState(1);
  const pricePerItem = 210;

  const handleChangeMainImage = (src) => {
    setMainImage(src);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleBuyProduct = () => {
    const totalPrice = quantity * pricePerItem;
    localStorage.setItem("MacaNegra", true);
    localStorage.setItem("MacaNegraPrice", totalPrice);
    localStorage.setItem("MacaNegraQuantity", quantity);
  };

  return (
    <div className="text-white bg-gradient-to-b from-[#7d6321] to-black flex items-center justify-center min-h-screen overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="title-font text-white tracking-widest">
              Maca Negra
            </h2>
            <h1 className="text-gray-200 text-3xl title-font font-medium mb-4">
              Regulador hormonal y energizante natural.
            </h1>
            <p className="leading-relaxed mb-4">
              Suplemento natural y diseñado para estimular al propio cuerpo que
              genere más testosterona. Su principal uso es aumentar los niveles
              de testosterona de forma natural en el cuerpo
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
                type="number"
                value={quantity}
                min="1"
                className="bg-transparent text-white border border-white rounded-md w-10 h-10 text-center"
                onChange={handleQuantityChange}
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
          <div className="lg:w-1/2 w-full flex flex-col items-center">
            <img
              alt="ecommerce"
              className="main-image lg:w-full w-full lg:h-auto h-64 md:h-64 sm:h-48 object-cover lg:object-fill object-center rounded"
              src={mainImage}
            />
            <div className="flex flex-row mt-4">
              {[
                "/images/cartilago/tiburon1.png",
                "/images/cartilago/tiburon2.png",
                "/images/cartilago/tiburon3.png",
              ].map((src) => (
                <img
                  key={src}
                  src={src}
                  alt="thumbnail"
                  onClick={() => handleChangeMainImage(src)}
                  className="thumbnail cursor-pointer w-20 h-10 object-contain mr-2"
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
