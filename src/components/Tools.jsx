import React, { use } from "react";
import { FaCheck } from "react-icons/fa";
import ToolCard from "./ToolCard";

const Tools = ({ toolPromise }) => {
  const tools = use(toolPromise);
  return (
    <div>
      <div className="space-y-4">
        <h1 className="text-black text-4xl font-bold items-center text-center">
          Premium Digital Tools
        </h1>
        <p className="text-[#627382] font-normal items-center text-center">
          Choose from our curated collection of premium digital products
          designed <br />
          to boost your productivity and creativity.
        </p>
      </div>
      <div className="max-w-5xl mx-auto gap-4 mt-8 grid grid-cols-1 lg:grid-cols-3">
        {tools.map((tool) => (
          <ToolCard tool={tool}></ToolCard>
        ))}
      </div>
    </div>
  );
};

export default Tools;
