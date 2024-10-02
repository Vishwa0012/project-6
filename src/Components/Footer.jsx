import React from "react";
import { PiBookOpenTextFill } from "react-icons/pi";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";

const Footer = () => {
  return (
    <>
      <section className="bg-[#E4EBF9] px-40 py-28 ">
        <div className="flex items-center justify-between">
          <div className="">
            <div className="flex gap-4">
              <PiBookOpenTextFill className="text-5xl text-[#2176E6]" />
              <h1 className="text-5xl font-bold">E-LEARN</h1>
            </div>
            <div>
              <p className="my-10 font-semibold text-xl">Privacy Policy</p>
              <p>
                All Copyrights reserved A.VISHWA <br /> On july 2024 .
              </p>
            </div>
          </div>

          <div>
            <div>
              <h1 className="text-3xl font-bold mb-8">Home</h1>
            </div>
            <div className="flex flex-col gap-3">
              <h1>HOME</h1>
              <h1>ABOUT US</h1>
              <h1>OUR PROCESS</h1>
              <h1>SERVICE</h1>
            </div>
          </div>

          <div>
            <div>
              <h1 className="text-4xl font-bold mb-8">Latest Courses</h1>
            </div>
            <div className="flex flex-col gap-3">
              <h1>INFORMATION TECHNOLOGY</h1>
              <h1>CIVIL ENGINEERING</h1>
              <h1>ROBOTICS</h1>
              <h1>AGRICULTURE</h1>
            </div>
          </div>

          <div>
            <div>
              <h1 className="text-4xl font-bold mb-8">Community</h1>
            </div>
            <div className="flex flex-col gap-3">
              <h1>OUR PREMIMUM</h1>
              <h1>TIME PLANS</h1>
              <h1>REFER A FRIEND</h1>
              <h1>FEES</h1>
            </div>
          </div>

          <div>
            <div>
              <h1 className="text-4xl font-bold mb-8  ">Stay Connected</h1>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-4 items-center">
                <TiSocialTwitter className="text-xl" />
                <h1 className="text-xl">Twitter</h1>
              </div>
              <div className="flex gap-4 items-center">
                <TiSocialInstagram className="text-xl" />
                <h1 className="text-xl">Twitter</h1>
              </div>
              <div className="flex gap-4 items-center">
                <TiSocialYoutube className="text-xl" />
                <h1 className="text-xl">Twitter</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
