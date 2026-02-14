import React from "react";

function ProductCard({ name, price, inStock }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p className="price">₹{price}</p>
      <p className={inStock ? "in-stock" : "out-stock"}>
        {inStock ? "In Stock" : "Out of Stock"}
      </p>
    </div>
  );
}

export default ProductCard;
