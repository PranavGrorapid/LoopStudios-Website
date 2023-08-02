import React from "react";

const Hero = () => {
  const navLinks = ["About", "Careers", "Events", "Products", "Support"];

  return (
    <div className="pb-10" id="heroSection">
      <div className="  mx-auto flex justify-between pt-10 items-center pb-20  px-6 xl:px-10">
        <div>
          <img src="./images/logo.svg" alt="logo" />
        </div>

        <div className=" hidden md:flex text-white justify-between items-center ">
          {navLinks.map((link) => {
            return <div className="ms-5 font-alata font-bold hover:border-b-4 pb-1 hover:border-slate-600 md:text-m xl:text-xl">{link}</div>;
          })}
        </div>


      
          <div className="md:hidden">
            <button
              id="menu-btn"
              type="button"
              className="z-40 block hamburger md:hidden focus:outline-none"
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>



      </div>

      <div className=" text-white mt-52 max-w-lg p-1 mx-5  border-2  py-5    border-white text-4xl  md:max-w-xs lg:ms-10">
            IMPRESSIVE EXPERIENCES THAT DELIVER
        </div>

     


    </div>
  );
};

export default Hero;
