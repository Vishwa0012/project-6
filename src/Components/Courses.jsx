import React from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { FaShareAltSquare } from "react-icons/fa";
import course1 from "../assets/Images/course1.jpg";
import course2 from "../assets/Images/course2.jpg";
import course3 from "../assets/Images/course3.jpg";
import course4 from "../assets/Images/course4.jpg";
import course5 from "../assets/Images/course5.jpg";
import course6 from "../assets/Images/course6.jpg";

const Courses = () => {
  return (
    <>
      <section className="px-40 py-28 bg-slate-100 ">
        <div className="flex justify-between">
          <div>
            <h1 className="text-5xl font-bold">Our Popular Courses</h1>
            <p className="bg-[#2176E6] h-2 w-28 mt-8"></p>
          </div>
          <div className="mt-2">
            <button className="text-xl text-[#2176E6] border-2 border-[#2176E6] p-2 rounded-lg">
              ALL COURSES
            </button>
          </div>
        </div>
        <div className="mt-14 flex justify-between">
          <div className="drop-shadow-2xl">
            <div>
              <img
                src={course1}
                alt="girl"
                className="h-[400px] w-[500px] rounded-t-2xl "
              />
            </div>
            <div className="bg-white w-[500px] h-[260px] rounded-b-2xl">
              <h1 className="text-4xl font-bold pt-8 pl-6">
                Application Development
              </h1>
              <p className="flex items-center gap-2 text-yellow-500 text-2xl mt-5 pl-6 ">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
                <span className="text-black text-xl"> 3467 Rating </span>
              </p>
              <hr className="border border-slate-400 my-7 mx-6" />
              <div className="flex justify-around ">
                <div className="flex items-center gap-2">
                  <AiFillLike className="text-blue-500 text-2xl" />
                  <p>like</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaComment className="text-blue-500 text-2xl" />
                  <p>Comment</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaShareAltSquare className="text-blue-500 text-2xl" />
                  <p>Share</p>
                </div>
              </div>
            </div>
          </div>

          <div className="drop-shadow-2xl">
            <div>
              <img
                src={course2}
                alt="girl"
                className="h-[400px] w-[500px] rounded-t-2xl "
              />
            </div>
            <div className="bg-white w-[500px] h-[260px] rounded-b-2xl">
              <h1 className="text-4xl font-bold pt-8 pl-6">
                Application Development
              </h1>
              <p className="flex items-center gap-2 text-yellow-500 text-2xl mt-5 pl-6 ">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
                <span className="text-black text-xl"> 3467 Rating </span>
              </p>
              <hr className="border border-slate-400 my-7 mx-6" />
              <div className="flex justify-around ">
                <div className="flex items-center gap-2">
                  <AiFillLike className="text-blue-500 text-2xl" />
                  <p>like</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaComment className="text-blue-500 text-2xl" />
                  <p>Comment</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaShareAltSquare className="text-blue-500 text-2xl" />
                  <p>Share</p>
                </div>
              </div>
            </div>
          </div>

          <div className="drop-shadow-2xl">
            <div>
              <img
                src={course3}
                alt="girl"
                className="h-[400px] w-[500px] rounded-t-2xl "
              />
            </div>
            <div className="bg-white w-[500px] h-[260px] rounded-b-2xl">
              <h1 className="text-4xl font-bold pt-8 pl-6">
                Application Development
              </h1>
              <p className="flex items-center gap-2 text-yellow-500 text-2xl mt-5 pl-6 ">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
                <span className="text-black text-xl"> 3467 Rating </span>
              </p>
              <hr className="border border-slate-400 my-7 mx-6" />
              <div className="flex justify-around ">
                <div className="flex items-center gap-2">
                  <AiFillLike className="text-blue-500 text-2xl" />
                  <p>like</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaComment className="text-blue-500 text-2xl" />
                  <p>Comment</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaShareAltSquare className="text-blue-500 text-2xl" />
                  <p>Share</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-9 mb-9">
          <div className="drop-shadow-2xl">
            <div>
              <img
                src={course4}
                alt="girl"
                className="h-[400px] w-[500px] rounded-t-2xl "
              />
            </div>
            <div className="bg-white w-[500px] h-[260px] rounded-b-2xl">
              <h1 className="text-4xl font-bold pt-8 pl-6">
                Application Development
              </h1>
              <p className="flex items-center gap-2 text-yellow-500 text-2xl mt-5 pl-6 ">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
                <span className="text-black text-xl"> 3467 Rating </span>
              </p>
              <hr className="border border-slate-400 my-7 mx-6" />
              <div className="flex justify-around ">
                <div className="flex items-center gap-2">
                  <AiFillLike className="text-blue-500 text-2xl" />
                  <p>like</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaComment className="text-blue-500 text-2xl" />
                  <p>Comment</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaShareAltSquare className="text-blue-500 text-2xl" />
                  <p>Share</p>
                </div>
              </div>
            </div>
          </div>

          <div className="drop-shadow-2xl">
            <div>
              <img
                src={course5}
                alt="girl"
                className="h-[400px] w-[500px] rounded-t-2xl "
              />
            </div>
            <div className="bg-white w-[500px] h-[260px] rounded-b-2xl">
              <h1 className="text-4xl font-bold pt-8 pl-6">
                Application Development
              </h1>
              <p className="flex items-center gap-2 text-yellow-500 text-2xl mt-5 pl-6 ">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
                <span className="text-black text-xl"> 3467 Rating </span>
              </p>
              <hr className="border border-slate-400 my-7 mx-6" />
              <div className="flex justify-around ">
                <div className="flex items-center gap-2">
                  <AiFillLike className="text-blue-500 text-2xl" />
                  <p>like</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaComment className="text-blue-500 text-2xl" />
                  <p>Comment</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaShareAltSquare className="text-blue-500 text-2xl" />
                  <p>Share</p>
                </div>
              </div>
            </div>
          </div>
          <div className="drop-shadow-2xl">
            <div>
              <img
                src={course6}
                alt="girl"
                className="h-[400px] w-[500px] rounded-t-2xl "
              />
            </div>
            <div className="bg-white w-[500px] h-[260px] rounded-b-2xl">
              <h1 className="text-4xl font-bold pt-8 pl-6">
                Application Development
              </h1>
              <p className="flex items-center gap-2 text-yellow-500 text-2xl mt-5 pl-6 ">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
                <span className="text-black text-xl"> 3467 Rating </span>
              </p>
              <hr className="border border-slate-400 my-7 mx-6" />
              <div className="flex justify-around ">
                <div className="flex items-center gap-2">
                  <AiFillLike className="text-blue-500 text-2xl" />
                  <p>like</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaComment className="text-blue-500 text-2xl" />
                  <p>Comment</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaShareAltSquare className="text-blue-500 text-2xl" />
                  <p>Share</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
