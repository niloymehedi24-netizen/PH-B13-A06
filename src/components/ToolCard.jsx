import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { toast } from "react-toastify";

const ToolCard = ({ tool, carts, setCarts }) => {
  const [isBuyNow, setIsBuyNow] = useState(false);
  const handleBuyNow = () => {
    setIsBuyNow(true);
    const isFound = carts.find((item) => item.id === tool.id);
    console.log(isFound);
    if (isFound) {
      toast.error("Product already added! Buy Other Product");
      return;
    }
    setCarts([...carts, tool]);
    toast.success("Product Added to Cart");
  };
  return (
    <div className="space-y-4 shadow-2xl rounded-lg p-5">
      <div className="space-y-4">
        <div>
          <img className="h-10 w-10" src={tool.icon} alt="" />
        </div>

        <div className="space-y-4">
          <h3 className="text-black text-xl font-bold mb-3">{tool.name}</h3>
          <p className="text-[#627382] font-normal">{tool.description}</p>
          <h3 className="text-black text-xl font-bold m-3">
            ${tool.price}{" "}
            <span className="text-[#627382] font-normal">/Month</span>
          </h3>
          <div className="flex gap-2 items-center mt-3">
            <FaCheck className="text-[#30B868]"></FaCheck>
            <p>{tool.features}</p>
          </div>
          <button
            onClick={handleBuyNow}
            className="btn items-center text-center rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white w-11/12 mt-3"
          >
            {isBuyNow ? "Added to Cart" : "Buy Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;
