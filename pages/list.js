import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import Card from '../components/Card2';
import Nav from '../components/Nav';

export default function List() {
  const list = useSelector((state) => state.movies.list);

  return (
    <div className="w-full h-full">
      <Head>
        <title>Minha Lista</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div className="w-full h-full flex flex-wrap justify-start p-8">
        {list.map((movie) => (
          <Card item={movie} delist={true} />
        ))}
      </div>
    </div>
  );
}
