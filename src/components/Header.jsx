import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";

import logo from "../assets/logo.svg";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <nav
        className={`w-full h-32 left-0 top-0 z-50 ${
          toggleMenu
            ? "bg-black fixed desktop:bg-transparent desktop:absolute"
            : "bg-transparent absolute"
        }`}
      >
        <div className="max-w-[1440px] mx-auto mobile:px-6 desktop:px-0 h-full flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="" className="text-white font-bold text-lg min-w-[121px]">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className="hidden desktop:block flex-grow text-right text-white font-alata">
            <a href="#" className="inline-block py-4 px-2 mr-8 relative">
              <span class="link link-underline link-underline-black pb-3">
                About
              </span>
            </a>
            <a href="#" className="py-4 px-2 mr-8">
              <span class="link link-underline link-underline-black pb-3">
                Careers
              </span>
            </a>
            <a href="#" className="py-4 px-2 mr-8">
              <span class="link link-underline link-underline-black pb-3">
                Events
              </span>
            </a>
            <a href="#" className="py-4 px-2 mr-8">
              <span class="link link-underline link-underline-black pb-3">
                Products
              </span>
            </a>
            <a href="#" className="py-4 px-2 mr-8">
              <span class="link link-underline link-underline-black pb-3">
                Support
              </span>
            </a>
          </div>

          <div className="desktop:hidden flex-grow-0 text-right">
            {!toggleMenu && (
              <FiMenu
                fontSize={28}
                className="text-white cursor-pointer"
                onClick={() => setToggleMenu(true)}
              />
            )}
            {toggleMenu && (
              <AiOutlineClose
                fontSize={28}
                className="text-white cursor-pointer"
                onClick={() => setToggleMenu(false)}
              />
            )}

            {toggleMenu && (
              <ul className="z-10 top-[120px] right-0 px-6 fixed h-screen w-full desktop:hidden flex flex-col items-start bg-black text-2xl text-white uppercase font-Josefin gap-2 pt-24">
                <li className="cursor-pointer my-2">About</li>
                <li className="cursor-pointer my-2">Careers</li>
                <li className="cursor-pointer my-2">Events</li>
                <li className="cursor-pointer my-2">Products</li>
                <li className="cursor-pointer my-2">Support</li>
              </ul>
            )}
          </div>
        </div>
      </nav>

      <div className="w-full h-[850px] relative">
        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-top desktop:bg-hero-image-desktop mobile:bg-hero-image-mobile"></div>

        <div className="absolute flex max-w-[1440px] mx-auto my-0 w-full items-center top-0 bottom-0 right-0 left-0 z-2">
          <div className="max-w-[650px] mobile:px-6 desktop:px-0">
            <h1 className="text-white desktop:text-7xl mobile:text-[2.5rem] mobile:leading-none mobile:px-6 mobile:py-6 uppercase font-Josefin border-2 desktop:px-12 desktop:py-12 desktop:mr-[-5rem]">
              Immersive experiences
              <span className="mobile:mr-6 desktop:mr-0"> that</span> deliver
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
