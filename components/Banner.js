import { React, useEffect } from "react";
import Card from "../components/Card1";
import { BsFillPlayFill, BsInfoCircle } from "react-icons/bs";

export default function Banner({ banner }) {
  const releaseYear = new Date(banner.release_date);
  
  return (
    <div
      className="bg-gray-900 shadow bg-gradient-to-l from-black from-gray-900 bg-cover bg-center bg-no-repeat w-full h-full"
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
            <p className="h-full break-words overflow-ellipsis overflow-hidden text-sm text-white font-light text-justify">
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
  );
}
