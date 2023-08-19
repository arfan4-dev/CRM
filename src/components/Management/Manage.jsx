import React from 'react'
import { AiOutlineUser } from "react-icons/ai";
import {TbUserShield } from 'react-icons/tb'
import {RiUserSettingsLine} from 'react-icons/ri'
import {Link} from 'react-router-dom'
const Manage = () => {
  return (
    <div className=''>
       <div className='flex text-[#6B21A8] text-[100px] gap-12 justify-center mb-5'>
        <div className='bg-purple-200 p-7 rounded-full hover:bg-purple-800 hover:text-white hover:scale-110 transition duration-300 ease-in'> <Link to='/user'><AiOutlineUser /> <p className='text-[20px] text-center font-semibold text-[#f1f1f1f1] '>User</p></Link> </div>
        {/* <div className='bg-purple-200 p-7 rounded-full hover:bg-purple-800 hover:text-white hover:scale-110 transition duration-300 ease-in'> <TbUserShield/><p className='text-[20px] text-center font-semibold text-[#f1f1f1f1] '>Manager</p></div> */}
        <div className='bg-purple-200 p-7 rounded-full  hover:bg-purple-800 hover:text-white hover:scale-110 transition duration-300 ease-in'> <Link to='/admin'><RiUserSettingsLine/> <p className='text-[20px] text-center font-semibold text-[#f1f1f1f1] '>Admin</p></Link></div>
       </div>
    </div>
  )
}

export default Manage
