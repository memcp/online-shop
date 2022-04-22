import React from 'react';

import './AddressStage.css';

function AddressStage(props) {
  return (
    <div className="address-stage">
      <form>
        <label htmlFor="town">Town</label>
        <input type="text" name="town"/>
        <label htmlFor="street">Street</label>
        <input type="text" name="street"/>
        <label htmlFor="street">Home</label>
        <input type="number" name="home"/>
        <label htmlFor="flat">Flat</label>
        <input type="number" name="flat"/>
        <input type="submit" value="Confirm Order"/>
      </form>
    </div>
  );
}

export default AddressStage;