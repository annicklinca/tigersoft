// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import Logo from '../../../images/oasislogs1.png'
export default function Laftbar () {
  
  const [small, setSmall] = useState(false)
  const handleClick = () => {
    setSmall(true)
  }
  const handleSmall = () => {
    setSmall(false)
  }
  return (<>
        <div className="md:flex flex-col md:flex-row md:min-h-screen w-full">
            <div className="flex flex-col w-full md:w-full text-gray-700 bg-amber-600 flex-shrink-0">
                <div className="flex-shrink-0 border-b-2 border-gray-300 px-8 py-4 flex flex-row items-center justify-between py-4">
                    <div className="">
                        <a href="/home" className="text-lg mb-16 font-bold tracking-widest   rounded-lg text-white focus:outline-none focus:shadow-outline">
                          <h1>TigerSoft</h1>
                        </a>
                    </div>
                    <div className="md:hidden">
                        <button type="button" onClick={handleClick} className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-yellow-600 hover:bg-yellow-100 focus:outline-none focus:bg-yellow-100 focus:text-yellow-600 transition duration-150 ease-in-out">
                            {/* <!-- Heroicon name: menu --> */}
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
                <hr className="text-xl text-gray-600 font-bold" />
                <nav className="hidden md:flex-grow lg:flex-grow w-full md:block px-4 pb-4 md:pb-0 md:overflow-y-auto py-2">
                    <h3 className="font-bold text-md text-gray-800">Technician page</h3>
                  <a href="" className="block p-2 mt-2 text-md font-semibold text-white mt-1 border-b-2 rounded  hover:shadow-lg hover:border-blue-400 focus:bg-red-200 focus:text-white hover:text-white text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none">
                     Clients
                    </a>
                  <a href="" className="block p-2 mt-2 text-md font-semibold text-white mt-1 border-b-2 rounded hover:shadow-lg hover:border-yellow-500 focus:bg-red-200 focus:text-white hover:text-white text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none">
                    Accepted Requests
                    </a>
                    <a href="" className="block p-2 mt-2 text-md font-semibold text-white mt-1 border-b-2 rounded hover:shadow-lg hover:border-green-500 focus:bg-red-200 focus:text-white hover:text-white text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none">
                     Pending Requests
                    </a>
                  <a href="" className="block p-2 mt-2 text-md font-semibold text-white mt-1 border-b-2 rounded hover:shadow-lg hover:border-red-400 focus:bg-red-200 focus:text-white hover:text-white text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none">
                      Verified
                    </a>
                  
                  <a  className="block cursor-pointer p-2 mt-2 text-md font-semibold text-white mt-1 border-b-2 rounded hover:shadow-lg hover:border-gray-900 focus:bg-red-200 focus:text-white hover:text-white text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none">
                  Log Out
                    </a>
                </nav>
                {small
                  ? <div data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="500" className="relative bg-gray-100 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                        <div className="">
                            <div className="rounded-md divide-y-2">
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
                                            <a href="/home" className="text-sm leading-6 font-medium text-gray-600 hover:text-red-500 focus:outline-none focus:text-yellow-700 transition ease-in-out duration-150">
                                                Clients
                                            </a>
                                          <a href="" className="text-sm leading-6 font-medium text-gray-600 hover:text-red-500 focus:outline-none focus:text-yellow-700 transition ease-in-out duration-150">
                                                Accepted Requests
                                            </a>
                                            <a href="" className="text-sm leading-6 font-medium text-gray-600 hover:text-red-500 focus:outline-none focus:text-yellow-700 transition ease-in-out duration-150">
                                                Pending Requests
                                            </a>
                                            <a href="" className="text-sm leading-6 font-medium text-gray-600 hover:text-red-500 focus:outline-none focus:text-yellow-700 transition ease-in-out duration-150">
                                                Verified
                                            </a>
                                           
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  : <span></span>}
            </div>
        </div>
    </>)
}
