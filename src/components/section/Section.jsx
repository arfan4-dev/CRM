import React from 'react'
import img from '../../assets/freeCRM.png'
import './button.css'
const Section = () => {
  return (
    <div  className='flex items-center mt-10 flex-col' >
        
<div>
    <img src={img} alt="" width={350} height={400} />
</div>
<div>
<div className='text-white text-4xl my-20 font-semibold'>
          <p>
          TO MEET ALL YOUR CUSTOMER NEEDS
          </p>
        </div>
</div>

<div>
<button className="button-18" >More</button>
</div>
<div className='text-white text-2xl my-14 font-semibold text-[#8335c4]'>
    <p>WHO ARE YOU?</p>
</div>
    </div>
  )
}

export default Section


