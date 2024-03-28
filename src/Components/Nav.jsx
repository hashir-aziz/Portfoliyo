import React from 'react';
import img1 from "../assets/side.png";
import img2 from "../assets/Software (1) 1.png"
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Nav = () => {
  return (
<div className='bg-white w-full lg:w-[94%] min-h-[147px] flex justify-center items-center mx-auto'>
 
    <div className='flex flex-col lg:flex-row items-center justify-between lg:space-x-8 border-b border-black w-[87%] h-[150px] pb-5  mx-auto'>
      <div className='font-inter text-5xl lg:text-4xl font-bold leading-tight text-blue-600'>
        AWAIS.
      </div>
      <ul className='flex flex-wrap justify-center lg:justify-start gap-3 lg:gap-10 font-bold flex-shrink-0 w-full lg:w-auto'>
        <li className='cursor-pointer font-inter text-sm lg:text-base font-bold leading-tight text-left flex-shrink-0'>
          HOME
        </li>
        <li  className=' cursor-pointer font-inter text-sm lg:text-base font-bold leading-tight text-left flex-shrink-0'>
        <AnchorLink offset={10} href='#About'>ABOUT </AnchorLink>
        </li>
        <li className= 'cursor-pointer font-inter text-sm lg:text-base font-bold leading-tight text-left flex-shrink-0'>
        <AnchorLink offset={10} href='#Services'> MY SERVICES </AnchorLink>
        </li>
        <li className='cursor-pointer font-inter text-sm lg:text-base font-bold leading-tight text-left flex-shrink-0'>
        <AnchorLink offset={10} href='#Work'> MY WORK </AnchorLink>
        </li>
        <li className=' cursor-pointer font-inter text-sm lg:text-base font-bold leading-tight text-left flex-shrink-0'>
        <AnchorLink offset={10} href='#Contact'> CONTACT </AnchorLink>
        </li>
      </ul>
      <button className='cursor-pointer bg-blue-600 px-4 lg:px-6 py-2 lg:py-3 text-white font-bold text-sm lg:text-base rounded-full mt-3 lg:mt-0'>
        GET STARTED
      </button>
    </div>
  
</div>





      
    
  );
};

export default Nav;