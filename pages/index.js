import { React, useEffect, useState } from "react";
import Head from "next/head";
import Nav from "../components/Nav";
import Card from "../components/Card2";
import Carousel from "../components/Carousel";
import Banner from "../components/Banner"

import { get } from "../services/api";

export default function Home() {
  const [banner, setBanner] = useState({});
  const [popular, setPopular] = useState([]);
  const [releases, setReleases] = useState([]);

  useEffect(async () => {
    const resultPopular = await get(
      `movie/popular?api_key=${process.env.REACT_API_KEY}&language=pt-BR&page=1`
    );

    const resultReleases = await get(
      `movie/now_playing?api_key=${process.env.REACT_API_KEY}&language=pt-BR&page=1`
    );

    if (resultPopular.status === 200) {
      setPopular(resultPopular.data.results);
      setBanner(resultPopular.data.results[3]);
    }

    if (resultReleases.status === 200) {
      setReleases(resultReleases.data.results);
    }
  }, []);

  return (
    <div className="w-full h-full">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <Banner banner={banner} />

      {popular?.length && (
        <Carousel items={popular} title="Populares" infinite={true} />
      )}

      {releases?.length && (
        <Carousel items={releases} title="Novidades" infinite={true} />
      )}
    </div>
  );
}
