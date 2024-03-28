import React from 'react'
import img2 from '../assets/Slayer (1).png'
import img3 from '../assets/Change Image Here.png'
const More = () => {
  return (
    <>
    <div id='About'  className='relative bg-white w-full lg:w-[94%] h-full mt-0  mx-auto '>
        <div className='flex justify-center'> 
             <img className='  absolute -mt-[60px]  ' src={img2} alt="" />
        </div>
        <div className='flex  justify-center items-center font-inter xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight h-[53px]  pb-[50px] pt-[50px] sm:pt-[150px] md:pt-[200px] lg:pt-[300px]   '>
        LET'S KNOW MORE ABOUT ME
        </div>
        <div className="container lg:flex  w-[85%] mx-auto border border-black  rounded-[3rem]">
           <div className="lg:w-1/2  ">
               <img className='w-full p-12' src={img3} alt="" />
           </div>
           <div className="lg:w-1/2 mt-0">
            <div className='flex gap-16 mt-[100px] p-1 sm:p-2 md:p-3 lg:p-4 xl:p-5 '>
                <div className='sm:flex sm:justify-center font-inter text-base font-bold leading-tight'>
                    Who AM i 
                </div>
                {/* <div className='lg:block hidden font-inter text-base font-bold leading-tight'>
                  My Vision 
                </div>
                <div className='lg:block hidden font-inter text-base font-bold leading-tight'>
                 What I Do
                </div> */}
            </div>
            <div className='px-5 mt-3 sm:mt-5 md:mt-10 lg:mt-14  font-inter text-base font-normal leading-36 text-justify'>
            Lorem ipsum dolor sit amet consectetur. Mi eros porta nisl massa nunc diam auctor consequat aliquam. Commodo commodo sit donec semper nunc in. Ma id auctor to consequat adipibulum laoreet. Faucibus justo sit facilisi ultrices facilisi. Aliquam porttitor.
            </div>
            <div className='px-5 mt-6 font-inter text-base font-semibold leading-36 text-justify'>
            consequat adipiscing. Amet vitae ullamcorper egestas vestibulum laoreet. Faucibus justo es quam porttitor.
            </div>
            <div class=' p-8 flex flex-wrap  '>
    <div className="  mr-5 mt-5 ">
        <div className="font-inter text-xl sm:text-2xl md:text-3xl lg:-text-4xl  font-bold leading-[48px]">
            1500 <span class='text-blue-600'>+</span>
        </div>
        <p className="font-inter text-sm font-bold leading-[16.83px] mt-1">
            MY HAPPY CLIENTS
        </p>
    </div>
    <div className="mr-5 mt-5">
        <div className="font-inter text-xl sm:text-2xl md:text-3xl lg:-text-4xl  font-bold leading-[48px]">
            2750 <span class='text-blue-600'>+</span>
        </div>
        <p className="font-inter text-sm font-bold leading-[16.83px] mt-1">
            PROJECTS WELL DONE
        </p>
    </div>
    <div className='mt-5'>
        <div className="text-xl sm:text-2xl md:text-3xl lg:-text-4xl font-inter  font-bold leading-[48px]">
            7 <span class='text-blue-600'>YEARS</span>
        </div>
        <p className="font-inter text-sm font-bold leading-[16.83px] mt-1">
            EXPERIENCE WORKS
        </p>
    </div>
</div>


           </div>
        </div>
       
    </div>
    </>
  )
}

export default More