import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Product from './Product';
import { SortingFilter, sorted } from '../../filters/SortingFilter';

function ProductList(props) {
  const { products } = useSelector((state) => state.products);
  const [sortingField, setSortingField] = useState('id');
  const [sortingOrder, setSortingOrder] = useState('asc');

  const sortedProducts = sorted(products, sortingField, sortingOrder);

  return (
    <div className="product-list">
      <SortingFilter
        setSortingField={setSortingField}
        setSortingOrder={setSortingOrder}
      />
      {/* TODO excluding filter */}
      {
        sortedProducts.map(
          product => (
            <Product
              key={product.id}
              id={product.id}
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