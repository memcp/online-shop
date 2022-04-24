import React from 'react';

import './SortingFilter.css';

function sorted(products, by = 'id', order = 'asc') {

  if (order === 'asc') {
    return products.sort((a, b) => a[by] - b[by]);
  }

  if (order === 'desc')
    return products.sort((a, b) => b[by] - a[by]);

  return products;
}

function SortingFilter(props) {
  const {  setSortingField, setSortingOrder } = props;

  const handleSortingOrderChange = (e) => {
    setSortingOrder(e.target.value);
  }

  const handleSortingFieldChange = (e) => {
    setSortingField(e.target.value);
  }

  return (
    <div className="sorting-filter">
      <form className="sorting-filter-form">
        <label>
          Sort
          <select onChange={handleSortingOrderChange}>
            <option value="asc">asc</option>
            <option value="desc">desc</option>
          </select>
        </label>
        <label>
          By
          <select onChange={handleSortingFieldChange}>
            <option value="id">id</option>
            <option value="price">price</option>
          </select>
        </label>
      </form>
    </div>
  );
}

export {
  SortingFilter,
  sorted,
};