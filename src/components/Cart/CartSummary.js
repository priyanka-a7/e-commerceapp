


import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartSummary = () => {
  const { cart, totalCost } = useContext(CartContext);

  return (
    <div className="cart-summary bg-gray-100 p-6 rounded-md shadow-md">
  <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
  <ul className="space-y-2 mb-6">
    {cart.map((item) => (
      <li key={item.id} className="flex justify-between">
        <span>{item.name} x {item.quantity}</span>
        <span>Rs.{(item.price * item.quantity).toFixed(2)}</span>
      </li>
    ))}
  </ul>
  <h3 className="text-lg font-semibold border-t pt-4">Total: Rs.{totalCost.toFixed(2)}</h3>
  <button className="mt-4 w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
    Checkout
  </button>
</div>

  );
};

export default CartSummary;