import Link from 'next/link'
import React, { useState } from 'react'
import {twMerge} from 'tailwind-merge'
import { HeaderDataItems } from './HeaderData';
import { IconBaseProps, IconType } from 'react-icons';
import SearchSideOver from '../SideOver';

interface HeaderItemsProps {
    headerData: HeaderDataItems[];
}

const HeaderItems: React.FC<HeaderItemsProps> = ({headerData}) => {
  const [searchBtn, isSearchBtn] = useState(false);
  const getIconComponent = (icon: IconType, size: IconBaseProps['size']) =>{
    const IconComponent = icon;
    return <IconComponent size={size} />
  }
  const handleClick = (label: string) => {
    if(label === 'Search'){
      isSearchBtn(!searchBtn);
      console.log(searchBtn)
    }
  }
  const handleCloseSearchSideOver = () => {
    isSearchBtn(false); 
  };
  return (
    <div className='flex gap-5'>
      {headerData.map((item)=>(
        <div className='hover:opacity-75' onClick={() => handleClick(item.label)}>
          {item.label === 'Search' ? (
                <div
                  className={twMerge(`
                    flex flex-row h-auto items-center w-full text-md font-medium cursor-pointer py-1 md:flex sm:text-center
                  `)}
                >
                  {getIconComponent(item.icon, 25)}
                  <p className='truncate w-full'>{item.label}</p>
                </div>
              ) : (
                <Link href={item.href}
                    className={twMerge(`
                      flex flex-row h-auto items-center w-full text-md font-medium cursor-pointer py-1 md:flex sm:text-center
                    `)}
                  >
                    {getIconComponent(item.icon, 25)}
                    <p className='truncate w-full'>{item.label}</p>
                    
                </Link>
              )}
    </div>
      ))}
      {searchBtn ? (<SearchSideOver onClose={handleCloseSearchSideOver}/>) : (<></>)}
      
    </div>
  )
}

export default HeaderItems
