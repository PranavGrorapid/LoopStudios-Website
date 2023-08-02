import React from 'react'

const Features = () => {
  return (

    <div className='relative '>
    <div className=' flex flex-col justify-center my-10 md:flex-row md:justify-between' >

      <div className='md:w-[70%] lg:w-[75%] xl:w-[100%]'>
 <img src="./images/desktop/image-interactive.jpg" alt=""  className=' mx-2  md:mx-0'/>
      </div>
      <div className='flex mx-2 w-full   flex-col justify-center items-center pb-5 md:absolute bg-white md:top-[35%] md:-right-[2%] md:px-5 md:py-7  md:w-[400px] lg:top-[46%] lg:right-[25%] md:text-left xl:right-[32%] '>

        <h2 className='text-center max-w-lg text-4xl font-sans py-5 md:text-left'>THE LEADER IN INTERACTIVE VR</h2>

        <p className='max-w-md text-left text-xs lg:text-sm'>
        founded in 2011.Loopstudio has been producing world class virtual reality projects for some of the best companies across the globe .our award-winning creations have transformed buisnesses through digital experiences that bind to their brand
        </p>

      </div>
      
    </div>
    </div>
  )
}

export default Features
