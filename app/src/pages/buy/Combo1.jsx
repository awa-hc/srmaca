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
const Combo1 = () => {
    const [mainImage, setMainImage] = useState("/images/combo1/combo1.png");
    const [quantity, setQuantity] = useState(1);
    const pricePerItem = 250;

    // Actualiza el precio total en función de la cantidad
    const totalPrice = pricePerItem * quantity;

    // Cambia la imagen principal al hacer clic en una miniatura
    const changeMainImage = (src) => {
        setMainImage(src);
    };

    // Función para manejar la compra (simplificada para el ejemplo)
    const buyCombo1 = () => {
        localStorage.setItem("Combo1", true);
        localStorage.setItem("Combo1Price", totalPrice);
        localStorage.setItem("Combo1Quantity", quantity);
    };
    
    return (
        <div className="text-white bg-gradient-to-b from-[#081742] to-[#7A6121] body-font min-h-screen overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div
            className="lg:w-1/2 w-full lg:pr-10 lg:py-6 flex flex-col justify-center mb-6 lg:mb-0"
            >
            <h2 className="text-sm title-font text-white tracking-widest">
                Combo 1!!
            </h2>
            <h1 className="text-gray-200 text-3xl title-font font-medium mb-4">
                Testo Plus y Cartilago de tiburon
            </h1>
            <div className="flex mb-4">
                <a
                className="flex-grow text-white/90 border-b-2 border-white py-2 text-lg px-1"
                >Descripcion</a>
            </div>
            <p className="leading-relaxed mb-4">
                Testo Plus es un suplemento alimenticio que ayuda a aumentar la
                testosterona de forma natural, mientras que el cartilago de tiburon
                es un suplemento que ayuda a mejorar la salud de las articulaciones.
            </p>

            <div className="flex flex-row align-center" id="div-quantity">
                <span className="title-font font-medium text-2xl"> Cantidad :</span>
                <input
                    className="bg-transparent font-2xl text-white border border-white rounded-md w-10 h-10 text-center"
                    ype="number"
					value={quantity}
					onChange={(e) => setQuantity(Number(e.target.value))}
					min="1"
                />
            </div>
            <div className="flex">
                <span className="title-font font-medium text-2xl" id="price">
                Precio: {totalPrice} Bs.</span>
                <button
                    type="button"
                    id="buycombo1"
                    onClick={buyCombo1}
                    className="flex ml-auto text-white bg-[#294437] border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-[#294437] transition-colors ease-in-out duration-300 delay-100 rounded"
                >Comprar</button>
            </div>
            </div>
            <div className="lg:w-1/2 w-full flex image-container">
            <a href="/images/combo1/combo1.png" data-fancybox="gallery">
                <img
                    alt="combo1"
                    className="main-image lg:w-full w-full lg:h-auto h-64 md:h-64 sm:h-48 object-cover lg:object-fill object-center rounded"
                    src="/images/combo1/combo1.png"
                />
                </a>
                    <div className="thumbnails">
                        <img className="thumbnail" src="/images/combo1/combo1.png" alt="combo1" onClick={changeMainImage}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
};

export default Combo1;