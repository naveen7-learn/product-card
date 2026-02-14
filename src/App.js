import React from "react";
import ProductCard from "./ProductCard";

function App() {

  const products = [
    { name: "Wireless Mouse", price: 799, inStock: true },
    { name: "Mechanical Keyboard", price: 2499, inStock: false },
    { name: "Bluetooth Speaker", price: 1499, inStock: true },
    { name: "Smart Watch", price: 3999, inStock: true },
    { name: "USB-C Charger", price: 599, inStock: false },
    { name: "Laptop Stand", price: 999, inStock: true }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Card Component</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            inStock={product.inStock}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
