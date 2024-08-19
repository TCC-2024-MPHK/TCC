import {InstagramLogo, GithubLogo, LinkedinLogo}  from "@phosphor-icons/react";
import icon_henrique from "/henrique.svg";


export default function Card() {
  return (
    <section className=' mx-auto w-Card-w  h-Card-h bg-verde-claro mb-10 rounded-borda-card  items-center justify-center'>
        <div className='flex items-center justify-center'>
        <img className ='pt-5'src={icon_henrique} alt="" />
        </div>
        <p className='font-patua-one text-xl px-8 text-center pt-5 mb-5'>Henrique Silva</p>
        <p className=' px-5 text-justify font-aleo font-light text-text-card  '>
                        Sou Matheus, um jovem amante do design com apenas 17 anos, mas com uma paixão inabalável e uma determinação incansável para criar experiências visuais memoráveis e de algum jeito mudar o mundo das pessoas em minha volta!
        </p>
        

        <div className="ps-5 py-padding-text-card  flex ">
                    <InstagramLogo size={24} className="ps-1" />
                    <GithubLogo size={24} className="ps-1" />
                    <LinkedinLogo size={24} className="ps-1" />
                </div>
      </section>
  )
}
