import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";
import Card from "../components/Card2";
import Nav from "../components/Nav"

export default function Favorites() {
  const favorites = useSelector((state) => state.movies.favorites);

  return (
    <div className="w-full h-full">
      <Head>
        <title>Favoritos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div className="w-full h-full flex flex-wrap justify-center p-8">
        {favorites.map((movie) => (
          <Card item={movie} />
        ))}
      </div>
    </div>
  );
}
