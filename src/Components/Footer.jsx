import React from 'react'
import image1 from '../assets/FB.png'
import image2 from '../assets/TW.png'
import image3 from '../assets/LI.png'

const Footer = () => {
  return (
     <>
     <div id='Contact' className='relative bg-[#cbd9fe] w-full h-full lg:w-[94%] mx-auto'>
        <div className='flex justify-center w-[85%] mx-auto '>
        <div className='  mx-auto '>
           <div className='flex justify-center font-inter  w-full  text-[30px] sm:text-[50px] md:text-[70px] lg:text-[90px] xl:text-[110px] font-bold leading-[45.9px] border-b border-black py-[90px] sm:py-[100px] md:py-[120px] lg:py-[150px]'>
            M.AWAIS ULLAH
           </div>


           <div class='md:flex-col   lg:flex lg:flex-col gap-x-4 sm:gap-x-8 md:gap-x-12 lg:gap-x-16 xl:gap-x-20 border-b border-black py-[50px]'>
    <div class=''>
        <div class='flex sm:flex-row flex-col  py-4 md:py-8 lg:py-10'>
            <div class='font-inter mr-4 text-base font-bold sm:w-[120px] md:w-[140px] lg:w-[160px] leading-[23.5px] text-left'>
                About Me
            </div>
            <div class='font-inter sm:w-[250px] md:w-[350px] lg:w-[464px] h-auto text-base font-normal leading-[24px] text-justify'>
                Lorem ipsum dolor sit amet consectetur. Tellus id diam iaculis pellentesque quisque nunc amet diam. Purus tempor at a venenatis.
            </div>
        </div>
        <div class='md:flex-col  lg:flex lg:flex-row'>
            <div class='py-3 w-[160px]'>
                <div class='font-inter text-base font-bold leading-[23.5px] text-left'>
                    Phone no:
                </div>
                <div class='font-inter text-base font-normal leading-[23.5px] text-left'>
                    +923225460430
                </div>
            </div>
            <div class= 'py-3 w-[232px]'>
                <div class='font-inter text-base font-bold leading-[23.5px] text-left'>
                    Email:
                </div>
                <div class='font-inter text-base font-normal leading-[23.5px] text-left'>
                    Awais.Awaisulla@outlook.com
                </div>
            </div>
            <div class='py-3 w-[218px]'>
                <div class='font-inter text-base font-bold leading-[23.5px] text-left'>
                    Address:
                </div>
                <div class='font-inter text-base font-normal leading-[23.5px] text-left'>
                    Lohore, Pakistan
                </div>
            </div>
        </div>
    </div>
    <div class='grid grid-cols-2 py-4 md:py-8  '>
        <div>
            <ul class='flex flex-col font-inter text-base leading-[31.5px]'>
                <li class='font-bold'>
                    HOME
                </li>
                <li>
                    ABOUT ME
                </li>
                <li>
                    SERVICES
                </li>
                <li>
                    PORTFOLIO
                </li>
                <li>
                    TESTIMONIALS
                </li>
                <li>
                    CONTACTS
                </li>
            </ul>
        </div>
        <div class='ml-4 md:ml-8 font-inter  text-base leading-[31.5px]'>
            <div>
                STAY CONNECTED: FOLLOW
            </div>
            <div>
                ME ON SOCIAL MEDIA:
            </div>
            <div class='flex flex-wrap py-6 gap-6'>
                <img src={image1} alt='' />
                <img src={image2} alt='' />
                <img src={image3} alt='' />
            </div>
        </div>
    </div>
</div>
<div class='flex py-2 lg:py-4 gap-x-12'>

    <div class='font-inter text-sm font-bold leading-[31.5px]'>
        © 2024 AWAIS. All rights reserved.
    </div>
    <div class='flex gap-6 font-inter text-sm font-bold leading-[31.5px]'>
        <div>
            Privacy Policy
        </div>
        <div>
            Terms & Conditions
        </div>
    </div>

</div>

           

         </div>
        </div>
         
     </div>
     </>
  )
}

export default Footer