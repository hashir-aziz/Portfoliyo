import React from 'react'
import img1 from '../assets/Box1.png'
import img2 from '../assets/Box2.png'
import img3 from '../assets/Box3.png'
import img4 from '../assets/Box4.png'
import img5 from '../assets/Box5.png'
import img6 from '../assets/Box6.png'
import img7 from '../assets/Box7.png'
import img8 from '../assets/Box8.png'


const Projects = () => {
  return (
     <>
    <div className='relative bg-white w-full lg:w-[94%] mx-auto'>
    <div className='flex justify-center font-inter text-4xl lg:text-6xl pt-12 lg:pt-[150px] font-bold leading-tight'>
        MY BEST PROJECTS
    </div>
    <div className='flex justify-center font-inter text-base lg:text-lg font-normal leading-[1.25rem] pb-8 lg:pb-[100px]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elrat dui.
    </div>
    <div className='flex justify-center'>
        <div className='max-w-[85%] mx-auto'>
            <div className='flex flex-wrap justify-center gap-5 mb-8 lg:mb-16'>
                <img className='w-full sm:w-auto md:w-[48%] lg:w-[23%] h-auto' src={img1} alt="" />
                <img className='w-full sm:w-auto md:w-[48%] lg:w-[23%] h-auto' src={img2} alt="" />
                <img className='w-full sm:w-auto md:w-[48%] lg:w-[23%] h-auto' src={img3} alt="" />
                <img className='w-full sm:w-auto md:w-[48%] lg:w-[23%] h-auto' src={img4} alt="" />
                <img className='w-full sm:w-auto md:w-[48%] lg:w-[23%] h-auto' src={img5} alt="" />
                <img className='w-full sm:w-auto md:w-[48%] lg:w-[23%] h-auto' src={img6} alt="" />
                <img className='w-full sm:w-auto md:w-[48%] lg:w-[23%] h-auto' src={img7} alt="" />
                <img className='w-full sm:w-auto md:w-[48%] lg:w-[23%] h-auto' src={img8} alt="" />
            </div>
        </div>
    </div>
    <div className='flex justify-center'>
        <button className='text-white text-lg lg:text-xl bg-blue-600 pl-6 pr-6 pt-3 pb-3 rounded-lg mt-8 lg:mt-[5rem] mb-8 lg:mb-[5rem]'>
            VIEW ALL
        </button>
    </div>
</div>

     </>
  )
}

export default Projects