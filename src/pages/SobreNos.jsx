import React from 'react'
import Nav from '../components/Nav'
import Slider from '../components/Slider'
import Footer from '../components/Footer'

export default function SobreNos() {
  return (
    <body>
    <Nav/>
        <main className='bg-bege text-text-preto  items-center flex justify-center min-h-screen '>
        
            <Slider/>
            
        </main>
        <Footer/>
    </body>
  )
}
