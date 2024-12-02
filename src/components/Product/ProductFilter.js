import React from "react";

const ProductFilter = ({ searchQuery, setSearchQuery, setFilters }) => {
  return (
    <div className="product-filter flex flex-col md:flex-row justify-between gap-4 mb-8">
      {/* Search Bar */}
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search products..."
        className="px-4 py-2 border rounded w-full md:w-1/3"
      />

      {/* Category Filter */}
      <select
        onChange={(e) => setFilters((prev) => ({ ...prev, category: e.target.value }))}
        className="px-4 py-2 border rounded w-full md:w-1/4"
      >
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="books">Books</option>
        <option value="fashion">Fashion</option>
      </select>

      {/* Price Filter */}
      <select
        onChange={(e) => setFilters((prev) => ({ ...prev, price: e.target.value }))}
        className="px-4 py-2 border rounded w-full md:w-1/4"
      >
        <option value="">Sort by Price</option>
        <option value="low">Low to High</option>
        <option value="high">High to Low</option>
      </select>
    </div>
  );
};

export default ProductFilter;
