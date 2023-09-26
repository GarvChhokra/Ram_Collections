import React from 'react'
import NavbarContent from './NavbarContent'
import navbar_items from './navbar_items'

const Navbar = () => {
  return (
    <div className='my-2 sticky top-0 items-center justify-center left-0 right-0 z-10 shadow-lg backdrop-blur-sm'>
      <NavbarContent navbarContent={navbar_items}/>
    </div>
  )
}

export default Navbar
