import React from 'react'
import {AiFillFacebook,AiOutlineTwitter,AiFillInstagram   } from "react-icons/ai";
import { BsPinterest} from "react-icons/bs";


const Footers = () => {
  return (

    <div className='bg-black w-full'>

      <div className='flex flex-col container  mx-auto py-20 md:flex-row   md:justify-between md:items-center '>

        <div className='flex flex-col mx-auto justify-center items-center space-y-5 md:mx-0 md:justify-start  '>

          <div>
           <img src="./images/logo.svg" alt="logo" />
          </div>



          <div className='text-white md:flex md:justify-between '>

            <ul className='md:flex  md:items-center md:space-x-4 '>

            
            <div className='mb-5 md:ms-10'><li>About</li></div>
            <div className='mb-5'><li>Careers</li></div>
            <div className='mb-5'><li>Events</li></div>
            <div className='mb-5'><li>Support</li></div>
            </ul>

          </div>




        </div>





        {/* 2nd box */}

        <div className='flex flex-col justify-center items-center space-y-5 md:px-5'>

          <div className='flex space-x-5 text-white my-5 md:my-0'>

            <div><AiFillFacebook size={30}/></div>
            <div><AiOutlineTwitter size={30}/></div>
            <div><BsPinterest size={30}/></div>
            <div><AiFillInstagram size={30}/></div>

          </div>

          <div className='text-slate-300'>
            @2022 Loopstudios All rights reserved
          </div>

        </div>

      </div>
      
    </div>
  )
}

export default Footers
