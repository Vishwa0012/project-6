import React from "react";
import { PiBookOpenTextFill } from "react-icons/pi";

const Navbar = () => {
  return (
    <>
      <section className="my-5 mt-3">
        <div className="flex justify-around text-center">
          <div className="flex items-center gap-2">
            <h1 className="text-[#2176E6] text-6xl">
              <PiBookOpenTextFill />
            </h1>
            <h1 className="text-4xl font-semibold">E-LEARN</h1>
          </div>
          <ul className="flex gap-10 text-2xl font-semibold items-center cursor-pointer">
            <li>Home</li>
            <li>About</li>
            <li>Courses</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
          <div className="flex items-center text-center gap-8 cursor-pointer">
            <h1 className="text-2xl font-semibold">Log in</h1>
            <h1 className="text-xl text-white bg-[#2176E6] px-4 py-2  rounded-md ">
              Sign up
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
