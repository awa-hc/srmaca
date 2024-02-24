import { useState, useEffect } from "react";
import { GetCookie } from "../utils/Cookie";
export default function ProfilePage() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userVouchers, setUserVouchers] = useState([]);

  useEffect(() => {
    getuserVouchers();
    getUser();

    if (GetCookie("Auth") === null) {
      window.location.href = "/login";
    }
  }, []);

  function getuserVouchers() {
    fetch("https://srmacaback.fly.dev/voucher/user/", {
      method: "GET",
      headers: {
        "Content-Type": "application",
        Authorization: `Bearer ${localStorage.getItem("user")}`,
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        data.CreatedAt = new Date(data.CreatedAt).toLocaleString();
        setUserVouchers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Error al obtener los vouchers");
        setLoading(false);
      });
  }

  function getUser() {
    fetch("http://localhost:8080/user/", {
      method: "GET",
      headers: {
        "Content-Type": "application",
        Authorization: `Bearer ${localStorage.getItem("user")}`,
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUser(data);

        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Error al obtener los vouchers");
        setLoading(false);
      });
  }

  return (
    <div className="pt-20 h-screen bg-gradient-to-br from-[#185B69] to-black w-screen flex flex-col items-center justify-center text-white">
      <div class="container mx-auto my-60">
        <div>
          <div class="bg-white relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
            <div class="flex justify-center">
              <img
                src="https://th.bing.com/th/id/OIP.F_R5vSp2LEiLzJqaQuB99wAAAA?rs=1&pid=ImgDetMain"
                alt=""
                class="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
              />
            </div>

            <div class="mt-16">
              <h1 class="font-bold text-center text-3xl text-gray-900">
                {user && (user.user ? user.user.username : "User")}
              </h1>
              ;
              <p class="text-center text-sm text-gray-400 font-medium">
                {user && (user.user ? user.user.email : "Email")}
              </p>
              <p>
                <span></span>
              </p>
              <div class="w-full">
                <h3 class="font-medium text-gray-900 text-left px-6">
                  Recent activites
                </h3>
                <div class="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                  {userVouchers.map((voucher) => {
                    console.log(voucher);
                    return (
                      <a
                        href="#"
                        class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3  block hover:bg-gray-100 transition duration-150"
                      >
                        <img
                          src="/images/testoplus/testo_principal.png"
                          alt=""
                          class="rounded-full h-6 shadow-md inline-block mr-2"
                        />
                        Hiciste una compra!!
                        <span className="ml-4 text-gray-500 text-md underline">
                          {voucher.glosa}{" "}
                        </span>
                        <span class="text-gray-500 text-xs ml-4">
                          {voucher.CreatedAt}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
