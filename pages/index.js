import { React, useEffect, useState } from "react";
import Head from "next/head";
import Nav from "../components/Nav";
import Card from "../components/Card2";
import { get } from "../services/api";

export default function Home() {
  const [banner, setBanner] = useState({});
  const [movies, setMovies] = useState([]);

  useEffect(async () => {
    const retorno = await get(
      `movie/popular?api_key=${process.env.REACT_API_KEY}&language=pt-BR&page=1`
    );
    if (retorno.status === 200) {
      setMovies(retorno.data.results);
      setBanner(retorno.data.results[0]);
    }
  }, []);

  return (
    <div className="bg-gray-900">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav banner={banner} />

      <div class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {movies.map((item) => (
          <div className="flex justify-center">
            <Card item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
