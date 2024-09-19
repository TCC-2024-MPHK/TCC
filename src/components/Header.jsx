import React, {useState} from "react";
import { Link } from "react-router-dom";
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
          <a className=''href="/"><img  src={logo} alt="logo" /> </a>
          <button onClick={handleAbrirFecharMenu}>
            {abrirMenu === true ? <X size={32} weight="bold" color="#ffff"/> : <List size={32} weight="bold" color="#ffff"/>}
          </button>
        </div>
        
        <nav className={`  bg-verde-header flex flex-col w-60 h-max text-center gap-5 fixed p-4 right-[${abrirMenu === true ? "0" : "-15rem"}] `}>
          <a href="/sobrenos" >Sobre Nós</a>
          <a href="/referencias" >Referências</a>
          <a href="/funcionamento" >Funcionamento</a>
        </nav>

      </div>
    </header>
  )
}


