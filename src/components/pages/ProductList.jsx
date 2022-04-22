import React from 'react';
import Product from '../Product';

const products = [
  {
    id: 1,
    name: 'Shoe',
    description: 'Lorem Ipsum is simply dummy text of the printing and' +
      ' typesetting industry. Lorem Ipsum has been the industry\'s standard ',
    cost: 500,
  },
  {
    id: 2,
    name: 'Hat',
    description: 'old hat',
    cost: 300,
  },
  {
    id: 3,
    name: 'Umbrella',
    description: 'orange big umbrella',
    cost: 250,
  },
];

function ProductList(props) {
  return (
    <div className="product-list">
      {
        products.map(
          product => (
            <Product
              key={product.id}
              name={product.name}
              description={product.description}
              cost={product.cost}
            />
          )
        )
      }
    </div>
  );
}

export default ProductList;