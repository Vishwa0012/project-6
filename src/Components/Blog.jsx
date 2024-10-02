import React from "react";
import blog1 from "../assets/Images/blog1.jpg";
import blog2 from "../assets/Images/blog2.jpg";
import blog3 from "../assets/Images/blog3.jpg";

const Blog = () => {
  return (
    <>
      <section className="px-40 py-28 bg-slate-100 ">
        <div className="flex justify-between">
          <div>
            <h1 className="text-5xl font-bold">Our Latest Blog</h1>
            <p className="bg-[#2176E6] h-2 w-28 mt-8"></p>
          </div>
          <div className="mt-2 flex gap-10">
            <img
              src="src/assets/Images/arrows (1).png"
              alt=""
              className="h-14 w-14"
            />
            <img
              src="src/assets/Images/arrows.png"
              alt=""
              className="h-14 w-14"
            />
          </div>
        </div>
        <div className="mt-14 flex justify-between">
          <div className="drop-shadow-2xl">
            <div>
              <img
                src={blog1}
                alt="girl"
                className="h-[400px] w-[500px] rounded-t-2xl "
              />
            </div>
            <div className="bg-white w-[500px] h-[260px] rounded-b-2xl">
              <div className="flex pt-6 pl-8 gap-5">
                <p>AUG2020VISH</p>
                <p>4 comments</p>
              </div>

              <div className="pt-6 pl-8">
                <h1 className="text-2xl font-bold">
                  Moris Perform en lifaily monalish <br />
                  diaglonish sit ernet commit
                </h1>
                <button className="text-blue-500 text-xl pt-8">
                  READ MORE...
                </button>
              </div>
            </div>
          </div>

          <div className="drop-shadow-2xl">
            <div>
              <img
                src={blog2}
                alt="girl"
                className="h-[400px] w-[500px] rounded-t-2xl "
              />
            </div>
            <div className="bg-white w-[500px] h-[260px] rounded-b-2xl">
              <div className="flex pt-6 pl-8 gap-5">
                <p>AUG2020VISH</p>
                <p>4 comments</p>
              </div>

              <div className="pt-6 pl-8">
                <h1 className="text-2xl font-bold">
                  Moris Perform en lifaily monalish <br />
                  diaglonish sit ernet commit
                </h1>
                <button className="text-blue-500 text-xl pt-8">
                  READ MORE...
                </button>
              </div>
            </div>
          </div>

          <div className="drop-shadow-2xl">
            <div>
              <img
                src={blog3}
                alt="girl"
                className="h-[400px] w-[500px] rounded-t-2xl "
              />
            </div>
            <div className="bg-white w-[500px] h-[260px] rounded-b-2xl">
              <div className="flex pt-6 pl-8 gap-5">
                <p>AUG2020VISH</p>
                <p>4 comments</p>
              </div>

              <div className="pt-6 pl-8">
                <h1 className="text-2xl font-bold">
                  Moris Perform en lifaily monalish <br />
                  diaglonish sit ernet commit
                </h1>
                <button className="text-blue-500 text-xl pt-8">
                  READ MORE...
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
