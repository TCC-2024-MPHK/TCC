import { Swiper,SwiperSlide } from 'swiper/react'



import C from './Card'
import P from './CardPedro'
import K from './CardKaike'
import H from './CardHenrique'

const data = []
export default function Slider() {

  const data = [
    {id:1,card:<C/>},
    {id:2,card:<P/>},
    {id:3,card:<K/>},
    {id:4,card:<H/>},
  ]

  return (
    
    <div>
      <Swiper
      slidesPerView={1}
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
