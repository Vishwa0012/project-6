import React from "react";

const Newsletter = () => {
  return (
    <section>
      <div className="bg-[#F9F9FB] h-[500px] flex justify-center items-center text-center">
        <div className="">
          <h1 className="text-5xl font-bold">Subscribe Newsletter</h1>
          <p className="font-semibold pt-5 pb-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            similique eos commodi. <br /> Lorem ipsum, dolor sit amet
            consectetur adipisicing elit.
          </p>
          <div className="">
            <input
              type="text"
              placeholder="Enter Your E-mail Address"
              className="py-4 pl-4 pr-20 drop-shadow-lg "
            />
            <button className="bg-blue-500 py-4 px-8 text-white rounded-e-xl drop-shadow-lg ">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
