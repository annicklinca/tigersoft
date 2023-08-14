
import React from 'react';
import Navbar from './Navbar';
import '../../App.css'

export default function Home () {
 

  return (
        <>
        <div className="h-full w-full bg-mobile ">
        <Navbar/>

        <div className='w-full h-auto bgimage'>
         <div className='py-48 px-16'>
          <h1 className='font-semibold text-2xl text-amber-600 pt-4'>Tigersoft More than just an IT Company</h1>
          <h3 className='font-semibold text-2xl text-amber-600 '>Accelerate Your Business Growth With Us Now !!</h3>
          <p className='text-white font-semibold text-lg pt-8'>More than just an IT Company </p>
          <div className='flex flex-wrap'>
            <div className='w-1/4 bg-amber-600 text-white text-center font-semibold p-4 mt-4'>Get Started</div>
          </div>
         </div>
            <div className='py-4'></div>
        </div>

        {/* body */}
        <div className=''>
          <div className='flex flex-wrap px-16 py-8 bg-white'>
            <div className='w-2/3 text-black '>
            <h1 className='text-2xl text-amber-600 font-extrabold p-3'>ABOUT TIGERSOFT</h1>
          <p className='p-3'>Tigersoft is a Rwandan private company that has been in business for over the past 20 years, and it is among the leading software companies in Rwanda that rose from the needs to pivot on technology and accelerate socio economic growth of the country.
Tigersoft has built and delivered IT business solutions to the Government and private institutions that range from Ministries to Financial Institutions. It has a track record of enabling system communication through innovative integration among public sector and between public and private institutions. For instance, Tigersoft developed Tiger Application Programming Interface (TigerAPI) that integrates Central Bank of Rwanda and other Financial institutions.</p>
         
            </div>
            <div className='w-1/3 shadow-sm'>
              <img src="../images/present.png" />
           </div>
          </div>
            {/* aboutus parts  */}
            <div className='bg-amber-600 w-full '>
              <div className='grid grid-cols-4 mx-28 my-4'>
                <div className='ml-28 py-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-16 h-16 text-white bg-orange-950 rounded-full p-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
                <h3 className='font-semibold'>Customize<br></br> Solutions</h3>
                </div>

                <div className='ml-40 py-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-16 h-16 text-white bg-orange-950 rounded-full p-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                  </svg>

                <h3 className='font-semibold'>Network<br></br>& Security</h3>
                </div>

                <div className='ml-48 py-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-16 h-16 text-white bg-orange-950 rounded-full p-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                 </svg>

                <h3 className='font-semibold'>Business  & Integration</h3>
                </div>
              </div>
            </div>

          {/* mission and vision */}
        
          <div className='grid grid-cols-2 gap-4 mx-4 py-8'>
            <div className=' bg-white rounded-md shadow-md p-8 border-r-4 border-b-4 border-orange-950 '>
              <h2 className='text-amber-600 text-xl font-bold'>Mission</h2>
              <p className='pt-3'>To Ensure customer satisfaction with carefully crafted customized solutions to best fit their business needs.<br></br>Tigersoft aim is to serve customers with the world class solutions to satisfy their business needs.Tigersoft focuses at re-defining and providing the broadest selection of solutions to people and businesses that will take them to the next level</p>
            </div>
            <div className=' bg-white rounded-md shadow-md border-r-4 border-b-4 border-orange-950 p-8 ml-3'>
              <h2 className='text-amber-600 text-xl font-bold'>Vision</h2>
              <p className='pt-3'>To become global technology anchor that empower people and businesses<br></br> with solutions that accelerate socio economic development of the countries.<br></br>Tigersoft develops and maintains its products and services to be enterprise grade, reliable, secure, cost-efficient and interoperable while offering customers a choice in customizable solutions that best meet their business needs.</p>
          </div>
          </div>
          {/* services */}
          <div className='pgimages  '>
            <h1 className='text-amber-600 font-extrabold text-2xl text-center py-4'>Our Services</h1>
            <div className='grid grid-cols-3 gap-4  mx-16 my-4'>
              <div className='inline-block pt-12 '>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 text-amber-600 inline-block">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
              </svg>
              <h2 className='inline-block text-white font-semibold'>System Integration</h2>
              <p className='text-white'>Tigersoft developed APIs that allows your business solution to communicate with other systems.</p>
              </div>

              <div className='inline-block pt-12 '>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 text-amber-600 inline-block">
             <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
             </svg>

              <h2 className='inline-block text-white font-semibold'>Financial Management Solutions</h2>
              <p className='text-white'>Tigersoft developed APIs that allows your business solution to communicate with other systems.</p>
              </div>

              <div className='inline-block pt-12 '>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 text-amber-600 inline-block">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
</svg>

              <h2 className='inline-block text-white font-semibold'>Education Management Solutions</h2>
              <p className='text-white'>Tigersoft developed APIs that allows your business solution to communicate with other systems.</p>
              </div>

              <div className='inline-block pt-12 '>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 text-amber-600 inline-block">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
</svg>

              <h2 className='inline-block text-white font-semibold'>Enterprise Resource Planning Solution</h2>
              <p className='text-white'>Tigersoft developed APIs that allows your business solution to communicate with other systems.</p>
              </div>

              <div className='inline-block pt-12 '>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 text-amber-600 inline-block">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
</svg>

              <h2 className='inline-block text-white font-semibold'>Electoral Management Solutions</h2>
              <p className='text-white'>Tigersoft developed APIs that allows your business solution to communicate with other systems.</p>
              </div>

              <div className='inline-block pt-12 '>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 text-amber-600 inline-block">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
</svg>

              <h2 className='inline-block text-white font-semibold'>Labor Market Information System</h2>
              <p className='text-white'>Tigersoft developed APIs that allows your business solution to communicate with other systems.</p>
              </div>

              <div className='inline-block pt-12 '>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 text-amber-600 inline-block">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
</svg>

              <h2 className='inline-block text-white font-semibold'>Travel Document Management Solutions</h2>
              <p className='text-white'>Tigersoft developed APIs that allows your business solution to communicate with other systems.</p>
              </div>

              <div className='inline-block pt-12 '>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 text-amber-600 inline-block">
  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
</svg>

              <h2 className='inline-block text-white font-semibold'>Population Registry Solutions</h2>
              <p className='text-white'>Tigersoft developed APIs that allows your business solution to communicate with other systems.</p>
              </div>

              <div className='inline-block pt-12 '>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 text-amber-600 inline-block">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
</svg>

              <h2 className='inline-block text-white font-semibold'>Civil Registration and Vital Statistics Solutions</h2>
              <p className='text-white'>Tigersoft developed APIs that allows your business solution to communicate with other systems.</p>
              </div>
             
            </div>
          </div>

        {/* news */}
        <div className='mx-16 my-8'>
          <div className='grid grid-cols-3 gap-4'>
            <div className='bg-gray-200 p-4 hover:bg-gray-100'>
              <img src="../images/d5.png" className='px-4 py-2'/>
              <h1 className='text-amber-600 font-semibold text-center text-lg'>BS & PI</h1>
              <p>Tigersoft has developed an integrated business solution to support the issuance of internationally recognized travel documents ranging from “Laisser-Passez” to all types of passports.</p>
            </div>

            <div className='bg-gray-200 p-4 hover:bg-gray-100'>
              <img src="../images/d1.png" className='px-4 py-2'/>
              <h1 className='text-amber-600 font-semibold text-center text-lg'>IPPS</h1>
              <p>Tigersoft has developed an integrated business solution to support the issuance of internationally recognized travel documents ranging from “Laisser-Passez” to all types of passports.</p>
            </div>

            <div className='bg-gray-200 p-4 hover:bg-gray-100'>
              <img src="../images/de2.jpg" className='px-4 py-2'/>
              <h1 className='text-amber-600 font-semibold text-center text-lg'>PMS</h1>
              <p>Tigersoft has developed an integrated business solution to support the issuance of internationally recognized travel documents ranging from “Laisser-Passez” to all types of passports.</p>
            </div>

            <div className='bg-gray-200 p-4 hover:bg-gray-100'>
              <img src="../images/present.png" className='px-4 py-2'/>
              <h1 className='text-amber-600 font-semibold text-center text-lg'>MRTD</h1>
              <p>Tigersoft has developed an integrated business solution to support the issuance of internationally recognized travel documents ranging from “Laisser-Passez” to all types of passports.</p>
            </div>

            <div className='bg-gray-200 p-4 hover:bg-gray-100'>
              <img src="../images/pic2.jpg" className='px-4 py-2'/>
              <h1 className='text-amber-600 font-semibold text-center text-lg'>FMIS</h1>
              <p>Tigersoft has developed an integrated business solution to support the issuance of internationally recognized travel documents ranging from “Laisser-Passez” to all types of passports.</p>
            </div>

            <div className='bg-gray-200 p-4 hover:bg-gray-100'>
              <img src="../images/d6.jpg" className='px-4 py-2'/>
              <h1 className='text-amber-600 font-semibold text-center text-lg'>EMS</h1>
              <p>Tigersoft has developed an integrated business solution to support the issurance of internationally recognized travel documents ranging from “Laisser-Passez” to all types of passports.</p>
            </div>

          </div>
        </div>

        {/* footer */}
        <div className='bg-amber-600'>
          <div className='flex flex-wrap'>
            <div className='w-1/2 '>
              <h1 className='text-white font-bold text-xl p-4'>CONTACTUS</h1>
              <input type='text' name='email' placeholder='Fill your email' className='w-96 bg-white p-4 mx-8'/><br></br>
              <textarea name='message' placeholder='your message' className='w-96 bg-white p-4 mt-8 mx-8'></textarea><br></br>
              <br></br>
              <button type='submit' className='bg-orange-950 rounded-sm p-4 text-white font-semibold ml-20'>Send Message</button>
            </div>
            <div className='w-1/2 py-8'>
              <h2 className='font-semibold text-gray-600 '>Phone:</h2>
              <p>+250 788 301 767 / +250 788 356 235</p>
              <h2 className='font-semibold text-gray-600'>Email:</h2>
              <p>info@tigersoft.rw</p>
              <h2 className='font-semibold text-gray-600'>Website:</h2>
              <p>http://www.tigersoft.rw</p>
              <h2 className='font-semibold text-gray-600'>Address:    <span className='text-black'>KN 5 RD, 2 Floor Kigali Business Centre, KBC Building</span> 
<br></br>
Nyarugenge, Kigali, Rwanda</h2>
            </div>
          </div>
        </div>

          
        </div>
            </div>
       

        </>
  )
}
