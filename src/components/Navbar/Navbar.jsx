import React from 'react'
import Logo from '../../assets/freeCRM.png'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='bg-purple-800 flex items-center justify-between'>

<div>
      <div className=" flex  items-center ">
      <div>
     <img src={Logo} alt='Logo' className='mx-10' height={200} width={100}/>
        </div> 

        <div className='flex gap-12 text-xl font-bold text-white mx-10 hover:cursor-pointer' >
          <p className=' hover:underline'>Profile</p>
          <p className=' hover:underline'>Countries</p>
          <p className=' hover:underline'>Dashboard</p>
          <p className=' hover:underline'>Reports</p>

          
        </div>

       
    </div>
    </div>

    <div className='flex gap-12 text-xl font-bold text-white mx-10 hover:cursor-pointer'>
      <Link to='/signup' className=' hover:underline'><p>Sign up</p></Link>
    </div>
    </div>
    
    
  )
}

export default Navbar