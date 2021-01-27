import React from 'react';
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../store/ducks/movies';

import { BiListPlus, BiListMinus } from 'react-icons/bi';
import { AiOutlineHeart, AiFillHeart, AiOutlineInfoCircle } from 'react-icons/ai';

import Link from 'next/link'

export default function Card1({ item, disfavor = false, delist = false }) {
  const [hoverCard, setHoverCard] = React.useState(false);
  const dispatch = useDispatch();
  const router = useRouter()

  const addFavoriteMovie = () => {
    if (disfavor) {
      dispatch(actions.disfavor(item.id))
    } else {
      dispatch(actions.favor(item));
    }
  };

  const addListMovie = () => {
    if (delist) {
      dispatch(actions.rmList(item.id));
    } else {
      dispatch(actions.addList(item));
    }
  };

  const showDetailsMovie = () => {
    router.push({
      pathname: '/details/[movie]',
      query: { movie: item },
    })
  };

  return (
    <div className="p-2 w-52 h-72 transform hover:scale-105">
      <div
        style={{
          backgroundImage: `url(${process.env.REACT_IMAGE}original/${item.poster_path})`
        }}
        className="w-full h-full relative bg-cover bg-center shadow-lg rounded-lg group flex justify-center items-center">
        <div
          className="rounded-lg h-full w-full absolute flex justify-center items-center z-10 hover:bg-opacity-50 hover:bg-black transition-all duration-500 ease-in-out"
          onMouseEnter={() => setHoverCard(true)}
          onMouseLeave={() => setHoverCard(false)}>
          {hoverCard && (
            <div>
              <button
                onClick={addListMovie}
                onMouseEnter={() => setHoverCard(true)}
                className="w-full flex items-center bg-gray-800 rounded-full my-2 py-2 px-4 text-sm font-bold text-white focus:outline-none">
                {delist ? <BiListPlus size="24" /> : <BiListMinus size="24" />} {delist ? 'Remover' : 'Minha lista'}
              </button>
              <button
                onClick={addFavoriteMovie}
                onMouseEnter={() => setHoverCard(true)}
                className="w-full flex items-center bg-green-500 rounded-full my-1 py-2 px-4 text-sm font-bold text-white focus:outline-none">
                {disfavor ? <AiFillHeart size="24" /> : < AiOutlineHeart size="24" />} {disfavor ? 'Desfavoritar' : 'Favoritos'}
              </button>
              <Link
                href={{
                  pathname: `/details`,
                  query: { id: item.id },
                }}
              >
                <button
                  onMouseEnter={() => setHoverCard(true)}
                  className="w-full flex items-center bg-white rounded-full my-2 py-2 px-4 text-sm font-bold text-gray-900 focus:outline-none">
                  <AiOutlineInfoCircle size="24" /> Detalhes
                            </button></Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
