import React from "react";
import Book from "./Book";
import ProductII from "./ProductII";
import ProductIII from "./ProductIII";
import ProductIV from "./ProductIV";
import ProductV from "./ProductV";
function Product() {
  return (
    <div class="product">
      <div class="product_row d-flex">
        <Book />
        <ProductII />
        <ProductIII />
        <ProductIV />
        <ProductV />
      </div>
    </div>
  );
}

export default Product;
