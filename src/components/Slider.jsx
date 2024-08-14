import React from 'react'

import { Swiper,SwiperSlide } from 'swiper/react'
import Card from './Card'
import CardKaike from './CardKaike'
import CardPedro from './CardPedro'
export default function Slider() {

    const data =[
        {id:'1', div:<Card/>},
        
    ]
        
    
   
  return (
    <div>
       
        <Swiper>
            {data.map( ( item)=>(
                <SwiperSlide>
                    {item.div}
                </SwiperSlide>
            ))}
        </Swiper>

    </div>
  )
}
