"use client"
import React, { useMemo } from 'react'
import HeaderItems from './HeaderItems';
import Link from 'next/link';
import HeaderData from './HeaderData';

const Header= () => {
  const customColorStyle = {
    color: 'rgb(100, 4, 5, 0.8)',
    font: '',
  };
  return (
    <div className='md:flex h-full bg-gray-200 gap-y-2 p-2'>
      <div className='md:flex-col hg-full w-full cursor-pointer hover:opacity-75 transition'>
        <Link href="/">
          <h1 style={customColorStyle} className='md:text-2xl sm:text-xl font-semibold tracking-widest px-2'>Ram Collections</h1>
        </Link>
      </div>
      <div className='flex gap-x-5 w-full justify-end'>
            <HeaderItems headerData={HeaderData}/>
      </div>
    </div>
  )
}

export default Header

