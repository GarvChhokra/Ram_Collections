import Link from 'next/link';
import React from 'react';
import {AiOutlineInstagram, AiFillFacebook} from "react-icons/ai"

const Footer = () => {
  const customColorStyle = {
    color: 'rgb(100, 4, 5, 0.8)',
    font: '',
  };
  return (
    <div className='bg-gray-200'>
    <footer>
  <div className="mx-auto w-full max-w-screen-xl">
    <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
      <div>
        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
          Company
        </h2>
        <ul className="text-gray-500 dark:text-gray-400 font-medium">
          <li className="mb-4">
            <Link href="/about" className=" hover:underline">
              About
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/store-locator" className="hover:underline">
              Store Locator
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
          Help center
        </h2>
        <ul className="text-gray-500 dark:text-gray-400 font-medium">
          <li className="mb-4">
            <a href="/contact-us" className="hover:underline">
              Contact Us
            </a>
          </li>
          <li className="mb-4">
            <Link href="/delivery-information" className="hover:underline">
              Delivery Information
            </Link>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:underline">
              Track Order
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
          Legal
        </h2>
        <ul className="text-gray-500 dark:text-gray-400 font-medium">
          <li className="mb-4">
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/terms&condition" className="hover:underline">
              Terms &amp; Conditions
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/shipping-policy" className="hover:underline">
              Shipping Policy
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
          Extras
        </h2>
        <ul className="text-gray-500 dark:text-gray-400 font-medium">
          <li className="mb-4 text-yellow-300 underline text-xl bg-red-500 p-2 w-20 text-center rounded-full inline-block animate-bounce">
            <a href="#" className="">
              Sale
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:underline">
              Sign Up for Email
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="px-4 py-6 gray-700 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
        © 2023 <Link href="/">
          Ram Collection
          </Link>. All Rights
        Reserved.
      </span>
      <div className="flex mt-4 space-x-5 sm:justify-center md:mt-0">
        <Link
          href="#"
          className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
        >
          <AiOutlineInstagram size={20}/>
        </Link>
        <Link
          href="#"
          className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
        >
          <AiFillFacebook size={20}/>
        </Link>
        
      </div>
    </div>
  </div>
</footer>
</div>

  )
}

export default Footer
