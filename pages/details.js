import { React, useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router'
import Nav from '../components/Nav';
import Banner from '../components/Banner2';
import { get } from '../services/api';

export default function Details() {
  const router = useRouter()
  const id = router.query.id
  const [item, setItem] = useState({})

  useEffect(async () => {
    const result = await get(`movie/${id}?api_key=${process.env.REACT_API_KEY}`)

    if (result.status === 200) {
      setItem(result.data)
    }
  }, [id])

  return Object.keys(item) && (
    <div className="w-full h-full">
      <Head>
        <title>Detalhes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div className="w-full h-full flex flex-wrap">
        <Banner banner={item} />
      </div>
    </div>
  );
}
