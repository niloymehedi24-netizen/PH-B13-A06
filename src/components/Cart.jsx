import React from "react";
import { MdDeleteSweep } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, product) => sum + product.price, 0);

  const handlePayment = () => {
    setCarts([]);
  };

  const handleDelete = (item) => {
    const filteredArray = carts.filter((c) => c.id != item.id);
    setCarts(filteredArray);
  };

  return (
    <div className="max-w-5xl mx-auto shadow bg-gray-200 rounded-lg p-5">
      <h2 className="text-2xl font-bold text-center mb-10">Your Cart</h2>
      {carts.length === 0 ? (
        <p className="text-center">
          Cart is Empty! <br />
          Please Buy Now!
        </p>
      ) : (
        <>
          <div className="space-y-5 mt-3">
            {carts.map((product) => (
              <div
                key={product.id}
                className="shadow bg-zinc-100 rounded-lg items-center justify-between p-3 flex"
              >
                <div className="flex gap-3 items-center">
                  <img
                    className="h-10 w-10 object-contain rounded-full"
                    src={product.icon}
                    alt=""
                  />
                  <div>
                    <h3 className="text-black text-lg font-normal">
                      {product.name}
                    </h3>
                    <p className="items-center text-[#627382]">
                      ${product.price}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleDelete(product)}
                  className="btn hover:bg-red-500"
                >
                  <RiDeleteBin6Line></RiDeleteBin6Line>
                </button>
              </div>
            ))}
          </div>
          <div>
            <div className="flex justify-between mt-3">
              <div className="text-[#627382]">Total</div>
              <div className="font-bold text-xl">${totalPrice}</div>
            </div>
          </div>
          <button
            onClick={handlePayment}
            className="btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white w-full mt-5"
          >
            Proceed To Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
