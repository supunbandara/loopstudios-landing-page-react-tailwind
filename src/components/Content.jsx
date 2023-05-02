import React from "react";

import { images } from "../constants";

const Content = () => {
  return (
    <div className="max-w-[1440px] mx-auto mobile:px-6 desktop:px-0 pb-12">
      <div className="desktop:grid desktop:grid-cols-5 flex flex-col w-full items-center desktop:py-32 mobile:py-20">
        <div className="desktop:col-span-3">
          <img src={images.interactive} className="w-full" alt="" />
        </div>
        <div className="desktop:col-span-2 desktop:pl-24 desktop:py-24 mobile:py-10 bg-white desktop:relative desktop:right-44 desktop:top-44 mobile:text-center desktop:text-left">
          <h2 className="desktop:text-5xl mobile:text-4xl font-Josefin uppercase pb-4">
            The leader in interactive VR
          </h2>
          <p className="text-md mobile:px-3 desktop:px-0 text-[#8c8c8c] font-alata">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>

      <div className="flex items-center desktop:justify-between mobile:justify-center font-Josefin">
        <h2 className="uppercase text-black text-4xl">Our creations</h2>
        <button className="mobile:hidden desktop:block uppercase leading-normal border-2 border-black text-black font-bold hover:bg-black hover:text-white px-8 py-2">
          See all
        </button>
      </div>

      <div className="grid desktop:grid-cols-4 mobile:grid-cols-1 gap-8 mt-14 desktop:mb-28 mobile:mb-4 uppercase font-Josefin desktop:text-4xl mobile:text-2xl">
        <div className="relative cursor-pointer">
          <div
            className="hidden desktop:block bg-no-repeat bg-center w-full h-[600px] hover:opacity-50 transition duration-300 bg-cover"
            style={{ backgroundImage: `url(${images.earth})` }}
          ></div>

          <div
            className="block desktop:hidden bg-no-repeat bg-center w-full h-40 hover:opacity-50 transition duration-300 bg-cover"
            style={{ backgroundImage: `url(${images.earthMobile})` }}
          ></div>

          <div className="absolute inset-0 bg-white bg-opacity-0 hover:bg-opacity-50 duration-300 flex items-end justify-start">
            <h2 className="text-white font-medium hover:text-black transition-colors duration-300 desktop:p-10 mobile:p-5">
              Deep Earth
            </h2>
          </div>
        </div>

        <div className="relative cursor-pointer">
          <div
            className="hidden desktop:block bg-no-repeat bg-center w-full h-[600px] hover:opacity-50 transition duration-300 bg-cover"
            style={{ backgroundImage: `url(${images.arcade})` }}
          ></div>

          <div
            className="block desktop:hidden bg-no-repeat bg-center w-full h-40 hover:opacity-50 transition duration-300 bg-cover"
            style={{ backgroundImage: `url(${images.arcadeMobile})` }}
          ></div>
          <div className="absolute inset-0 bg-white bg-opacity-0 hover:bg-opacity-50 duration-300 flex items-end justify-start">
            <h2 className="text-white font-medium hover:text-black transition-colors duration-300 desktop:p-10 mobile:p-5">
              Night arcade
            </h2>
          </div>
        </div>

        <div className="relative cursor-pointer">
          <div
            className="hidden desktop:block bg-no-repeat bg-center w-full h-[600px] hover:opacity-50 transition duration-300 bg-cover"
            style={{ backgroundImage: `url(${images.soccer})` }}
          ></div>

          <div
            className="block desktop:hidden bg-no-repeat bg-center w-full h-40 hover:opacity-50 transition duration-300 bg-cover"
            style={{ backgroundImage: `url(${images.soccerMobile})` }}
          ></div>
          <div className="absolute inset-0 bg-white bg-opacity-0 hover:bg-opacity-50 duration-300 flex items-end justify-start">
            <h2 className="text-white font-medium hover:text-black transition-colors duration-300 desktop:p-10 mobile:p-5">
              Soccer team VR
            </h2>
          </div>
        </div>

        <div className="relative cursor-pointer">
          <div
            className="hidden desktop:block bg-no-repeat bg-center w-full h-[600px] hover:opacity-50 transition duration-300 bg-cover"
            style={{ backgroundImage: `url(${images.grid})` }}
          ></div>

          <div
            className="block desktop:hidden bg-no-repeat bg-center w-full h-40 hover:opacity-50 transition duration-300 bg-cover"
            style={{ backgroundImage: `url(${images.gridMobile})` }}
          ></div>
          <div className="absolute inset-0 bg-white bg-opacity-0 hover:bg-opacity-50 duration-300 flex items-end justify-start">
            <h2 className="text-white font-medium hover:text-black transition-colors duration-300 desktop:p-10 mobile:p-5">
              The grid
            </h2>
          </div>
        </div>

        <div className="relative cursor-pointer">
          <div
            className="hidden desktop:block bg-no-repeat bg-center w-full h-[600px] hover:opacity-50 transition duration-300 bg-cover"
            style={{ backgroundImage: `url(${images.above})` }}
          ></div>

          <div
            className="block desktop:hidden bg-no-repeat bg-center w-full h-40 hover:opacity-50 transition duration-300 bg-cover"
            style={{ backgroundImage: `url(${images.aboveMobile})` }}
          ></div>
          <div className="absolute inset-0 bg-white bg-opacity-0 hover:bg-opacity-50 duration-300 flex items-end justify-start">
            <h2 className="text-white font-medium hover:text-black transition-colors duration-300 desktop:p-10 mobile:p-5">
              From up above VR
            </h2>
          </div>
        </div>

        <div className="relative cursor-pointer">
          <div
            className="hidden desktop:block bg-no-repeat bg-center w-full h-[600px] hover:opacity-50 transition duration-300 bg-cover"
            style={{ backgroundImage: `url(${images.borealis})` }}
          ></div>

          <div
            className="block desktop:hidden bg-no-repeat bg-center w-full h-40 hover:opacity-50 transition duration-300 bg-cover"
            style={{ backgroundImage: `url(${images.borealisMobile})` }}
          ></div>
          <div className="absolute inset-0 bg-white bg-opacity-0 hover:bg-opacity-50 duration-300 flex items-end justify-start">
            <h2 className="text-white font-medium hover:text-black transition-colors duration-300 desktop:p-10 mobile:p-5">
              Pocket borealis
            </h2>
          </div>
        </div>

        <div className="relative cursor-pointer">
          <div
            className="hidden desktop:block bg-no-repeat bg-center w-full h-[600px] hover:opacity-50 transition duration-300 bg-cover"
            style={{ backgroundImage: `url(${images.curiosity})` }}
          ></div>

          <div
            className="block desktop:hidden bg-no-repeat bg-center w-full h-40 hover:opacity-50 transition duration-300 bg-cover"
            style={{ backgroundImage: `url(${images.curiosityMobile})` }}
          ></div>
          <div className="absolute inset-0 bg-white bg-opacity-0 hover:bg-opacity-50 duration-300 flex items-end justify-start">
            <h2 className="text-white font-medium hover:text-black transition-colors duration-300 desktop:p-10 mobile:p-5">
              The curiosity
            </h2>
          </div>
        </div>

        <div className="relative cursor-pointer">
          <div
            className="hidden desktop:block bg-no-repeat bg-center w-full h-[600px] hover:opacity-50 transition duration-300 bg-cover"
            style={{ backgroundImage: `url(${images.fisheye})` }}
          ></div>

          <div
            className="block desktop:hidden bg-no-repeat bg-center w-full h-40 hover:opacity-50 transition duration-300 bg-cover"
            style={{ backgroundImage: `url(${images.fisheyeMobile})` }}
          ></div>
          <div className="absolute inset-0 bg-white bg-opacity-0 hover:bg-opacity-50 duration-300 flex items-end justify-start">
            <h2 className="text-white font-medium hover:text-black transition-colors duration-300 desktop:p-10 mobile:p-5">
              Make it fisheye
            </h2>
          </div>
        </div>
      </div>

      <div className="desktop:hidden flex flex-col md:flex-row items-center justify-between font-Josefin">
        <button className="uppercase leading-normal border-2 border-black text-black hover:bg-black hover:text-white px-8 py-2 mt-4">
          See all
        </button>
      </div>
    </div>
  );
};

export default Content;
