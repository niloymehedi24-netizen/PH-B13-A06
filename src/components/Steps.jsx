import React from "react";
import UserImage from "../assets/user.png";
import PackageImage from "../assets/package.png";
import RocketImage from "../assets/rocket.png";

const Steps = () => {
  return (
    <div className="max-w-5xl mx-auto space-x-4 mb-50">
      <div className="items-center text-center mt-8 ">
        <h1 className="text-4xl font-bold text-[#101727] mb-3">
          Get Started in 3 Steps
        </h1>
        <p className="text-[#627382] font-normal">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="rounded-lg h-80 w-80 shadow-2xl bg-transparent mt-8">
          <div>
            <span class="relative top-0 -right-70 bg-purple-500 text-white text-sm px-2 py-1 rounded-full">
              01
            </span>
          </div>
          <div className="justify-center items-center">
            <img className="mt-8 ml-30" src={UserImage} alt="" />
            <div className="items-center p-6 text-center space-y-5">
              <h4 className="text-[#101727] font-bold text-xl">
                Create Account
              </h4>
              <p className="font-normal text-[#627382]">
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-md h-80 w-80 shadow-2xl bg-transparent mt-8">
          <div>
            <span class="relative top-0 -right-70 bg-purple-500 text-white text-sm px-2 py-1 rounded-full">
              02
            </span>
          </div>
          <div className="justify-center items-center">
            <img className="mt-8 ml-30" src={PackageImage} alt="" />
            <div className="items-center p-6 text-center space-y-5">
              <h4 className="text-[#101727] font-bold text-xl">
                Choose Products
              </h4>
              <p className="font-normal text-[#627382]">
                Browse our catalog and select the tools that fit your needs.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-md h-80 w-80 shadow-2xl bg-transparent mt-8">
          <div>
            <span class="relative top-0 -right-70 bg-purple-500 text-white text-sm px-2 py-1 rounded-full">
              03
            </span>
          </div>
          <div className="justify-center items-center">
            <img className="mt-8 ml-30" src={RocketImage} alt="" />
            <div className="items-center p-6 text-center space-y-5">
              <h4 className="text-[#101727] font-bold text-xl">
                Start Creating
              </h4>
              <p className="font-normal text-[#627382]">
                Download and start using your premium tools immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
