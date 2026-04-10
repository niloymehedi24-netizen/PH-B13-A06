import React from "react";

const Stats = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex justify-around gap-20 p-15">
      <div className="text-center items-center space-y-2">
        <h1 className="font-bold text-white text-5xl">50K+</h1>
        <p className="font-medium text-white">Active Users</p>
      </div>
      <div className="text-center items-center space-y-2">
        <h1 className="font-bold text-white text-5xl">200+</h1>
        <p className="font-medium text-white">Premium Tools</p>
      </div>
      <div className="text-center items-center space-y-2">
        <h1 className="font-bold text-white text-5xl">4.9</h1>
        <p className="font-medium text-white">Rating</p>
      </div>
    </div>
  );
};

export default Stats;
