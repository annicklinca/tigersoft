// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react'
export default function Navbar () {
  const [small, setSmall] = useState(false)
  const handleClick = () => {
    setSmall(true)
  }
  const handleSmall = () => {
    setSmall(false)
  }
  return (
  <>
  {/* Navbar on web view */}
  <div className="relative p-2 bg-gray-100 shadow-sm">
  
    <div className="flex justify-between  items-center py-3 md:justify-start md:space-x-10">
      <div className="lg:w-0 lg:flex-1">
        <a href="/" className="flex no-underline">
          <h3 className="text-2xl text-orange-950 no-underline font-bold px-8">Tiger<span className='text-amber-600 text-sm'>Soft</span></h3>
        </a>
      </div>
      <div className="-mr-2 -my-2 md:hidden">
        <button type="button" onClick={handleClick} className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-yellow-600 hover:bg-yellow-100 focus:outline-none focus:bg-yellow-100 focus:text-yellow-600 transition duration-150 ease-in-out">
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <nav className="hidden md:flex space-x-10">
        <div className="relative">
        </div>
        <a href="/" className=" text-md font-normal  no-underline font-medium text-black hover:text-gray-200 focus:outline-none focus:text-yellow-700 transition ease-in-out duration-150">
          Home
        </a>
        <a href="/" className=" text-md font-normal  no-underline font-medium text-black hover:text-gray-200 focus:outline-none focus:text-yellow-700 transition ease-in-out duration-150">
          About 
        </a>
        <a href="/" className=" text-md font-normal  no-underline font-medium text-black hover:text-gray-200 focus:outline-none focus:text-yellow-700 transition ease-in-out duration-150">
          Services
        </a>
        <a href="/" className=" text-md font-normal  no-underline font-medium text-black hover:text-gray-200 focus:outline-none focus:text-yellow-700 transition ease-in-out duration-150">
          Portfolio
        </a>
        <a href="/" className=" text-md font-normal  no-underline font-medium text-black hover:text-gray-200 focus:outline-none focus:text-yellow-700 transition ease-in-out duration-150">
          Contactus
        </a>
        <a href="/" className="bg-amber-600 px-6 py-2  rounded-full text-md font-normal  no-underline font-medium text-white hover:text-gray-200 focus:outline-none focus:text-yellow-700 transition ease-in-out duration-150">
          Get Started
        </a>
        <div className="relative">
        </div>
      </nav>
    </div>
  </div>

{/* navbar of small devise */}

  {small
    ? <div className="relative top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
      <div className="rounded-lg shadow-lg">
        <div className="rounded-lg shadow-xs bg-white divide-y-2 divide-yellow-50">
          <div className="pt-5 pb-6 px-5 space-y-6">
            <div className="flex items-center justify-between">
              <div>
             <h4 className="text-black font-bold">TigerSoft</h4>
              </div>
              <div className="-mr-2">
                <button type="button" onClick={handleSmall} className="inline-flex items-center justify-center p-2 rounded-md text-red-500 hover:text-yellow-600 hover:bg-yellow-100 focus:outline-none focus:bg-yellow-100 focus:text-yellow-600 transition duration-150 ease-in-out">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                </button>
            </div>
          </div>
          <div>
            <nav className="grid gap-y-5">
              <a href="/" className="text-sm leading-6 font-medium text-black hover:text-red-500 focus:outline-none focus:text-yellow-700 transition ease-in-out duration-150">
               Home
              </a>
              <a href="#" className="text-sm leading-6 font-medium text-black hover:text-red-500 focus:outline-none focus:text-yellow-700 transition ease-in-out duration-150">
               About 
              </a>
              <a href="#" className="text-sm leading-6 font-medium text-gray-600 hover:text-red-500 focus:outline-none focus:text-yellow-700 transition ease-in-out duration-150">
               Services
              </a>
              <a href="#" className="text-sm leading-6 font-medium text-gray-600 hover:text-red-500 focus:outline-none focus:text-yellow-700 transition ease-in-out duration-150">
               Portfolio
              </a>
              <a href="#" className="text-sm leading-6 font-medium text-gray-600 hover:text-red-500 focus:outline-none focus:text-yellow-700 transition ease-in-out duration-150">
               Contactus
              </a>
              <a href="#" className="text-sm  leading-6 font-medium text-gray-600 hover:text-red-500 focus:outline-none focus:text-yellow-700 transition ease-in-out duration-150">
              Get Started
              </a>

            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
    : <span></span>}

</>)
}
