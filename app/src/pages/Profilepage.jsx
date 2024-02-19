import { useState, useEffect } from "react";
export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userVouchers, setUserVouchers] = useState([]);

  useEffect(() => {
    getuserVouchers();
  }, []);

  //   function getuser() {
  //     fetch("http://localhost:8080/user/", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application",
  //       },
  //       credentials: "include",
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data.user);
  //         setUser(data.user);
  //         setLoading(false);
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //         setError("Error al obtener el usuario");
  //         setLoading(false);
  //       });
  //   }
  function getuserVouchers() {
    fetch("http://localhost:8080/voucher/user/", {
      method: "GET",
      headers: {
        "Content-Type": "application",
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

  return (
    <div className="pt-20 h-screen bg-gradient-to-br from-[#185B69] to-black w-screen flex flex-col items-center justify-center text-white">
      <div class="container mx-auto my-60">
        <div>
          <div class="bg-white relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
            <div class="flex justify-center">
              <img
                src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                alt=""
                class="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
              />
            </div>

            <div class="mt-16">
              <h1 class="font-bold text-center text-3xl text-gray-900">doas</h1>
              <p class="text-center text-sm text-gray-400 font-medium">
                soicnsioc
              </p>
              <p>
                <span></span>
              </p>
              {/* <div class="my-5 px-6">
                <a
                  href="#"
                  class="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white"
                >
                  Connect with <span class="font-bold">@pantazisoft</span>
                </a>
              </div> */}
              {/* <div class="flex justify-between items-center my-5 px-6">
                <a
                  href=""
                  class="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
                >
                  Facebook
                </a>
                <a
                  href=""
                  class="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
                >
                  Twitter
                </a>
                <a
                  href=""
                  class="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
                >
                  Instagram
                </a>
                <a
                  href=""
                  class="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
                >
                  Email
                </a>
              </div> */}

              <div class="w-full">
                <h3 class="font-medium text-gray-900 text-left px-6">
                  Recent activites
                </h3>
                <div class="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                  <a
                    href="#"
                    class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3  block hover:bg-gray-100 transition duration-150"
                  >
                    <img
                      src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                      alt=""
                      class="rounded-full h-6 shadow-md inline-block mr-2"
                    />
                    Updated his status
                    <span class="text-gray-500 text-xs">24 min ago</span>
                  </a>
                  {userVouchers.map((voucher) => {
                    console.log(voucher);
                    return (
                      <a
                        href="#"
                        class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3  block hover:bg-gray-100 transition duration-150"
                      >
                        <img
                          src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                          alt=""
                          class="rounded-full h-6 shadow-md inline-block mr-2"
                        />
                        Updated his status
                        <span class="text-gray-500 text-xs">
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
