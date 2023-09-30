import React from 'react';
import Link from 'next/link';
import { AiOutlineInstagram, AiFillFacebook } from "react-icons/ai";
import { FooterDataProps } from './FooterData';
import ModalSignUp from '../Modal-EmailSignUp';

interface FooterItemsProps {
  footeritems: FooterDataProps[];
}

const FooterItems: React.FC<FooterItemsProps> = ({ footeritems }) => {
  const customColorStyle = {
    color: 'rgb(100, 4, 5, 0.8)',
    font: '',
  };

  return (
    <div className='bg-gray-200'>
      <footer>
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            {footeritems.map((itm) => (
              <div key={itm.title}>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  {itm.title}
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  {itm.labels.map((lbl) => (
                    <li key={lbl.name} className="mb-4">
                      <Link href={lbl.href} className="hover:underline">
                        {lbl.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Extras
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4 text-yellow-300 underline text-xl bg-red-500 p-2 w-20 text-center rounded-full inline-block animate-bounce">
                  <Link href={"/category/Sale"} className="">
                    Sale
                  </Link>
                </li>
                <li className="mb-4">
                    <ModalSignUp/>
                </li>
              </ul>
            </div>
          </div>
          <div className="px-4 py-6 gray-700 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
              © 2023 <Link href="/">Ram Collection</Link>. All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-5 sm:justify-center md:mt-0">
              <Link
                href="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <AiOutlineInstagram size={20} />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <AiFillFacebook size={20} />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterItems;
