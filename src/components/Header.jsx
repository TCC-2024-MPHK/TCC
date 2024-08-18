import React, {useState} from "react";
import { Link } from "react-router-dom";
import { List } from "@phosphor-icons/react";
import logo from '/logo.svg'

export default function Header() {
  const[open, setOpen] = useState(false)

  const  handleMenu = () => {
    setOpen((prev)=> !prev);
  }
  return (
    <header className=' bg-verde-header '>
      <div className=" ">
        <div className="flex items-center justify-between h-16 ">
          <div className="flex items-center">
            <a className='w-50'href="/"><img  src={logo} alt="logo" /> </a>
          </div>

          {/* links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 text-text-branco font-rem text-xs font-light"  >
              <a href="/funcionamento">Funcionamento</a>
              <a href="/sobrenos">Sobre Nós</a>
              <a href="/referencias">Referências</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}


