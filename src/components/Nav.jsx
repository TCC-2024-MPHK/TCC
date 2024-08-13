import React from 'react'
import { List } from "@phosphor-icons/react";
import logo from '/logo.svg'

function Nav() {
  return (
    <header className='items-center bg-verde-header h-10 flex justify-between px-8 py-0.5 rounded-b-lg '>
      
      <img className='mb-0.5' src={logo} alt="" />
      
      <List  size={24} color="#fff"  />
      
    </header>
  )
}

export default Nav