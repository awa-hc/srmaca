import { useEffect, useState } from "react";

export default function AdminPage() {
  const [vouchers, setVouchers] = useState([]);
  const [error, setError] = useState(null);
  const [voucher, setVoucher] = useState(null);

  const init = () => {
    CheckAdmin();
    GetVouchers();
  };

  useEffect(() => {
    init();
  }, []);

  function CheckAdmin() {
    fetch("http://localhost:8080/validateadmin", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("user")}`,
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.user) {
        } else {
          window.location.href = "/";
        }
      });
  }

  function GetVouchers() {
    const response = fetch("http://localhost:8080/voucher/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("user")}`,
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        setVouchers(data);
      })
      .catch((error) => {
        setError("Esrror obteniendo los vouchers");
      });
  }

  return (
    <div className="bg-gradient-to-br from-[#185B69] to-black h-full min-h-screen w-screen flex md:flex-row flex-col text-white p-20">
      {voucher && (
        <div className=" h-screen w-screen bg-black/80 top-0 left-0 z-40 fixed">
          <div className="h-full w-full flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold">Admin</h1>
            <div className=" border border-white p-4 rounded-lg">
              <h1>Nombre: {voucher.Users.username}</h1>
              <h1>Email: {voucher.Users.email}</h1>
              <h1>Telefono: {voucher.Users.phone}</h1>
              <h1>Glosa: {voucher.glosa}</h1>
              <h1>
                Entrega: {voucher.delivery ? voucher.Users.address : "no"}
              </h1>
              <h1
                className={` ${
                  voucher.status ? `bg-green-500` : `bg-blue-500`
                } text-white rounded-lg p-2 w-max`}
              >
                Estado: {voucher.status ? "confirmado" : "pendiante"}
              </h1>

              <img
                className="h-80 w-auto"
                src={`http://localhost:8080/voucher/images/${voucher.ID}`}
              />
            </div>

            <div className="mt-4">
              <button
                className="bg-green-500 text-white rounded-lg p-2"
                onClick={() => {
                  fetch(`http://localhost:8080/voucher/confirm/${voucher.ID}`, {
                    method: "PUT",
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${localStorage.getItem("user")}`,
                    },
                    credentials: "include",
                  })
                    .then((response) => response.json())
                    .then((data) => {
                      setVoucher(null);

                      GetVouchers();
                    });
                }}
              >
                Confirmar
              </button>{" "}
              <button
                className="bg-red-500 text-white rounded-lg p-2 ml-2"
                onClick={() => {
                  fetch(`http://localhost:8080/voucher/delete/${voucher.ID}`, {
                    method: "DELETE",
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${localStorage.getItem("user")}`,
                    },
                    credentials: "include",
                  })
                    .then((response) => response.json())
                    .then((data) => {
                      setVoucher(null);
                      GetVouchers();
                    });
                }}
              >
                Eliminar
              </button>
            </div>
            <button
              className="mt-5 bg-transparent border border-white px-4 py-2 rounded-xl text-white"
              onClick={() => setVoucher(null)}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      <aside className="bg-transparent [&>ul>li]:my-4 ">
        <h1 className="text-2xl underline ">Menu.</h1>
        <ul>
          <li className="hover:scale-105 select-none    hover:bg-blue-500 hover:text-white hover:border hover:border-white transition-colors ease-in-out duration-150 delay-75 rounded-lg px-2 py-1">
            Todos los Vouchers
          </li>
          {/* <li className="hover:scale-105 select-none hover:bg-blue-500 hover:text-white hover:border hover:border-white transition-colors ease-in-out duration-150 delay-75 rounded-lg px-2 py-1">
            Eliminados
          </li> */}
          {/* <li className="hover:scale-105 selec hover:bg-blue-500 hover:text-white hover:border hover:border-white transition-colors ease-in-out duration-150 delay-75 rounded-lg px-2 py-1">
            Aceptados
          </li> */}
        </ul>
      </aside>
      <section className="md:block hidden">
        <h1>Todos los vouchers</h1>
        <table className="">
          <thead>
            <tr className="[&>th]:border [&>th]:px-2 [&>th]:border-white">
              <th>Nombre</th>
              <th>Correo</th>
              <th>Telefono</th>
              <th>Fecha</th>
              <th>Estado</th>
              <th>Imagen</th>
              <th>Entrega</th>
              <th>Metodo de pago</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody className="p-2 border border-white rounded-lg [&>tr>td]:border [&>tr>td]:border-white [&>tr>td]:py-2 [&>tr>td]:px-2 [&>tr>td]:items-center">
            {vouchers.map((voucher) => (
              <tr key={voucher.ID}>
                <td>{voucher.Users.username}</td>
                <td>{voucher.Users.email}</td>
                <td>{voucher.Users.phone}</td>
                <td>
                  {new Date(voucher.CreatedAt).toLocaleDateString()}{" "}
                  {new Date(voucher.CreatedAt).toLocaleTimeString()}
                </td>
                <td
                  className={` ${
                    voucher.status ? `bg-green-500` : `bg-blue-500`
                  } text-white p-2 w-max
                  
                  `}
                >
                  {voucher.status ? "Confirmado" : "Pendiente"}
                </td>
                <td>
                  <img
                    className="h-10 w-auto "
                    src={`http://localhost:8080/voucher/images/${voucher.ID}`}
                  />
                </td>
                <td> {voucher.delivery ? voucher.Users.address : "no"}</td>
                <td>{voucher.payment_method}</td>
                <td>
                  <button
                    onClick={() => {
                      setVoucher(voucher);
                    }}
                  >
                    Ver
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section className="md:hidden block">
        <h1>Todos los vouchers</h1>
        {vouchers.map((voucher) => (
          <div
            key={voucher.ID}
            className="p-2 border border-white rounded-lg my-2 flex flex-col"
          >
            <h1>Nombre: {voucher.Users.username}</h1>
            <h1>Email: {voucher.Users.email}</h1>
            <h1>Telefono: {voucher.Users.phone}</h1>
            <h1>
              Fecha: {new Date(voucher.CreatedAt).toLocaleDateString()}{" "}
              {new Date(voucher.CreatedAt).toLocaleTimeString()}
            </h1>
            <h1>Estado: {voucher.status ? "Confirmado" : "Pendiente"}</h1>
            <img
              className="h-auto w-auto "
              src={`http://localhost:8080/voucher/images/${voucher.ID}`}
            />
            <h1>Entrega: {voucher.delivery ? voucher.Users.address : "no"}</h1>
            <h1>Metodo de pago: {voucher.payment_method}</h1>
            <button
              onClick={() => {
                setVoucher(voucher);
              }}
              className="bg-green-500 text-white rounded-lg p-2"
            >
              Ver
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}
