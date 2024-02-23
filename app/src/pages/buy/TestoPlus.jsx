	import React, { useState } from "react";
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
	const TestoPlus = () => {
	const [mainImage, setMainImage] = useState("/images/testoplus/testo1.png");
	const [quantity, setQuantity] = useState(1);
	const pricePerItem = 210;

	// Actualiza el precio total en función de la cantidad
	const totalPrice = pricePerItem * quantity;

	// Cambia la imagen principal al hacer clic en una miniatura
	const changeMainImage = (src) => {
		setMainImage(src);
	};

	// Función para manejar la compra (simplificada para el ejemplo)
	const buyTesto = () => {
		localStorage.setItem("TestoPlus", true);
		localStorage.setItem("TestoPlusPrice", totalPrice);
		localStorage.setItem("TestoPlusQuantity", quantity);
	};

	return (
		<div className="text-white bg-gradient-to-b from-[#294437] to-black flex items-center justify-center min-h-screen overflow-hidden">
		<div className="container px-5 py-14 mx-auto ">
			<div className="lg:w-4/5 mx-auto flex flex-wrap">
			<div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 flex flex-col justify-center  mb-6 lg:mb-0">
				<h2 className="title-font text-white tracking-widest">Psyllium</h2>
				<h1 className="text-gray-200 text-3xl title-font font-medium mb-4">
				El soporte ideal para tus articulaciones y ligamentos
				</h1>
				<p className="leading-relaxed mb-4">
				laxantes 100% natural que aporta fibra en gran cantidad y
				vitaminas al cuerpo, su aporte de fibra es ideal para combatir el
				estreñimiento
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
					className="bg-transparent text-white border border-white rounded-md w-10 h-10 text-center"
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

			<div className="lg:w-1/2 w-full flex image-container">
				<img
				alt="testo-plus"
				className="main-image lg:w-full w-full lg:h-auto h-64 md:h-64 sm:h-48 object-cover lg:object-fill object-center rounded"
				src={mainImage}
				/>
				<div className="thumbnails">
				{[
					"/images/testoplus/testo1.png",
					"/images/testoplus/testo2.png",
					"/images/testoplus/testo3.png",
				].map((src) => (
					<Thumbnail key={src} src={src} onClick={changeMainImage} />
				))}
				</div>
			</div>
			</div>
		</div>
		</div>
	);
	};

	export default TestoPlus;
