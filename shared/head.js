import React from 'react';
import NextHead from 'next/head';

function Head({ title }) {
  return (
    <NextHead>
      <title>{title}</title>
      <link rel='icon' href='/favicon.ico' />
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link
        href='https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap'
        rel='stylesheet'
      />
      <link
        rel='preload'
        href='/fonts/Domaine-Bold.otf'
        as='font'
        crossOrigin=''
      />
      <link
        rel='preload'
        href='/fonts/GT-Walsheim-Bold.ttf'
        as='font'
        crossOrigin=''
      />
      <link
        rel='preload'
        href='/fonts/GT-Walsheim-Light.ttf'
        as='font'
        crossOrigin=''
      />
    </NextHead>
  );
}

export default Head;
