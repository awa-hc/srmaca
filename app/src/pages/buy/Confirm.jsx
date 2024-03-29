import React, { useState, useEffect } from "react";
import { GetCookie } from "../../utils/Cookie";

const Confirm = () => {
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [totalPrice, setTotalPrice] = useState(0);
  const [glosa, setGlosa] = useState("");
  const [receipt, setReceipt] = useState(null);
  const [userDirection, setUserDirection] = useState("");
  const [delivery, setDelivery] = useState(false);
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  let productglosa = "";

  useEffect(() => {
    setGlosa("empty");
    if (localStorage.getItem("user") === null || GetCookie("Auth") === null) {
      window.location.href = "/login";
    }

    let maca = parseInt(localStorage.getItem("MacaNegraPrice"), 10) || 0;
    let Cartilago = parseInt(localStorage.getItem("CartilagoPrice"), 10) || 0;
    let TestoPlus = parseInt(localStorage.getItem("TestoPlusPrice"), 10) || 0;
    let Psyllium = parseInt(localStorage.getItem("PsylliumPrice"), 10) || 0;
    if (isNaN(maca)) {
      maca = 0;
    }
    if (isNaN(Cartilago)) {
      Cartilago = 0;
    }
    if (isNaN(TestoPlus)) {
      TestoPlus = 0;
    }
    if (isNaN(Psyllium)) {
      Psyllium = 0;
    }

    const initialproducts = [
      {
        name: "MacaNegra",
        quantity: localStorage.getItem("MacaNegraQuantity") || 0,
      },
      {
        name: "Cartilago",
        quantity: localStorage.getItem("CartilagoQuantity") || 0,
      },
      {
        name: "TestoPlus",
        quantity: localStorage.getItem("TestoPlusQuantity") || 0,
      },
      {
        name: "Psyllium",
        quantity: localStorage.getItem("PsylliumQuantity") || 0,
      },
    ];
    const products = initialproducts.filter((product) => product.quantity > 0);

    setProducts(products);
    console.log(products);

    products.map((product) => {
      console.log(product);
      productglosa += `${product.quantity} ${product.name} `;
    });
    setGlosa(productglosa);

    const total = maca + Cartilago + TestoPlus + Psyllium;
    setTotalPrice(total);
    GetUserDirection();
  }, [glosa]);

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleGlosaChange = (event) => {
    setGlosa(event.target.value);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Convertir el archivo a base64 para enviarlo como parte de la solicitud
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setReceipt(reader.result);
      };
      reader.onerror = (error) => {
        console.error("Error converting image to Base64", error);
      };
    }
  };
  function GetUserDirection() {
    const response = fetch("https://srmacaback.fly.dev/user/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        setUserDirection(data.user.address);
      })
      .catch((error) => {
        console.error(error);
      });
    return response;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const request = {
      payment_method: paymentMethod,
      glosa,
      products,
      totalPrice: totalPrice,
      img: receipt,
      delivery,
    };

    const response = await fetch("https://srmacaback.fly.dev/voucher/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
      credentials: "include",
    });
    const data = await response.json();

    if (data.message) {
      setMessage(data.message);
      setTimeout(() => {
        window.location.href = "/";
      }, 4000);
    }
    if (data.error) {
      setError(data.error);
    }
  };

  return (
    <section className="text-white bg-gradient-to-br from-[#526C63] to-black min-h-screen w-screen flex flex-col pt-16 pb-4 md:mt-0  items-center justify-center px-5">
      <h2 className="title-font text-white tracking-widest text-3xl">
        Confirmar Compra
      </h2>
      {message ? (
        <div className="absolute h-1/2 w-screen flex flex-col items-center justify-center text-white backdrop-blur-xl">
          <div className="bg-green-500/45 w-max px-4 py-2 text-center rounded-lg">
            <h1>Exito!</h1>
            <h2>{message}</h2>
            <h3>Redireccionando...</h3>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      {error ? (
        <div className="bg-red-500 px-4 py-2 rounded-lg text-white flex items-center justify-center flex-col">
          <h3>ERROR!</h3>
          <h2>{error}</h2>
        </div>
      ) : (
        <div></div>
      )}
      <div className="mx-auto flex flex-col gap-16 md:flex-row items-center justify-center w-full">
        <form
          className="w-full md:w-1/2 flex flex-col items-center justify-center"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col w-full">
            <label
              htmlFor="paymentMethod"
              className="text-white
                text-lg font-semibold"
            >
              Método de Pago
            </label>
            <select
              className="bg-white text-black w-full p-2 rounded-md"
              id="paymentMethod"
              value={paymentMethod}
              onChange={handlePaymentMethodChange}
            >
              <option value="cash">Efectivo</option>
              <option value="transfer">Transferencia</option>
            </select>
            {paymentMethod === "cash" && (
              <div className="flex flex-col w-full">
                <h2>Rellena este formulario</h2>
                <span>Describe tu compra</span>
                <input
                  type="text"
                  placeholder="ejemplo: 4 testoplus "
                  value={glosa}
                  className="bg-transparent text-white border border-white rounded-md text-center py-2"
                  onChange={handleGlosaChange}
                />
              </div>
            )}
            {paymentMethod == "transfer" && (
              <div className="w-full flex flex-col gap-3">
                <h2>Realiza la transferencia o escanea el codigo qr</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 ">
                  <section className="flex flex-col items-left justify-center">
                    <h2>Realiza tu pago a la siguiente cuenta</h2>
                    <h2>Nombre: Nicolás Hernández </h2>
                    <h2>Banco: BCP</h2>
                    <h2>Cuenta: 1001358547</h2>
                    <h2>CI: E-10271474</h2>
                  </section>
                  <div>
                    <img
                      alt="PAGO QR"
                      src="/images/qr/qr.png"
                      className="w-full h-full"
                    />
                  </div>
                </div>

                <label
                  htmlFor="receipt"
                  className="text-white text-lg font-semibold"
                >
                  1. Sube tu comprobante de Pago
                </label>
                <input
                  type="file"
                  id="receipt"
                  accept="image/*"
                  className="bg-transparent text-white w-full  rounded-md"
                  onChange={handleFileChange}
                />
                <span className="text-xl text-center">
                  Describe tu compra aqui por favor!
                </span>
                <input
                  type="text"
                  placeholder="ejemplo: 4 testoplus "
                  value={glosa}
                  className="bg-transparent text-white border border-white rounded-md text-center py-2"
                  onChange={handleGlosaChange}
                />
              </div>
            )}
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                id="delivery"
                name="delivery"
                className="sr-only peer"
                value={delivery}
                onChange={(event) => setDelivery(event.target.checked)}
              />
              <span className="w-4 h-4 inline-block mr-2 rounded border border-gray-300 bg-white peer-checked:bg-green-600 peer-checked:border-white"></span>
              Entrega en tu Direccion?{" "}
              <span className="text-xs ml-4 italic  text-white">
                {userDirection}
              </span>
            </label>
            <button className="mt-4 px-4 py-2 rounded-lg self-center bg-green-500 hover:bg-green-700 border border-gray-500  hover:border-white w-max transition-colors ease-linear duration-100 delay-75">
              Enviar
            </button>
          </div>
        </form>
        <div className="">
          <h3>Resumen de tu compra</h3>
          <section>
            {localStorage.getItem("TestoPlus") && (
              <div className="flex px-2 py-1 border-t border-white justify-center items-center">
                <div className="w-20 h-20 flex justify-center items-center border-r border-white ">
                  <img
                    alt="testoplus"
                    src="/images/testoplus/testo_principal.png"
                    className="h-20 w-auto object-fill"
                  />
                </div>
                <div className=" ml-2">
                  <h2>
                    TestoPlus:{" "}
                    <strong>{localStorage.getItem("TestoPlusQuantity")}</strong>
                  </h2>
                  <h2>
                    Precio:{" "}
                    <strong>{localStorage.getItem("TestoPlusPrice")} BS</strong>
                  </h2>
                </div>
              </div>
            )}
            {localStorage.getItem("Psyllium") && (
              <div className="flex px-2 py-1 border-t border-white justify-center items-center">
                <div className="w-20 h-20 flex justify-center items-center border-white border-r w">
                  <img
                    alt="psyllium"
                    src="/images/psyllium/psy_principal.png"
                    className="h-20 w-auto object-fill"
                  />
                </div>
                <div className="ml-2">
                  <h2>
                    TestoPlus:{" "}
                    <strong>{localStorage.getItem("PsylliumQuantity")}</strong>
                  </h2>
                  <h2>
                    Precio:{" "}
                    <strong>{localStorage.getItem("PsylliumPrice")} BS</strong>
                  </h2>
                </div>
              </div>
            )}
            {localStorage.getItem("MacaNegra") && (
              <div className="flex px-2 py-1 border-t border-white justify-center items-center">
                <div className="w-20 h-20 flex justify-center items-center border-white border-r w">
                  <img
                    alt="maca negra"
                    src="/images/macanegra/maca_principal.png"
                    className="h-20 w-auto object-fill"
                  />
                </div>
                <div className="ml-2">
                  <h2>
                    TestoPlus:{" "}
                    <strong>{localStorage.getItem("MacaNegraQuantity")}</strong>
                  </h2>
                  <h2>
                    Precio:{" "}
                    <strong>{localStorage.getItem("MacaNegraPrice")} BS</strong>
                  </h2>
                </div>
              </div>
            )}
            {localStorage.getItem("Cartilago") && (
              <div className="flex px-2 py-1 border-t border-white justify-center items-center">
                <div className="w-20 h-20 flex justify-center items-center border-white border-r w">
                  <img
                    alt="tiburon"
                    src="/images/cartilago/tiburon_principal.png"
                    className="h-20 w-auto object-fill"
                  />
                </div>
                <div className="ml-2">
                  <h2>
                    TestoPlus:{" "}
                    <strong>{localStorage.getItem("CartilagoQuantity")}</strong>
                  </h2>
                  <h2>
                    Precio:{" "}
                    <strong>{localStorage.getItem("CartilagoPrice")} BS</strong>
                  </h2>
                </div>
              </div>
            )}
            <h1>Precio total = {totalPrice} Bs.</h1>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Confirm;
