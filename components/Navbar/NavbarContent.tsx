import React from 'react'
import { NavbarData } from './navbar_items'
import Link from 'next/link';

interface NavbarContentProps {
    navbarContent: NavbarData[];
}

const NavbarContent:React.FC<NavbarContentProps> = ({navbarContent}) => {
  return (
    <div className='flex items-center justify-center'>
      {navbarContent.map((item, index) => (
            <Link href={`/category/${item.title}`}>
                <div key={index} className='p-4 md:mx-3 tracking-wide font-semibold hover:underline hover:opacity-75'>
                    <p>{item.title}</p>
                </div>
                </Link>
                ))}
    </div>
  )
}

export default NavbarContent
