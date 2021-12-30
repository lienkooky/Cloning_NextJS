import React from 'react';
import Head from 'next/head';

const Seo = ({ title }) => {
  return (
    <Head>
      <title>{title} | Next Moives</title>
    </Head>
  );
};

export default Seo;
