import React from "react";

const Future = () => {
  return (
    <>
      <section className="bg-[#e4ebf9] h-[800px]">
        <div className=" flex justify-between mx-40 items-center">
          <div className="mt-20">
            <h1 className="text-6xl font-bold">
              Find Your Course That <br /> Makes Bright Future
            </h1>
            <p className="bg-blue-700 w-36 h-2 my-8"></p>
            <p className="font-semibold text-xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt{" "}
              <br /> consequatur quam illum quasi exercitationem rerum
              quibusdam. Lorem <br />
              ipsum, dolor sit amet consectetur adipisicing elit. Impedit
              deserunt <br /> Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. <br />
              Sed quia repudiandae veniam eius aut quod vero.
            </p>
            <div className="mt-8">
              <button className="bg-[#2176E6] text-white py-3 px-6 rounded-lg">
                Get Started
              </button>
            </div>
          </div>
          <div>
            <iframe
              src="https://www.youtube.com/embed/NE9ZW-fxP0w?si=E2ihsLtnLTKhHtsB"
              frameborder="0"
              width="600"
              height="650"
              className="rounded-3xl mt-20"
              title="course video"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Future;
