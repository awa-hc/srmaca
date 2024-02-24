import React, { useState } from "react";

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
const Combo3 = () => {
    const [mainImage, setMainImage] = useState("/images/combo3/combo3.png");
    const [quantity, setQuantity] = useState(1);
    const pricePerItem = 250;

    // Actualiza el precio total en función de la cantidad
    const totalPrice = pricePerItem * quantity;

    // Cambia la imagen principal al hacer clic en una miniatura
    const changeMainImage = (src) => {
        setMainImage(src);
    };

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
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <div
              class="lg:w-1/2 w-full lg:pr-10 lg:py-6 flex flex-col justify-center mb-6 lg:mb-0">
              <h2 class="text-sm title-font text-white tracking-widest">
                Combo 3!!
              </h2>
              <h1 class="text-gray-200 text-3xl title-font font-medium mb-4">
                Testo Plus, Maca Negra, Cartilago de tiburon
              </h1>
              <div class="flex mb-4">
                <a
                  class="flex-grow text-white/90 border-b-2 border-white py-2 text-lg px-1">
                    Descripcion
                </a>
              </div>
              <p class="leading-relaxed mb-4">
                Testo Plus: Testo Plus es un suplemento natural que ayuda a aumentar
                los niveles de testosterona en el cuerpo. <br />Maca Negra: Maca
                Negra es un suplemento natural que ayuda a aumentar la libido y la
                energía.
                <br /> Cartilago de tiburon: Cartilago de tiburon es un suplemento natural
                que ayuda a mejorar la salud de las articulaciones.
              </p>
    
              <div class="flex flex-row align-center" id="div-quantity">
                <span class="title-font font-medium text-2xl"> Cantidad :</span>
                <input
                  class="bg-transparent font-2xl text-white border border-white rounded-md w-10 h-10 text-center"
                  type="number"
                  id="quantity"
                  value="1"
                  min="1"
                  onchange="updatePrice()"
                />
              </div>
              <div class="flex">
                <span class="title-font font-medium text-2xl" id="price">
                  Precio: 310 Bs.
                </span>
                <button
                  type="button"
                  id="buycombo3"
                  onclick="BuyCombo3()"
                  class="flex ml-auto text-white bg-[#294437] border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-[#294437] transition-colors ease-in-out duration-300 delay-100 rounded">
                    Comprar
                  </button>
              </div>
            </div>
            <div class="lg:w-1/2 w-full flex image-container">
              <a href="/images/combo3/combo3.png" data-fancybox="gallery">
                <img
                  alt="combo3"
                  class="main-image lg:w-full w-full lg:h-auto h-64 md:h-64 sm:h-48 object-cover lg:object-fill object-center rounded"
                  src="/images/combo3/combo3.png"/>
              </a>
              <div class="thumbnails">
                <img class="thumbnail" src="/images/combo3/combo3.png" alt="combo3" onclick="changeMainImage(this)"/>
              </div>
          </div>
          </div>
        </div>
      </div>
    )
};

export default Combo3;