import {InstagramLogo, GithubLogo, LinkedinLogo}  from "@phosphor-icons/react";
import icon_matheus from "/matheus.svg";


export default function Card() {
  return (
    <section className=' mx-auto w-Card-w  h-Card-h bg-verde-claro mb-10 rounded-borda-card  items-center justify-center'>
        <div className='flex items-center justify-center'>
        <img className ='pt-5'src={icon_matheus} alt="" />
        </div>
        <p className='font-patua-one text-xl px-8 text-center pt-5 mb-5'>Kaike Machado</p>
        <p className=' px-5 text-justify font-aleo font-light text-text-card  '>
        Sou Kaike, estudante de 17, responsável pela parte de robótica do projeto. Mesmo com pouca idade possuo uma paixão inabalável pela área e uma determinação incansável para criar experiências memoráveis.  </p>
        

        <div className="ps-5 py-padding-text-card  flex ">
                    <InstagramLogo size={24} className="ps-1" />
                    <GithubLogo size={24} className="ps-1" />
                    <LinkedinLogo size={24} className="ps-1" />
                </div>
      </section>
  )
}
