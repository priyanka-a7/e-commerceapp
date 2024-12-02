import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/Product/ProductCard";
import ProductFilter from "../components/Product/ProductFilter";

const products = [
  {
    id: 1,
    name: "The Great Gatsby",
    description: "Classic novel portraying Jazz Age and the pursuit of dreams.",
    price: 1000.00,
    category: "books",
    image: "https://i0.wp.com/www.porchreader.com/wp-content/uploads/2021/08/Great-Gatsby-scaled.jpg?resize=480%2C640&ssl=1",
  },
  {
    id: 2,
    name: "1984 by George Orwell",
    description: "A dystopian novel that explores themes of surveillance and totalitarianism.",
    price: 1500.00,
    category: "books",
    image: "https://i5.walmartimages.com/asr/7bf3d820-2d6f-4ba8-844b-5d318118ae56.fba59fd1f7249b12fed3618c3a2f6d80.jpeg",
  },
  {
    id: 3,
    name: "Leather Jacket",
    description: "A stylish and durable black leather jacket for all seasons.",
    price: 6500.00,
    category: "fashion",
    image: "https://i.ebayimg.com/images/g/O8cAAOSwJMNnOGSj/s-l1200.jpg",
  },
  {
    id: 4,
    name: "Sports Shoes",
    description: "Lightweight and comfortable sports shoes, perfect for running or casual wear.",
    price: 5900.00,
    category: "fashion",
    image: "https://img.drz.lazcdn.com/static/lk/p/3710251390931cbaf210591f789f009b.jpg_720x720q80.jpg",
  },
  {
    id: 5,
    name: "Wireless Headphones",
    description: "Noise-cancelling wireless headphones with superior sound quality.",
    price: 1490.00,
    category: "electronics",
    image: "https://i5.walmartimages.com/seo/New-onn-True-Wireless-Headphones-with-Charging-Case-Black-AAABLK100024301_f4f8c291-b9f1-478e-8998-e2415f971577.b768f4539d839db85525d30f09de2aee.jpeg",
  },
  {
    id: 6,
    name: "Smartphone",
    description: "The latest smartphone with advanced features and a sleek design.",
    price: 69900.00,
    category: "electronics",
    image: "https://ikall.in/wp-content/uploads/2023/06/51sJmHfw92L._SL1000_-600x600.jpg",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({ category: "", price: "" });
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Filtering logic
  useEffect(() => {
    let filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (filters.category) {
      filtered = filtered.filter(
        (product) => product.category === filters.category
      );
    }

    if (filters.price === "low") {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (filters.price === "high") {
      filtered = filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
  }, [searchQuery, filters]);

  return (
    <div className="home container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="header flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Products</h1>

        <button
          onClick={() => navigate("/cart")}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200"
        >
          View Cart
        </button>
      </div>

      {/* Search and Filter Section */}
      <ProductFilter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setFilters={setFilters}
      />

      {/* Product Grid or No Match Message */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center mt-8">
          <p className="text-gray-500 text-lg font-medium">
            No products match your search or filters.
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
