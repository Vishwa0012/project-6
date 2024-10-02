import React from "react";
import { PiMedalFill } from "react-icons/pi";
import { FaUserGraduate } from "react-icons/fa";
import { RiGraduationCapFill } from "react-icons/ri";

const Badge = () => {
  return (
    <>
      <section className="py-24 px-40 ">
        <div className="flex items-center justify-between lg: flex-wrap gap-10 ">
          <div className="flex items-center justify-center gap-10">
            <div className="bg-slate-100 h-40 w-40 rounded-full flex items-center justify-center">
              <PiMedalFill className="text-blue-500 text-7xl" />
            </div>
            <div>
              <h1 className="text-5xl font-bold">20,000+</h1>
              <p className="text-xl mt-2">Special Courses</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-10">
            <div className="bg-slate-100 h-40 w-40 rounded-full flex items-center justify-center">
              <FaUserGraduate className="text-blue-500 text-7xl" />
            </div>
            <div>
              <h1 className="text-5xl font-bold">480,000+</h1>
              <p className="text-xl mt-2">Enrolled Students</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-10">
            <div className="bg-slate-100 h-40 w-40 rounded-full flex items-center justify-center">
              <RiGraduationCapFill className="text-blue-500 text-7xl" />
            </div>
            <div>
              <h1 className="text-5xl font-bold">4,000+</h1>
              <p className="text-xl mt-2">Expert Instructor</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Badge;
