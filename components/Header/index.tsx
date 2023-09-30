import React, { useMemo } from 'react'
import HeaderItems from './HeaderItems';
import Link from 'next/link';
import HeaderData from './HeaderData';

const Header= () => {
  return (
    <div className='md:flex h-full bg-gray-200 gap-y-2 p-2'>
      <div className='flex gap-x-5 w-full justify-end'>
            <HeaderItems headerData={HeaderData}/>
      </div>
    </div>
  )
}

export default Header

