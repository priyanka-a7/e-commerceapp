import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.name} added to cart successfully!`);
  };

  return (
    <div className="product-card border rounded-lg shadow-md overflow-hidden flex flex-col items-center p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="text-lg font-medium mt-4">{product.name}</h3>
      <p className="text-sm text-gray-600 mt-2">{product.description}</p>
      <p className="text-xl font-semibold mt-4">Rs. {product.price.toFixed(2)}</p>
      <button
        onClick={handleAddToCart}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
