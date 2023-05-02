import React from "react";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { ImPinterest } from "react-icons/im";

import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <div className="w-full bg-black max-h-screen">
      <div className="max-w-[1440px] h-full mx-auto py-10 font-alata">
        <div className="desktop:grid desktop:grid-cols-2 w-full">
          <div className="flex mobile:flex-col desktop:flex-col desktop:items-start mobile:items-center justify-between gap-8">
            <img src={logo} alt="" />

            <div className="flex desktop:flex-row mobile:flex-col items-center gap-5">
              <p className="text-white text-base desktop:mr-4 desktop:ml-0 mobile:mx-4 cursor-pointer link link-underline link-underline-black pb-3">
                About
              </p>
              <p className="text-white text-base mx-4 cursor-pointer link link-underline link-underline-black pb-3">
                Careers
              </p>
              <p className="text-white text-base mx-4 cursor-pointer link link-underline link-underline-black pb-3">
                Events
              </p>
              <p className="text-white text-base mx-4 cursor-pointer link link-underline link-underline-black pb-3">
                Products
              </p>
              <p className="text-white text-base mx-4 cursor-pointer link link-underline link-underline-black pb-3">
                Support
              </p>
            </div>
          </div>

          <div className="flex mobile:flex-col desktop:flex-col desktop:items-end mobile:items-center justify-between gap-8 mobile:pt-10 desktop:pt-0">
            <div className="flex flex-row gap-3">
              <span className="link link-underline link-underline-black pb-2">
                <AiFillFacebook
                  className="cursor-pointer text-white"
                  size={32}
                />
              </span>
              <span className="link link-underline link-underline-black pb-2">
                <AiOutlineTwitter
                  className="cursor-pointer text-white"
                  size={32}
                />
              </span>
              <span className="link link-underline link-underline-black pb-2">
                <ImPinterest className="cursor-pointer text-white" size={32} />
              </span>
              <span className="link link-underline link-underline-black pb-2">
                <AiOutlineInstagram
                  className="cursor-pointer text-white"
                  size={32}
                />
              </span>
            </div>
            <p className="text-[#8c8c8c]">
              © 2021 Loopstudios. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
