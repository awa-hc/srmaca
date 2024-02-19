import { useState, useEffect } from "react";
export default function Cart() {
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    getCart();
  }, []);

  function getCart() {
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

    const cart = initialproducts.filter((product) => product.quantity > 0);
    cart.map((product) => {
      product.quantity = parseInt(product.quantity, 10);
    });
    setCart(cart);
    setTotalPrice(maca + Cartilago + TestoPlus + Psyllium);
  }

  function DeleteLocalStorage(item) {
    localStorage.removeItem(item);
    localStorage.removeItem(item + "Price");
    localStorage.removeItem(item + "Quantity");
    getCart();
  }

  return (
    <div>
      <button className="flex" onClick={() => setOpen(!open)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-garden-cart"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M17.5 17.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" />
          <path d="M6 8v11a1 1 0 0 0 1.806 .591l3.694 -5.091v.055" />
          <path d="M6 8h15l-3.5 7l-7.1 -.747a4 4 0 0 1 -3.296 -2.493l-2.853 -7.13a1 1 0 0 0 -.928 -.63h-1.323" />
        </svg>
        <p>{totalPrice} Bs</p>
      </button>

      {open && (
        <ul className="flex flex-col mt-3  absolute rounded-lg bg-gray-800 border-white border backdrop-blur-md">
          {cart.map((product) => {
            return (
              <div className="flex items-center px-4 py-2" key={product.name}>
                <li className="text-white flex-grow basis-0 [&>h2]:text-xs my-2 flex">
                  <h2 className="flex-grow basis-0">{product.name}</h2>
                  <h2 className="ml-4">{product.quantity}</h2>
                </li>
                <button
                  onClick={() => DeleteLocalStorage(product.name)}
                  className="bg-red-500 ml-2  my-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-trash"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 7l16 0" />
                    <path d="M10 11l0 6" />
                    <path d="M14 11l0 6" />
                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                  </svg>
                </button>
              </div>
            );
          })}
        </ul>
      )}
    </div>
  );
}
