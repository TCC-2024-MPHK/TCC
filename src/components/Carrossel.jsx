
          import { Swiper,SwiperSlide } from 'swiper/react'
          import { useState } from 'react'
          import Segunda_imagem from '/imagem2-funcionamento.svg'
          import Quarta_imagem from '/imagem4-funcionamento.svg'
          

          

          export default function Slider() {
            const [slidesPerView, setSlidePerView] = useState(2)
            const data = [
                {id:1,a:Segunda_imagem,b:"Arduino-UNO" ,c:"É a placa que integra todos os sensores do projeto e interpreta o código, transformando a horta em um sistema inteligente. Ele atua como o",d:"cérebro",e:"do projeto, tomando decisões com base nas informações recebidas e acionando os atuadores para otimizar o funcionamento da horta.",f:Quarta_imagem},

                {id:2,a:Segunda_imagem,b:"Arduino-UNO" ,c:"É a placa que integra todos os sensores do projeto e interpreta o código, transformando a horta em um sistema inteligente. Ele atua como o",d:"cérebro",e:"do projeto, tomando decisões com base nas informações recebidas e acionando os atuadores para otimizar o funcionamento da horta.",f:Quarta_imagem},
            ]

            return (
              
              <div>
                <Swiper
                slidesPerView={1}
                pagination ={{clickable:true}}
          
                
                >
                  {data.map( (item) => (
                    <SwiperSlide key={item.id}>
                     
                    <img src={item.a} alt="" className=' rounded-lg  '/>
                    <h2 className='font-patua-one text-xl my-5'>{item.b}</h2>
                    <p className='mb-5 text-xs	text-justify font-aleo font-light'>{item.c} <strong className='text-verde-claro font-patua-one '> {item.d} </strong> {item.e} </p>  
                    <img src={item.f} alt="" className=' rounded-lg mb-5 pb-5  '/>

                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )
          }
          