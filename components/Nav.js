// components/nav.js
import { React, useEffect } from "react";
import Card from "../components/Card1";
import { BsFillPlayFill, BsInfoCircle } from "react-icons/bs";
import { BiUser } from "react-icons/bi";

export default function Nav({ banner }) {
  const releaseYear = new Date(banner.release_date);

  return (
    banner && (
      <div className="bg-gray-900 shadow" style={{ height: "28rem" }}>
        <nav class="bg-gradient-to-l from-black from-gray-900 absolute top-0 right-0 w-full">
          <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div class="relative flex items-center justify-between h-16">
              <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <button
                  class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-expanded="false"
                >
                  <span class="sr-only">Abrir menu</span>
                  <svg
                    class="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  <svg
                    class="hidden h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div class="flex-shrink-0 flex items-center">
                  <img
                    class="block lg:hidden h-8 w-auto"
                    src="/images/logo.png"
                    alt="Logo"
                  />
                  <img
                    class="hidden lg:block h-8 w-auto"
                    src="/images/logo.png"
                    alt="Logo"
                  />
                </div>
                <div class="hidden sm:block sm:ml-6">
                  <div class="flex space-x-4">
                    <a
                      href="#"
                      class="bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Favoritos
                    </a>
                    <a
                      href="#"
                      class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Minha Lista
                    </a>
                  </div>
                </div>
              </div>
              <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span class="sr-only">View notifications</span>
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </button>

                <div class="ml-3 relative">
                  <div>
                    <button
                      class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      id="user-menu"
                      aria-haspopup="true"
                    >
                      <span class="sr-only">Open user menu</span>
                      {/* <img
                        class="h-8 w-8 rounded-full"
                        src="https://www.flaticon.com/svg/static/icons/svg/2922/2922506.svg"
                        alt=""
                      /> */}
                      <div class="flex items-center justify-center h-8 w-8 rounded-full text-gray-400 hover:text-white">
                        <BiUser size="24" />
                      </div>
                    </button>
                  </div>
                  {/* <div
                    class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu"
                  >
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Your Profile
                    </a>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Settings
                    </a>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Sign out
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div class="hidden sm:hidden">
            <div class="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#"
                class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </a>
              <a
                href="#"
                class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Favoritos
              </a>
              <a
                href="#"
                class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Minha Lista
              </a>
            </div>
          </div>
        </nav>
        <div
          className="bg-cover bg-center bg-no-repeat w-full h-full"
          style={{
            backgroundImage: `url(${process.env.REACT_IMAGE}original/${banner.backdrop_path})`,
          }}
        >
          <div className="flex justify-center items-center md:justify-start w-full h-full p-8 bg-opacity-70 bg-gradient-to-r from-black from-gray-900">
            <div className="hidden sm:block">
              <Card item={banner} />
            </div>
            <div className="w-96 pl-8">
              <div className="h-20">
                <p className="text-2xl text-white font-bold">{banner.title}</p>
                <div className="flex items-center mt-4">
                  <p className="text-sm text-gray-100 font-light">
                    {releaseYear.getFullYear()}
                  </p>
                  {/* <div class="w-10 h-6 ml-4 border border-gray-100 border-opacity-50"></div> */}
                </div>
              </div>
              <div className="h-32">
                <p className="text-sm text-white font-light text-justify">
                  {banner.overview}
                </p>
              </div>
              <div className="h20 flex">
                <button className="flex items-center py-2 px-2 capitalize bg-white text-gray-900 font-medium rounded-full hover:bg-gray-200">
                  <BsFillPlayFill size="24" />
                  <span className="mx-1  text-sm">Assistir</span>
                </button>
                <button className="flex items-center py-2 px-2 ml-4 capitalize bg-gray-700 text-white font-medium rounded-full hover:bg-gray-800">
                  <BsInfoCircle size="24" />
                  <span className="mx-1 text-sm">Mais informações</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
