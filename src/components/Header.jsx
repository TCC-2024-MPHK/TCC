import React, {useState} from "react";
import { List, X } from "@phosphor-icons/react";
import logo from '/logo.svg'

export default function Header() {
  const [abrirMenu, setAbrirMenu] = useState(false)

  function handleAbrirFecharMenu(){
    if(abrirMenu === true){
      setAbrirMenu(false)
      return
    }

    setAbrirMenu(true)
  }

  return(
    <header>
      <div className="">
        <div className="flex justify-between px-6 py-2 bg-verde-header">
          <a  className='	'href="/"><img  src={logo} alt="logo" /> </a>

          <div className=" max-md:hidden text-text-branco font-rem font-light space-x-8">
            <a href="/sobrenos" >Sobre Nós</a>
            <a href="/referencias" >Referências</a>
            <a href="/funcionamento" >Funcionamento</a>
          </div>

          <button onClick={handleAbrirFecharMenu} className=" cursor-pointer md:hidden">
            {abrirMenu === true ? <X size={32} weight="bold" color="#ffff"/> : <List size={32} weight="bold" color="#ffff"/>}
          </button>
        </div>
        
        <nav className={`color-text-preto cursor-pointer  bg-verde-claro flex flex-col w-40 h-max text-center gap-4 fixed p-4 
            transition-all delay-150 rounded-md md:hidden ${abrirMenu ? "right-0" : "-right-40"}`}>
          <a href="/sobrenos">Sobre Nós</a>
          <a href="/referencias">Referências</a>
          <a href="/funcionamento">Funcionamento</a>
        </nav>

      </div>
    </header>
  )
}


