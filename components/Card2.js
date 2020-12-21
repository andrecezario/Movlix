import React from "react";

import { BiListPlus } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineInfoCircle } from "react-icons/ai"

export default function Card1({ item }) {
  const [hoverCard, setHoverCard] = React.useState(false);

  const addFavoriteMovie = () => {
    localStorage.setItem('@movlix/favorites', JSON.stringify(item))
  }

  const addListMovie = () => {

    localStorage.setItem('@movlix/list', JSON.stringify(item))
  }

  const showDetailsMovie = () => {
    alert('Detalhes de '+ item.title)
  }

  return (
    <div className="p-2 w-52 h-72 transform hover:scale-105">
      <div
        style={{
          backgroundImage: `url(${process.env.REACT_IMAGE}original/${item.poster_path})`,
        }}
        className="w-full h-full relative bg-cover bg-center shadow-lg rounded-lg group flex justify-center items-center"
      >
        <div
          className="rounded-lg h-full w-full absolute flex justify-center items-center z-10 hover:bg-opacity-50 hover:bg-black transition-all duration-500 ease-in-out"
          onMouseEnter={() => setHoverCard(true)}
          onMouseLeave={() => setHoverCard(false)}
        >
          {hoverCard && (
            <div>
              <button
                onClick={addListMovie}
                onMouseEnter={() => setHoverCard(true)}
                className="w-full flex items-center bg-gray-800 rounded-full my-2 py-2 px-4 text-sm font-bold text-white focus:outline-none"
              >
                <BiListPlus size="24" /> Minha lista
              </button>
              <button
                onClick={addFavoriteMovie}
                onMouseEnter={() => setHoverCard(true)}
                className="w-full flex items-center bg-red-600 rounded-full my-1 py-2 px-4 text-sm font-bold text-white focus:outline-none"
              >
                <AiOutlineHeart size="24" /> Favoritos
              </button>
              <button
                onClick={showDetailsMovie}
                onMouseEnter={() => setHoverCard(true)}
                className="w-full flex items-center bg-white rounded-full my-2 py-2 px-4 text-sm font-bold text-gray-900 focus:outline-none"
              >
                <AiOutlineInfoCircle size="24" /> Detalhes
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
