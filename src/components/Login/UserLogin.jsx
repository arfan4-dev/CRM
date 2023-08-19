import React from 'react'
import Img from '../../assets/illustration.png';
import { useNavigate } from 'react-router-dom';
const UserLogin = () => {

  const navigate = useNavigate(); 

  const handleBackClick = () => {
    navigate('/'); // Navigate to the home page
  };
  
  return (
    <div className='flex'>
      <div>
    <img src={Img} alt="" />
      </div>

      <div>
      
 
      <div className="flex w-80 flex-col gap-6 mt-32 ml-20">
<p className=' text-4xl text-white font-semibold'>EMPLOYEE SIGNIN</p>
 
  <div className="relative h-11 w-full min-w-[200px]">
  <input
  className="peer h-full w-full border-b border-yellow-400 bg-transparent pt-4 pb-1.5 text-xl font-normal text-white outline outline-0 transition-all placeholder-shown:border-yellow-400 focus:border-yellow-400 focus:outline-0"
  placeholder=" "
/>

    <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-yellow-500 peer-focus:after:scale-x-100 peer-focus:after:border-yellow-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
      Email
    </label>
  </div>
  <div className="relative h-11 w-full min-w-[200px]">
  <input
  className="peer h-full w-full border-b border-yellow-400 bg-transparent pt-4 pb-1.5 text-xl font-normal text-white outline outline-0 transition-all placeholder-shown:border-yellow-400 focus:border-yellow-400 focus:outline-0"
  placeholder=" "
/>

    <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-yellow-500 peer-focus:after:scale-x-100 peer-focus:after:border-yellow-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
      Password
    </label>
  </div>
  
</div>
 
<div className=' mt-5'>
 
  <button onClick={handleBackClick} className="inline-flex items-center ml-20 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md">
	<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
	  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
	</svg>

	Back
  </button>

  <button className="inline-flex items-center  mx-7 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md">
	<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
	  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
	</svg>

	Login
  </button>
</div>



      </div>

    </div>
  )
}

export default UserLogin