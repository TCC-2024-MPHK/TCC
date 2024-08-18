import {InstagramLogo, GithubLogo, LinkedinLogo}  from "@phosphor-icons/react";
import icon_pedro from "/pedro.svg";


export default function Card() {
  return (
    <section className=' mx-auto w-Card-w  h-Card-h bg-verde-claro  rounded-borda-card  items-center justify-center'>
        <div className='flex items-center justify-center'>
        <img className ='pt-5'src={icon_pedro} alt="" />
        </div>
        <p className='font-patua-one text-xl px-8 text-center pt-5 mb-5'>Pedro Vito de Oliveira</p>
        <p className=' px-5 text-justify font-aleo font-light text-text-card '>
        Sou Pedro, estudante de 18, responsável pela parte de web do projeto. Mesmo com pouca experiencia possuo uma vontade imensa de prender novas linguagems e meios para aperfeiçoa meu conhecimento. Com vontade e esforço posso ir a qualquer lugar!</p>
        

        <div className="ps-5 py-padding-text-card flex ">
                    <InstagramLogo size={24} className="ps-1" />
                    <GithubLogo size={24} className="ps-1" />
                    <LinkedinLogo size={24} className="ps-1" />
                </div>
      </section>
  )
}
