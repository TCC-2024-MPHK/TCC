import React, {useState} from "react";
import { Link } from "react-router-dom";
import { List } from "@phosphor-icons/react";
import logo from '/logo.svg'

export default function Header() {
  const[open, setOpen] = useState(false)

  const  handleMenu = () => {
    setOpen((prev)=> !prev);
    console.log(open);
  }
  return (
    <header className=' bg-verde-header '>
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16 ">
          <div className="flex items-center">
            <a className=''href="/"><img  src={logo} alt="logo" /> </a>
          </div>

          <div className="-mr-2 md:hidden  flex items-center " >
          
          <List onClick={(handleMenu)} size={24} color="#fff"/>
          
        </div>
          {/* links */}
          <div className="hidden md:block text-xl">
            <div className="ml-10 flex items-baseline  space-x-8 text-text-branco font-rem font-light "  >
              <a href="/sobrenos" className="hover:bg-">Sobre Nós</a>
              <a href="/referencias" className="">Referências</a>
              <a href="/funcionamento" className="">Funcionamento</a>
            </div>
          </div>
        </div>
      </div>
      {/* mobile menu */}

      {open ? (
        <div className="md:hidden flex bg-bege ">
          <div className=" pt-2 pb-3 space-y-1 sm:px-3 items-baseline  space-x-8 text-text-preto font-rem font-light ">
              <a href="/sobrenos" className="block px-3 pb-2">Sobre Nós</a>
              <a href="/referencias" className="block px-3 pb-2">Referências</a>
              <a href="/funcionamento" className="block px-3 pb-2">Funcionamento</a>
          </div>

        </div>
      ) : null}

    </header>
  )
}


