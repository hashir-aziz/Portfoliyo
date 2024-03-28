import React from 'react'
import image1 from '../assets/People1.png'
import image2 from '../assets/Text.png'
import image3 from '../assets/Users.png'
const PeopleTalks = () => {
  return (
    <>
     <div className=" bg-gray-200 w-[94%] h-[950px] lg:w-[94%] mt-0 mx-auto">
       <div className='w-[85%]   mx-auto'>
          <div className='flex justify-center font-inter text-3xl sm:text-4xl md:text-5xl lg:text-6xl pt-[100px] font-bold leading-64'>
             PEOPLE TALK ABOUT ME
          </div>
          <div className='flex justify-center mt-3 font-inter text-base font-normal leading-[16.83px]'>
          Lorem ipsum dolor sit amet. In totam inventore eos rerum eius aut
          </div>
          <div className='relative flex justify-center mt-10'>
            <img src={image3} alt="" />
             <img className='absolute top-[150px]' src={image1} alt="" />
             <img className='absolute top-[300px] lg:w-[800px]' src={image2} alt="" />
          </div>
       </div>
     </div>
    </>
  )
}

export default PeopleTalks