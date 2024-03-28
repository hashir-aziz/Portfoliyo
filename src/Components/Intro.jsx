import React from 'react'
import img1 from '../assets/keepcodein 1.png'
import img2 from '../assets/Slayer (1).png'
const Intro = () => {
  return (
    <>
   <div className=' '>
    <div className='bg-white w-full lg:w-[94%] flex justify-center items-center mx-auto relative'>
        
        <div className="container2 flex flex-col lg:flex-row justify-center items-center w-full lg:w-[87%] mx-auto lg:gap-10 relative">
            <div className="left text-center lg:text-left lg:mt-0">
                <div className="font-inter text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-10 lg:leading-[151.39px] mt-[0.1rem] py-4 max-w-[670px]">
                    I'M AWAIS <span className='text-blue-600'>ULLAH</span>
                </div>
                <div className='flex flex-wrap justify-center lg:justify-start mt-8 lg:mt-[90px] md:gap-5 lg:gap-5'>
    <div className="mr-5 lg:mr-5">
        <div className="font-inter text-lg sm:text-2xl font-bold leading-[48px]">
            1500 <span className='text-blue-600'>+</span>
        </div>
        <p className="font-inter text-sm sm:text-base font-bold leading-[16.83px] mt-1 lg:mt-2">
            MY HAPPY CLIENTS
        </p>
    </div>
    <div className="mr-5 lg:mr-5">
        <div className="font-inter text-lg sm:text-2xl font-bold leading-[48px]">
            2750 <span className='text-blue-600'>+</span>
        </div>
        <p className="font-inter text-sm sm:text-base font-bold leading-[16.83px] mt-1 lg:mt-2">
            PROJECTS WELL DONE
        </p>
    </div>
    <div>
        <div className="font-inter text-lg sm:text-2xl font-bold leading-[48px]">
            7 <span className='text-blue-600'>YEARS</span>
        </div>
        <p className="font-inter text-sm sm:text-base font-bold leading-[16.83px] mt-1 lg:mt-2">
            EXPERIENCE WORKS
        </p>
    </div>
</div>

            </div>
            
          
            <div className="right mt-8 lg:mt-0">
                <img className='relative w-full max-w-[523px] h-auto' src={img1} alt="" />
            </div>
        </div>
        {/* <div className=''>   <img className='z-50 absolute bottom-0 left-0' src={img2} alt="" /></div> */}
        
       
    </div>
</div>


    
      
    </>
    

  )
}

export default Intro