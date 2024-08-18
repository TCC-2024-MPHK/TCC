import React from 'react'
import Nav from '../components/Nav'
import Slider from '../components/Slider'
import Footer from '../components/Footer'




export default function SobreNos() {
  return (
  <body>
    <Nav></Nav>
    <main className='bg-bege text-text-preto  items-center  justify-center min-h-screen  '>
    <h1 className='font-patua-one text-xl px-8 text-center pt-5 mb-5'>Sobre Nós</h1>

    <Slider></Slider>
      
    </main>
    <Footer></Footer>
  </body>
  )
}
