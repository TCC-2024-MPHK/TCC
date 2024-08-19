import { Swiper,SwiperSlide } from 'swiper/react'
import { useState } from 'react'
import Segunda_imagem from '/imagem2-funcionamento.png'
import Rale from '/rale.png'
import Uv from '/sensor_UV.png'
import Bluetooh from '/bluetooh.png'
import Umidade from '/umidade.png'
          
  
          

          export default function Slider() {
            const [slidesPerView, setSlidePerView] = useState(2)
            const data = [
                {id:1,a:Segunda_imagem,b:"Arduino-UNO" ,c:"É a placa que integra todos os sensores do projeto e interpreta o código, transformando a horta em um sistema inteligente. Ele atua como o",d:"cérebro",e:"do projeto, tomando decisões com base nas informações recebidas e acionando os atuadores para otimizar o funcionamento da horta."},

                {id:2,a:Rale,b:"Módulo Relé" ,c:"serve como",d:"ponte",e:"do nosso projeto, adaptando a voltagem para que possamos usar bombas d'água ou abrir o teto com um servo motor."},

                {id:3,a:Uv,b:"Sensor Uv",c:"esse sensor e capaz de",d:"identificar a intensidade dos raios solares",e:"por meio de radiação ultra violeta, graças a ele o projeto pode se adequar a qualquer planta independente se ela precisa de muita ou pouca luz solar."},
                
                {id:4,a:Bluetooh,b:"Módulo Bluetooh" ,c:"este módulo faz a conecção com o ",d:"aplicativo",e:"permitindo que o usuário configure cada hortaliça separadamente por meio do seu smarthphone."},

                {id:5,a:Umidade,b:"Sensor de umidade do solo" ,c:"este sensor mede a umidade do solo, permitindo que a ",d:"irrigaçao da terra seja feita automaticamente",e:" conforme a terra vai ficando mais seca."},
            ]

            return (
              
              <div>
    <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
    >
        {data.map((item) => (
            <SwiperSlide key={item.id}>
                <img src={item.a} alt="" className='rounded-lg mx-auto lg:w-4/5 px-5 pb-5' />
                <h2 className='font-patua-one text-xl my-5 lg:px-36'>{item.b}</h2>
                <p className='pb-5 mb-7 text-xs text-justify font-aleo font-light lg:px-36'>
                    {item.c} <strong className='text-verde-claro font-patua-one'>{item.d}</strong> {item.e}
                </p>
            </SwiperSlide>
        ))}
    </Swiper>
</div>

            )
          }
          