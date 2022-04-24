import React from 'react';

import './ExcludingFilter.css';

function excluded(products, toExclude) {
  return products.filter((product) => {
    const inTitle = product.title.includes(toExclude);
    const inDescription = product.description.includes(toExclude);
    return !inTitle && !inDescription;
  });
}

function ExcludingFilter(props) {
  const { setToExclude } = props;

  const handleExcludeFieldChange = (e) => {
    setToExclude(e.target.value);
  };

  const handleSubmit = (e) => e.preventDefault();

  return (
    <div className="excluding-filter">
      <form className="excluding-filter-form" onSubmit={handleSubmit}>
        <label>
          Exclude:
          <input type="text" onChange={handleExcludeFieldChange}/>
        </label>
      </form>
    </div>
  );
}

export {
  ExcludingFilter,
  excluded,
};
