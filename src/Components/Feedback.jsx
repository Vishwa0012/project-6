import React from "react";
import Man from "../assets/Images/Man.jpg";
import singer from "../assets/Images/singer.jpg";
import {
  FaStar,
  FaRegStar,
} from "react-icons/fa";

const Feedback = () => {
  return (
    <section className="bg-white mx-10 md:mx-40 pt-16 pb-12 md:py-32 flex flex-col md:flex-row items-center justify-around">
      <div className="flex-1 mr-0 md:mr-24 mb-10 md:mb-0">
        <img
          src={Man}
          alt="Student"
          className="h-80 w-full md:h-[800px] md:w-[730px] rounded-3xl object-cover"
        />
      </div>

      <div className="flex-1">
        <h1 className="text-3xl md:text-5xl font-bold">Students Feedback</h1>
        <p className="bg-[#2176E6] h-1 w-24 md:w-32 mt-4 md:mt-6 mb-6 md:mb-12"></p>
        <div className="flex items-center gap-6">
          <img
            src={singer}
            alt="Washington Sundar"
            className="h-24 w-24 md:h-32 md:w-32 rounded-full"
          />
          <div>
            <h1 className="text-xl md:text-2xl font-bold pb-3">
              Washington Sundar
            </h1>
            <p className="font-semibold">Student of E-learn</p>
          </div>
        </div>
        <div className="pt-8 md:pt-12">
          <h2 className="text-base md:text-xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit adipisicing
            Lorem Lorem dolor.
            <br /> ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            dolor.
            <br /> ipsum dolor sit, amet Lorem consectetur adipisicing elit
            consectetur. Doloremque dolor. <br /> ipsum dolor sit amet
            consectetur adipisicing elit. Molestias dolor. <br /> Lorem dolor
            sit Lorem amet consectetur Lorem adipisicing elit. Magnam! Lorem
            dolor <br /> ipsum dolor sit.
          </h2>
          <div className="pt-8 md:pt-12">
            <div className="text-xl md:text-2xl text-yellow-500 flex gap-1 md:gap-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </div>
            <div className="flex text-blue-700 gap-6 md:gap-12 text-2xl md:text-3xl mt-4 ml-auto">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
