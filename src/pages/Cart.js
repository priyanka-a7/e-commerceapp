import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/Cart/CartItem";
import CartSummary from "../components/Cart/CartSummary";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
<div className="cart container mx-auto px-4 py-8">
  <h1 className="text-3xl font-bold mb-6 text-center sm:text-left">Shopping Cart</h1>
  {cart.length > 0 ? (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Cart Items Section */}
      <div className="cart-items flex-1 space-y-6">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      {/* Cart Summary Section */}
      <div className="cart-summary w-full lg:w-1/3 bg-gray-100 p-6 rounded-md shadow">
        <CartSummary />
      </div>
    </div>
  ) : (
    <p className="text-center text-lg text-gray-600">Your cart is empty.</p>
  )}
</div>

  );
};

export default Cart;