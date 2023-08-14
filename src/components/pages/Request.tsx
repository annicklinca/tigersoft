
import React from 'react';
import '../../App.css'

export default function Request () {
 

  return (
        <>
<link rel="stylesheet" href="https://cdn.tailgrids.com/tailgrids-fallback.css" />

<section className="bg-amber-100 py-20 lg:py-[120px] overflow-hidden relative z-10">
   <div className="container">
      <div className="flex flex-wrap lg:justify-between -mx-4">
         <div className="w-full lg:w-1/2 xl:w-6/12 px-4">
            <div className="max-w-[570px] mb-12 lg:mb-0">
               <span className="block mb-4 text-base text-primary font-semibold">
               Tigersoft Support Form 
               </span>
               <h2 className="text-dark mb-6 uppercase font-bold text-[32px] sm:text-[40px] lg:text-[36px] xl:text-[40px]">
               Welcome to the Tigersoft Support Form! 
               </h2>
               <p className="text-base text-body-color leading-relaxed mb-9">
               
This form is designed to gather essential information about your support or feature request, ensuring efficient and effective resolution. We value your feedback and aim to provide you with the best assistance for your software needs. 

By filling out this form, you can provide us with valuable details about the issue or feature request, allowing our team to better understand your requirements and provide timely solutions. We appreciate your participation and look forward to serving you with exceptional support. Thank you for choosing Tigersoft!
               </p>

            </div>
         </div>
         <div className="w-full lg:w-1/2 xl:w-5/12 px-4">
            <div className="bg-white relative rounded-lg p-8 sm:p-12 shadow-lg">
               <form>
                <h2 className='font-semibold text-lg'>Personal Identification</h2>
                  <div className="mb-6">
                    <label>Email</label>
                     <input type="email" placeholder="Your Email" className=" w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary"/>
                  </div>
                  <div className="mb-6">
                    <label>Date</label>
                  <input type="date" placeholder="Your Email" className=" w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary"/>

                  </div>
                  <h2 className='font-semibold text-lg'>Issue Details</h2>
                  <div className="mb-6">
                    <label>Choose between support request or feature request</label><br></br>
                  <input type="radio" name="request" value="Support Request" className=" "/>Support Request<br></br>
                  <input type="radio" name="request" value="Feature Request" className=" "/>Feature Request

                  </div>
                  <div className="mb-6">
                    <label>Description of the issue or requested feature</label>
                    <textarea  placeholder="Your Message" className="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary">
                     </textarea>
                  </div>
                  <div className="mb-6">
                    <label>Urgency Level</label>
                    <select name='urgency' className='w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary'>
                      <option>Low</option>
                      <option>Medium</option>
                      <option>High</option>
                    </select>
                  </div>
                  <div className="mb-6">
                    <label>How does this issue or requested feature impact the business operations?</label>
                    <textarea  placeholder="Your Message" className="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary">
                     </textarea>
                  </div>
                  <h2 className='font-semibold text-lg'>Additional Information</h2>
                  <div className="mb-6">
                    <label>Are there any suggestions to resolve the reported issue?</label>
                     <input type="email" placeholder="Your Email" className=" w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary"/>
                  </div>
                  <div className="mb-6">
                    <label>Is there a preferred deadline for resolving this issue/request?(date)</label>
                     <input type="date" placeholder="Your Email" className=" w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary"/>
                  </div>
                  <div>
                     <button type="submit"  className="w-full text-white bg-orange-950 rounded border border-orange-950 border border-primary p-3 transition hover:bg-opacity-90">
                     Send Message
                     </button>
                  </div>
               </form>
               <div>
                  <span className="absolute -top-10 -right-9 z-[-1]">
                     <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"  d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z" fill="#3056D3"/>
                     </svg>
                  </span>
                  <span className="absolute -right-10 top-[90px] z-[-1]">
                     <svg width="34" height="134" viewBox="0 0 34 134" fill="none" xmlns="http://www.w3.org/2000/svg">
                
                        <circle cx="31.9993" cy="132" r="1.66667" transform="rotate(180 31.9993 132)" fill="#13C296"/>
                        <circle cx="31.9993" cy="117.333" r="1.66667" transform="rotate(180 31.9993 117.333)" fill="#13C296"/>
                        <circle cx="31.9993" cy="102.667" r="1.66667" transform="rotate(180 31.9993 102.667)" fill="#13C296"/>
                        <circle cx="31.9993" cy="88" r="1.66667" transform="rotate(180 31.9993 88)" fill="#13C296"/>
                        <circle cx="31.9993" cy="73.3333" r="1.66667" transform="rotate(180 31.9993 77.3333)" fill="#13C296"/>
                        <circle cx="31.9993" cy="45" r="1.66667" transform="rotate(180 31.9993 45)" fill="#13C296"/>
                        <circle cx="31.9993" cy="16" r="1.66667" transform="rotate(180 31.9993 16)" fill="#13C296"/>
                        <circle cx="31.9993" cy="59" r="1.66667" transform="rotate(180 31.9993 59)" fill="#13C296"/>
                        <circle cx="31.9993" cy="30.6666" r="1.66667" transform="rotate(180 31.9993 30.6666)" fill="#13C296"/>
                        <circle cx="31.9993" cy="1.66665" r="1.66667" transform="rotate(180 31.9993 1.66665)" fill="#13C296"/>
                        <circle cx="31.9993" cy="132" r="1.66667" transform="rotate(180 31.9993 132)" fill="#13C296"/>
                        <circle cx="31.9993" cy="132" r="1.66667" transform="rotate(180 31.9993 132)" fill="#13C296"/>
                        <circle cx="31.9993" cy="117.333" r="1.66667" transform="rotate(180 31.9993 117.333)" fill="#13C296"/>
                        <circle cx="31.9993" cy="102.667" r="1.66667" transform="rotate(180 31.9993 102.667)" fill="#13C296"/>
                        <circle cx="31.9993" cy="88" r="1.66667" transform="rotate(180 31.9993 88)" fill="#13C296"/>
                        <circle cx="31.9993" cy="73.3333" r="1.66667" transform="rotate(180 31.9993 77.3333)" fill="#13C296"/>
                        <circle cx="31.9993" cy="45" r="1.66667" transform="rotate(180 31.9993 45)" fill="#13C296"/>
                        <circle cx="31.9993" cy="16" r="1.66667" transform="rotate(180 31.9993 16)" fill="#13C296"/>
                        <circle cx="31.9993" cy="59" r="1.66667" transform="rotate(180 31.9993 59)" fill="#13C296"/>
                        <circle cx="31.9993" cy="30.6666" r="1.66667" transform="rotate(180 31.9993 30.6666)" fill="#13C296"/>
                        <circle cx="31.9993" cy="1.66665" r="1.66667" transform="rotate(180 31.9993 1.66665)" fill="#13C296"/>
                        <circle cx="31.9993" cy="132" r="1.66667" transform="rotate(180 31.9993 132)" fill="#13C296"/>
                        <circle cx="31.9993" cy="132" r="1.66667" transform="rotate(180 31.9993 132)" fill="#13C296"/>
                        <circle cx="31.9993" cy="117.333" r="1.66667" transform="rotate(180 31.9993 117.333)" fill="#13C296"/>
                        <circle cx="31.9993" cy="102.667" r="1.66667" transform="rotate(180 31.9993 102.667)" fill="#13C296"/>
                        <circle cx="31.9993" cy="88" r="1.66667" transform="rotate(180 31.9993 88)" fill="#13C296"/>
                        <circle cx="31.9993" cy="73.3333" r="1.66667" transform="rotate(180 31.9993 77.3333)" fill="#13C296"/>
                        <circle cx="31.9993" cy="45" r="1.66667" transform="rotate(180 31.9993 45)" fill="#13C296"/>
                        <circle cx="31.9993" cy="16" r="1.66667" transform="rotate(180 31.9993 16)" fill="#13C296"/>
                        <circle cx="31.9993" cy="59" r="1.66667" transform="rotate(180 31.9993 59)" fill="#13C296"/>
                        <circle cx="31.9993" cy="30.6666" r="1.66667" transform="rotate(180 31.9993 30.6666)" fill="#13C296"/>
                        <circle cx="31.9993" cy="1.66665" r="1.66667" transform="rotate(180 31.9993 1.66665)" fill="#13C296"/>
                        <circle cx="31.9993" cy="132" r="1.66667" transform="rotate(180 31.9993 132)" fill="#13C296"/>
                        
                     </svg>
                  </span>
                  <span className="absolute -left-7 -bottom-7 z-[-1]">
                     <svg width="107" height="134" viewBox="0 0 107 134" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="104.999" cy="132" r="1.66667" transform="rotate(180 104.999 132)" fill="#13C296"/>
                        <circle cx="104.999" cy="117.333" r="1.66667" transform="rotate(180 104.999 117.333)" fill="#13C296"/>
                        <circle cx="104.999" cy="132" r="1.66667" transform="rotate(180 104.999 102.667)" fill="#13C296"/>
                        <circle cx="104.999" cy="88" r="1.66667" transform="rotate(180 104.999 88)" fill="#13C296"/>
                        <circle cx="104.999" cy="73.3333" r="1.66667" transform="rotate(180 104.999 73.3333)" fill="#13C296"/>
                        <circle cx="104.999" cy="45" r="1.66667" transform="rotate(180 104.999 45)" fill="#13C296"/>
                        <circle cx="104.999" cy="16" r="1.66667" transform="rotate(180 104.999 16)" fill="#13C296"/>
                        <circle cx="104.999" cy="59" r="1.66667" transform="rotate(180 104.999 59)" fill="#13C296"/>
                        <circle cx="104.999" cy="30.6666" r="1.66667" transform="rotate(180 104.999 30.6666)" fill="#13C296"/>
                        <circle cx="104.999" cy="1.66665" r="1.66667" transform="rotate(180 104.999 1.66665)" fill="#13C296"/>
                        <circle cx="90.333" cy="132" r="1.66667" transform="rotate(180 104.999 132)" fill="#13C296"/>
                        <circle cx="90.333" cy="117.333" r="1.66667" transform="rotate(180 104.999 117.333)" fill="#13C296"/> 
                        <circle cx="90.333" cy="132" r="1.66667" transform="rotate(180 104.999 132)" fill="#13C296"/>
                        <circle cx="104.999" cy="132" r="1.66667" transform="rotate(180 104.999 132)" fill="#13C296"/>
                        <circle cx="104.999" cy="117.333" r="1.66667" transform="rotate(180 104.999 117.333)" fill="#13C296"/>
                        <circle cx="104.999" cy="132" r="1.66667" transform="rotate(180 104.999 102.667)" fill="#13C296"/>
                        <circle cx="104.999" cy="88" r="1.66667" transform="rotate(180 104.999 88)" fill="#13C296"/>
                        <circle cx="104.999" cy="73.3333" r="1.66667" transform="rotate(180 104.999 73.3333)" fill="#13C296"/>
                        <circle cx="104.999" cy="45" r="1.66667" transform="rotate(180 104.999 45)" fill="#13C296"/>
                        <circle cx="104.999" cy="16" r="1.66667" transform="rotate(180 104.999 16)" fill="#13C296"/>
                        <circle cx="104.999" cy="59" r="1.66667" transform="rotate(180 104.999 59)" fill="#13C296"/>
                        <circle cx="104.999" cy="30.6666" r="1.66667" transform="rotate(180 104.999 30.6666)" fill="#13C296"/>
                        <circle cx="104.999" cy="1.66665" r="1.66667" transform="rotate(180 104.999 1.66665)" fill="#13C296"/>
                        <circle cx="90.333" cy="132" r="1.66667" transform="rotate(180 104.999 132)" fill="#13C296"/>
                        <circle cx="90.333" cy="117.333" r="1.66667" transform="rotate(180 104.999 117.333)" fill="#13C296"/> 
                        <circle cx="90.333" cy="132" r="1.66667" transform="rotate(180 104.999 132)" fill="#13C296"/>
                        <circle cx="104.999" cy="132" r="1.66667" transform="rotate(180 104.999 132)" fill="#13C296"/>
                        <circle cx="104.999" cy="117.333" r="1.66667" transform="rotate(180 104.999 117.333)" fill="#13C296"/>
                        <circle cx="104.999" cy="132" r="1.66667" transform="rotate(180 104.999 102.667)" fill="#13C296"/>
                        <circle cx="104.999" cy="88" r="1.66667" transform="rotate(180 104.999 88)" fill="#13C296"/>
                        <circle cx="104.999" cy="73.3333" r="1.66667" transform="rotate(180 104.999 73.3333)" fill="#13C296"/>
                        <circle cx="104.999" cy="45" r="1.66667" transform="rotate(180 104.999 45)" fill="#13C296"/>
                        <circle cx="104.999" cy="16" r="1.66667" transform="rotate(180 104.999 16)" fill="#13C296"/>
                        <circle cx="104.999" cy="59" r="1.66667" transform="rotate(180 104.999 59)" fill="#13C296"/>
                        <circle cx="104.999" cy="30.6666" r="1.66667" transform="rotate(180 104.999 30.6666)" fill="#13C296"/>
                        <circle cx="104.999" cy="1.66665" r="1.66667" transform="rotate(180 104.999 1.66665)" fill="#13C296"/>
                        <circle cx="90.333" cy="132" r="1.66667" transform="rotate(180 104.999 132)" fill="#13C296"/>
                        <circle cx="90.333" cy="117.333" r="1.66667" transform="rotate(180 104.999 117.333)" fill="#13C296"/> 
                        <circle cx="90.333" cy="132" r="1.66667" transform="rotate(180 104.999 132)" fill="#13C296"/>
                     </svg>
                  </span>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
       

        </>
  )
}
