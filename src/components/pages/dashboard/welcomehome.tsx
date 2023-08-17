
// eslint-disable-next-line no-use-before-define
import React, { useState, useEffect } from 'react'
import Group from '../../../images/Group.svg'
export default function WelcomeHome () {
  
  return (
     <>
     <div className="p-2">
        <div className="flex flex-wrap md:min-h-screen">
          <div className="w-full  md:w-2/3 p-4">
            <div className="flex flex-wrap">
              <div className="w-1/2 flex flex-wrap">
                <img src="" className="w-8 h-8" alt="" />
                <span className="ml-2 text-xl pt-2 font-bold text-yellow-800">
                  Welcome 
                </span>
              </div>
              <div className="w-1/2">
                {/* <span className="text-blue-600 font-bold rounded-full float-right">
                  <a href="" className="mr-2"><i className="fa fa-cogs text-green-400 font-bold p-2 border-2 rounded-full border-green-400 hover:bg-green-400 hover:text-white"></i></a>
                  <a onClick={handleLogout}><i className="cursor-pointer fa fa-sign-out text-gray-800 font-bold  p-2 border-2 rounded-full border-gray-700 hover:bg-gray-700 hover:text-white"></i></a>
                </span> */}
              </div>
            </div>
            <div className="grid">
              {/* <span className="text-md font-semibold text-gray-900 my-2">You are earned USD </span> */}
            </div>
            <div className="pt-4">
              <span className="text-xs font-bold text-gray-900 mr-4">REPORT STATS</span>
              <span className="text-xs font-bold text-gray-700">Last 30 days <i className="fa fa-arrow-circle-down mx-2 text-blue-500 text-xl"></i></span>
              <div className="flex flex-wrap">
                <div className="w-full md:w-2/3 lg:w-2/3">
                  <div className="border-2 border-gray-300 rounded-3xl p-4 my-4">
                    
                  </div>
                </div>
                <div className="w-full p-4 md:w-1/3 lg:w-1/3">
                  <span className="text-xs font-bold text-green-700">Last Requests <i className="fa fa-arrow-circle-down mx-2 text-green-500 text-xl"></i></span>
                  
                 <div  className="w-full mt-2">
                   <div className="bg-gray-200 shadow-md rounded-lg w-64">
                      <div className="py-2 px-4">
                        <span className="font-bold text-gray-800 text-lg"></span>
                        <div className="flex flex-wrap">
                          <div className="w-2/3 text-md text-gray-600 font-light">
                            
                          </div>
                          <div className="w-1/3 text-md text-green-600 font-bold">
                           
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                      
                </div>
              </div>
            </div>
            <div className="flex flex-wrap">

              <div className="w-full md:w-1/3 lg:w-1/3">
                <div className="border-2 border-gray-300 rounded-3xl p-4">
                  <span className="text-xs font-bold text-gray-900">Approved Requests </span>

                  <div className="w-full">
                 
                  </div>
                  {/* <div className="flex flex-wrap">
                    <div className="w-1/2 p-2 grid">
                      <i className="fa fa-circle text-green-500 text-xl font-bold"> 68</i>
                      <span className="font-bold text-sm text-green-500">Successfull</span>
                    </div>
                    <div className="w-1/2 p-2 grid">
                      <i className="fa fa-circle text-gray-500 text-xl font-bold"> 32</i>
                      <span className="font-bold text-sm text-gray-500">Unsuccessfull</span>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="w-full md:w-2/3 lg:w-2/3">
                <div className="border-2 border-gray-300 rounded-3xl p-4 ml-4">
                  <span className="text-xs font-bold text-gray-900">Pending Requests</span>
                  <div className="w-full">

                      <div>

                        <div className=" flex flex-wrap items-center py-1 bg-white border w-full rounded-lg border-gray-200 mb-2">
                          <div className="w-3/6 md:w-3/6 px-6 py-2 text-left salarium-text-sm font-bold ">
                            <div className="flex flex-wrapy items-center">
                              <input type="checkbox" /> <p className="ml-3 pt-1">Id</p>
                             
                            </div>
                          </div>
                          <div className="w-1/6 px-6 py-2 text-left salarium-text-sm font-bold  ">
                            <p className="pt-1">Name</p>
                          </div>
                          <div className="w-1/6 px-6 py-2 text-left salarium-text-sm font-bold  ">
                            <p className="pt-1">Issue</p>
                          </div>
                        </div>
                       
                            <div  className=" border rounded-lg border-gray-100  mb-2">
                              <div className="flex flex-wrap items-center py-2 bg-white rounded-lg w-full  ">
                                <div className="w-3/6 md:w-3/6 px-6  text-left salarium-text-sm font-bold ">
                                  <div className="flex flex-wrapy items-center">
                                    <input type="checkbox" className="mr-3" />
                                    <div className="flex flex-wrap items-center ">
                                      <div className="flex-shrink-0 h-8 w-8">
                                        <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="" />
                                      </div>
                                      <div className="ml-4">
                                        <div className="text-sm font-medium text-gray-900">
                                         
                                        </div>
                                        <div className="text-sm text-gray-500">
                                        
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="w-1/6 px-6 py-2 text-left salarium-text-sm font-bold  ">
                                  <p className="text-xs">2</p>
                                </div>
                                <div className="w-1/6 px-6 py-2 text-left salarium-text-sm font-bold  ">
                                  <p className="text-xs">linca</p>
                                  <p className="text-xs">pc breakdown</p>
                                </div>
                              </div>

                            </div>
                       
                       
                      </div>
                       <p className="max-w-sm mx-auto font-bold flex justify-center
           items-center text-center  mt-24 text-xl">There’s no Denied Requests </p>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full  md:w-1/3 bg-gray-100 p-4 md:min-h-screen -h-screen h-screen">
            <div className="">
              <div className="w-80 bg-red-200 rounded-3xl m-auto max-w-sm">
                {/* <img src={Group} className="w-full mt-600" alt="" /> */}
        <div className="bg-white shadow-lg rounded-b-3xl">
          <h2 className="text-center text-gray-800 text-2xl font-bold pt-6">Request Sharing</h2>
          <div className="flex p-4">
            <div className="w-1/2 text-center">
              <span className="font-bold"></span> Request Shared
            </div>
            <div className="w-0 border border-gray-300">
            </div>
            <div className="w-1/2 text-center">
                      <span className="font-bold text-green-700">53,000 this month</span>
            </div>
          </div>
          <div className="m-2 bg-orange-950 w-72 lg:w-5/6 m-auto mt-6 p-2 hover:bg-red-500 rounded-2xl  text-white text-center shadow-xl shadow-bg-blue-700">
                    <a href=""><button className="lg:text-sm text-lg font-bold"> Add New Client</button></a>
          </div>
          <div className="text-center m-auto mt-6 w-full h-16">
          </div>
        </div>
      </div>
            </div>
            <div className="w-full mt-4">
              <div className="border-2 border-gray-300 rounded-3xl p-4 mr-4">
                <span className="text-xs font-bold text-gray-900">Success rate </span>
                <div className="w-full">
                
                </div>
                <div className="flex flex-wrap">
                  <div className="w-full">
                    <span className="text-xs font-bold text-green-600">Total number Of Requests: 200</span>
                  </div>
                  <div className="w-full p-2 flex felx-wrap">
                    <i className="fa fa-circle text-gray-500 text-xl font-bold mx-2"></i>
                    <span className="font-bold text-sm text-gray-500 mx-2">Received:</span>
                    <span className="font-bold text-sm text-gray-500 mx-1">250$</span>
                  </div>
                  <div className="w-full p-2 flex felx-wrap">
                    <i className="fa fa-circle text-gray-500 text-xl font-bold mx-2"></i>
                    <span className="font-bold text-sm text-gray-500 mx-2">Received:</span>
                    <span className="font-bold text-sm text-gray-500 mx-1">250$</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-48">
            </div>
          </div>
    </div>
  </div>
     </>
  )
}
