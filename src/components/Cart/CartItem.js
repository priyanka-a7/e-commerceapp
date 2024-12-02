import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart-item flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-md shadow-md gap-4">
    {/* Product Image */}
    <img
      src={item.image}
      alt={item.name}
      className="w-24 h-24 rounded object-cover"
    />
  
    {/* Product Details */}
    <div className="flex-1 space-y-2 text-center sm:text-left">
      <h3 className="text-lg font-medium">{item.name}</h3>
      <p className="text-gray-600">Rs.{item.price.toFixed(2)}</p>
    </div>
  
    {/* Quantity Controls */}
    <div className="flex items-center space-x-2">
      <button
        onClick={() => updateQuantity(item.id, item.quantity - 1)}
        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
      >
        -
      </button>
      <span className="text-lg font-semibold">{item.quantity}</span>
      <button
        onClick={() => updateQuantity(item.id, item.quantity + 1)}
        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
      >
        +
      </button>
    </div>
  
    {/* Remove Button */}
    <button
      onClick={() => removeFromCart(item.id)}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
    >
      Remove
    </button>
  </div>
  
  );
};

export default CartItem;