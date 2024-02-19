import { GetCookie } from "../utils/Cookie";
import { useState } from "react";

export default function Navbar() {
  useState(() => {
    console.log("Navbar");
    const userloged = DetectUser();
    console.log(userloged);
  }, []);

  function DetectUser() {
    const user = GetCookie("Auth");
    if (user) {
      return true;
    } else return false;
  }

  function Logout() {
    document.cookie = "Auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = "/";
  }

  return (
    <section class="flex md:m-0 md:gap-0 items-center justify-center top-0 fixed w-screen max-h-20 min-h-20 h-20 max-w-screen z-40 text-white px-10 py-5 md:px-24 md:py-4 uppercase font-bold font-sans rounded-2xl">
      <nav class="bg-transparent">
        <div class="w-screen flex flex-wrap items-center px-4 py-2 shadow-xl">
          <a
            href="/"
            class="flex items-center w-max mr-auto md:w-1/3 md:mr-0 z-10"
          >
            <img
              src="/images/logosrmaca.png"
              class="h-8 mr-3"
              alt="srmaca Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              SrMaca.
            </span>
          </a>
          <button
            id="navbar-toggle"
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              ></path>
            </svg>
          </button>
          <div class="hidden md:block w-full md:w-2/3 px-5" id="navbar-default">
            <div class="flex flex-col md:flex-row md:justify-evently w-full p-4 md:p-0 mt-4 rounded-lg md:space-x-8 md:mt-0 md:border-0">
              <ul class="md:flex mr-auto">
                <li>
                  <a
                    href="/"
                    class="block py-2 pl-3 pr-4 text-white rounded bg-transparent"
                    aria-current="page"
                  >
                    INICIO
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    class="block py-2 pl-3 pr-4 text-white rounded bg-transparent"
                  >
                    SOBRE NOSOTROS
                  </a>
                </li>

                <li>
                  <button
                    id="product-toggle"
                    data-collapse-toggle="product-default"
                    type="button"
                    class="block py-2 pl-3 pr-4 text-white rounded bg-transparent"
                  >
                    PRODUCTOS
                  </button>

                  <ul
                    class="hidden w-full md:w-auto absolute [&>li]:py-4 bg-black bg-opacity-90 backdrop-blur-2xl border borderwhite shadow-lg border-white rounded-lg text-white [&>li]:p-4"
                    id="products-default"
                  >
                    <li>
                      <a href="/buy/testo-plus">Testo Plus</a>
                    </li>
                    <li>
                      <a href="/buy/cartilago">Cartilago</a>
                    </li>
                    <li>
                      <a href="/buy/maca-negra">Maca Negra</a>
                    </li>
                    <li>
                      <a href="/buy/psyllium">Psyllium</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="/contact"
                    class="block py-2 pl-3 pr-4 text-white rounded bg-transparent"
                  >
                    CONTACTO
                  </a>
                </li>
              </ul>
              <section
                class="flex gap-4 ml-auto justify-center items-center"
                id="authsection"
              >
                {DetectUser() ? (
                  <button
                    onClick={Logout}
                    class="bg-red-500 px-4 py-2 rounded-lg"
                  >
                    Logout
                  </button>
                ) : (
                  <>
                    <a
                      href="/register"
                      className="bg-green-500 px-4 py-2 rounded-lg"
                    >
                      Registro
                    </a>
                    <a href="/login" class="bg-green-500 px-4 py-2 rounded-lg">
                      Login
                    </a>
                  </>
                )}
              </section>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}
