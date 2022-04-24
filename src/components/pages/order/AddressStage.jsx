import React from 'react';
import { useDispatch } from 'react-redux';

import useInput from '../../../hooks/useInput';
import { createChangeAddressAction } from '../../../store/order/actions';

import './AddressStage.css';

function AddressStage(props) {
  const town = useInput('');
  const street = useInput('');
  const home = useInput('');
  const flat = useInput('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const changeAddressAction = createChangeAddressAction(
      town.value,
      street.value,
      home.value,
      flat.value,
    );

    dispatch(changeAddressAction);
  };


  return (
    <div className="address-stage">
      <h3>Address</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="town">Town</label>
        <input type="text" value={town.value} onChange={town.onChange} name="town"/>
        <label htmlFor="street">Street</label>
        <input type="text" value={street.value} onChange={street.onChange} name="street"/>
        <label htmlFor="street">Home</label>
        <input type="text" value={home.value} onChange={home.onChange} name="home"/>
        <label htmlFor="flat">Flat</label>
        <input type="text" value={flat.value} onChange={flat.onChange} name="flat"/>
        <input type="submit" value="Confirm Order"/>
      </form>
    </div>
  );
}

export default AddressStage;