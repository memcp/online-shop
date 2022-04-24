import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Product from './Product';
import { SortingFilter, sorted } from '../../filters/SortingFilter';
import { ExcludingFilter, excluded } from '../../filters/ExcludingFilter';

import './ProductList.css';

function ProductList(props) {
  const { products } = useSelector((state) => state.products);
  const [sortingField, setSortingField] = useState('id');
  const [sortingOrder, setSortingOrder] = useState('asc');
  const [toExclude, setToExclude] = useState('');

  const sortedProducts = sorted(products, sortingField, sortingOrder);
  const excludedProducts = toExclude
    ? excluded(sortedProducts, toExclude)
    : sortedProducts;

  return (
    <div className="product-list">
      <div className="filters">
        <SortingFilter
          setSortingField={setSortingField}
          setSortingOrder={setSortingOrder}
        />
        <ExcludingFilter
          setToExclude={setToExclude}
        />
      </div>
      {
        excludedProducts.map(
          product => (
            <Product
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          ),
        )
      }
    </div>
  );
}

export default ProductList;