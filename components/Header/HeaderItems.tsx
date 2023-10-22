"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import {twMerge} from 'tailwind-merge'
import { HeaderDataItems } from './HeaderData';
import { IconBaseProps, IconType } from 'react-icons';
import SearchSideOver from '../SideOver';
import {BiSearch} from 'react-icons/bi'
import {CgProfile} from 'react-icons/cg'
import {GrFavorite} from 'react-icons/gr'
import {PiShoppingCart} from 'react-icons/pi'

interface HeaderItemsProps {
    headerData: HeaderDataItems[];
}

const iconComponents: { [key: string]: React.ComponentType<IconBaseProps> } = {
  BiSearch,
  CgProfile,
  PiShoppingCart,
};

const HeaderItems: React.FC<HeaderItemsProps> = ({headerData}) => {
  const iconSize = 18;
  const [searchBtn, isSearchBtn] = useState(false);
  const handleClick = (label: string) => {
    if(label === 'Search'){
      isSearchBtn(!searchBtn);
      console.log(searchBtn)
    }
  }
  const handleCloseSearchSideOver = () => {
    isSearchBtn(false); 
  };
  const customColorStyle = {
    color: 'rgb(100, 4, 5, 0.8)',
    font: '',
  };
  return (
    <>
    <div className='md:flex-col hg-full w-full cursor-pointer hover:opacity-75 transition'>
        <Link href="/">
          <h1 style={customColorStyle} className='md:text-2xl sm:text-xl font-semibold tracking-widest px-2'>Ram Collections</h1>
        </Link>
      </div>
    <div className='flex gap-5'>
      {headerData.map((item)=>(
        <div className='hover:opacity-75' onClick={() => handleClick(item.label)}>
          {item.label == 'Search' ? (
                <div
                  className={twMerge(`
                    flex flex-row h-auto items-center w-full text-md font-medium cursor-pointer py-1 sm:text-center
                  `)}
                >
                   {React.createElement(iconComponents[item.icon], { size: iconSize })}
                  {/* <p className='truncate w-full'>{item.label}</p> */}
                </div>
              ) : (
                <Link href={item.href}
                    className={twMerge(`
                      flex flex-row h-auto items-center w-full text-md font-medium cursor-pointer py-1 md:flex sm:text-center
                    `)}
                  >
                    {React.createElement(iconComponents[item.icon], { size: iconSize })}
                    {/* <p className='truncate w-full'>{item.label}</p> */}
                </Link>
              )}
    </div>
      ))}
      {searchBtn ? (<SearchSideOver onClose={handleCloseSearchSideOver}/>) : (<></>)}
      
    </div>
    </>
  )
}

export default HeaderItems
