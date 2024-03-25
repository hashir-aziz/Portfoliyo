import React from "react";
import image1 from "../assets/Mask group (2).png";
import image2 from "../assets/Mask group (3).png";
import image3 from "../assets/Mask group (4).png";
const cards = [
  {
    img: image1,
    heading: "Web & Mobile Development",
    info: "But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences",
  },
  {
    img: image2,
    heading: "AI Bots",
    info: "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain",
  },
  {
    img: image3,
    heading: "Interaction Design",
    info: "In certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur",
  },
  {
    img: image3,
    heading: "Branding & Strategy",
    info: "But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences",
  },
];

const Stack = () => {
  return (
    <>
     <div className="flex justify-center bg-[#252525] w-full h-full lg:w-[94%] mt-0 mx-auto">
  <div className="w-[85%] lg:w-full mx-auto">
    <div className="flex justify-center mx-auto">
      <div className="text-white font-inter text-5xl font-bold leading-16 pt-[100px]">
        FULL STACK SERVICE
        <p className="text-[#bbbbbb] font-inter text-base font-normal leading-6 text-justify mt-3 w-full lg:w-[70%]">
          Lorem ipsum dolor sit amet consectetur. Molestie sed etiam eget
          sagittis ante. Mi lorem massa venenatis et quis metus massa. Natoque
          nec mauris commodo vel.
        </p>
      </div>
    </div>
    <div className="flex justify-center w-[85%] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-[100px] container">
        {cards?.map((explore, index) => (
          <div
            className="text-white flex flex-col border-r border-gray-700 rounded-[50px] p-6 lg:p-8 gap-y-5"
            key={index}
          >
            <img className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px]  " src={explore.img} alt="" />
            <div className="font-inter text-xl lg:text-2xl font-bold text-center lg:text-left">
              {explore?.heading}
            </div>
            <div className="text-[#bbbbbb] font-inter text-base lg:text-lg font-normal leading-6 text-justify">
              {explore.info}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

       
    </>
  );
};

export default Stack;
