import Head from 'next/head'
// import Image from 'next/image'
import Script from 'next/script'

import React, { useState } from 'react';
import Swal from 'sweetalert2'

import NavHero from '../Components/NavHero';
import Content from '../Components/Content';
import Content2 from '../Components/Content2';
import Footer from '../Components/Footer';
import Loader from '../Components/Loader';





export default function Home() {

  const [footView, setFootView] = useState(false)

 


  return (
    <div className="App">
   
      <Script src="https://kit.fontawesome.com/4cec584173.js" crossOrigin="anonymous"></Script>
      <Head>
        <title>Paperpillar by Agustin Mac Rae</title>
        <meta name="description" content="Landing page clone,by frontend developer Agustin Mac Rae" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Loader />
      <NavHero footView={footView} alert={alert} />
      <div className='backshadow'>
        <Content />
        <Content2 />
      </div>
      <Footer setFootView={setFootView} alert={alert} />
    </div>
  )
}
