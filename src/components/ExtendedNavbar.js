import React from 'react'
import Navbar from './Navbar'

const ExtendedNavbar = () => {
  return (
    <header className='flex align-middle text-white justify-center pt-5 pb-5 gap-40 bg-indigo-950'>
        <h1 className=' font-semibold text-4xl'>Paawanjot Kaur</h1>
        <Navbar/>
    </header>
  )
}

export default ExtendedNavbar