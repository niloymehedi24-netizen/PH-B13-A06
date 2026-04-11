import React from "react";

const Cart = ({ carts }) => {
  const totalPrice = carts.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="max-w-5xl mx-auto shadow bg-gray-200 rounded-lg p-6">
      <h2 className="text-2xl font-bold items-center">Your Cart</h2>
      <div className="space-y-5 mt-3">
        {carts.map((product) => (
          <div
            key={product.id}
            className="shadow bg-zinc-100 rounded-lg items-center justify-between p-3"
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
                <p className="items-center text-[#627382]">${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className="flex justify-between mt-3">
          <div className="text-[#627382]">Total</div>
          <div className="font-bold text-xl">${totalPrice}</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
