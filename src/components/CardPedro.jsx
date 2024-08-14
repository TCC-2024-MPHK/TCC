import icon_matheus from "/matheus.svg";
import {InstagramLogo, GithubLogo, LinkedinLogo}  from "@phosphor-icons/react";
export default function Card() {
  return (
    <div>
        <div className=" flex items-center justify-center   my-padding-text-card font-patua-one font-regular text-xl">
            <h1 >
                sobre nós
            </h1>
        </div>
    <div  className='flex justify-center items-center '>
        
        <div className='w-Card-w  h-Card-h bg-verde-claro  rounded-borda-card flex items-center justify-center  ' >
            
            <section >
                <div className="flex items-center justify-center py-5 ">
                    <img  src={icon_matheus} alt="" />
                </div>
                <div className="ps-5 px-5">
                    <h1 className="font-patua-one font-regular text-xl ">Matheus Phillipe</h1>
                    <p className=' 	text-start font-aleo font-light text-text-card pt-padding-text-card '>
                        Sou Matheus, um jovem amante do design com apenas 17 anos, mas com uma paixão inabalável e uma determinação incansável para criar experiências visuais memoráveis e de algum jeito mudar o mundo das pessoas em minha volta!
                    </p>
                </div>
                <div className="ps-5 py-padding-text-card flex ">
                    <InstagramLogo size={24} className="ps-1" />
                    <GithubLogo size={24} className="ps-1" />
                    <LinkedinLogo size={24} className="ps-1" />
                </div>
            </section>
        </div>
    </div>
    </div>
  )
}