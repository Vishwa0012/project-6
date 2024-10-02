import React from "react";

const Herotext = () => {
  return (
    <>
      <section className="bg-[url('src/assets/Images/Man.jpg')] h-[85vh] bg-no-repeat bg-cover w-[83vw] ml-40 rounded-3xl ">
        <div className="ml-14 pt-44">
          <div className="ml-4">
            <h1 className="text-6xl text-white font-semibold">
              Find Our Best Online <br /> Courses & Become <br /> the Master
            </h1> 
            <p className="text-white pt-12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Sapiente officia saepe nesciunt quas.
            </p>
          </div>
          <div className="ml-4">
            <input
              type="text"
              placeholder="Search your course"
              className="py-6 pl-4   pr-24 mt-12 rounded-s-md"
            />
            <button className="bg-[#2176E6] px-8 py-6 text-white rounded-md">
              Search
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Herotext;
