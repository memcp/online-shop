import React from 'react';
import Product from './Product';
import { useSelector } from 'react-redux';

function ProductList(props) {
  const { products } = useSelector((state) => state.products);

  return (
    <div className="product-list">
      {
        products.map(
          product => (
            <Product
              key={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          )
        )
      }
    </div>
  );
}

export default ProductList;