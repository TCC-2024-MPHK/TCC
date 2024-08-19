import { Swiper,SwiperSlide } from 'swiper/react'
import { useState, useEffect } from 'react'

import C from './Card'
import P from './CardPedro'
import K from './CardKaike'
import H from './CardHenrique'


export default function Slider() {
  const [slidesPerView, setSlidePerView] = useState(2)
  const data = [
    {id:1,card:<C/>},
    {id:2,card:<P/>},
    {id:3,card:<K/>},
    {id:4,card:<H/>},
  ]

  useEffect(() =>{

    function handleResize(){
      if(window.innerWidth < 768){
          setSlidePerView(1);
      } else if(window.innerWidth >= 768 && window.innerWidth < 1024){
          setSlidePerView(2);
      } else {
          setSlidePerView(3);
      }
  }

    handleResize();

    window.addEventListener("resize",handleResize)

    return () =>{
      window.removeEventListener("resize",handleResize)
    }
  }, [])

  return (
    
    <div className=' pt-12'>
      <Swiper
      slidesPerView={slidesPerView}
      pagination ={{clickable:true}}

      
      >
        {data.map( (item) => (
          <SwiperSlide key={item.id}>
            {item.card}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
