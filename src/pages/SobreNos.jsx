import React from 'react'
import Header from '../components/Header'
import Slider from '../components/Slider'
import Footer from '../components/Footer'




export default function SobreNos() {
  return (
  <body>
    <Header/>
    <section className='bg-bege min-h-screen color-text-preto'>
      <h1 className='font-patua-one text-4xl px-8 text-center pt-12'>Sobre nós</h1>

      <Slider></Slider>
    </section>

    
      
    
    <Footer></Footer>
  </body>
  )
}
