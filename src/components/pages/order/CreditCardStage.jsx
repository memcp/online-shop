import React from 'react';
import { useDispatch } from 'react-redux';

import useInput from '../../../hooks/useInput';
import useStage from '../../../hooks/useStage';
import {
  createChangeCreditCardAction,
  createChangeOrderStageAction,
} from '../../../store/order/actions';
import { ADDRESS_STAGE } from '../../../store/constants';

import './CreditCardStage.css';

function CreditCardStage(props) {
  const cardNumber = useInput('');
  const cardHolder = useInput('');
  const expirationDate = useInput('');
  const cvv = useInput('');

  const creditCardStage = useStage(
    ADDRESS_STAGE,
    [
      {
        action: createChangeCreditCardAction,
        data: [
          cardNumber.value,
          cardHolder.value,
          expirationDate.value,
          cvv.value,
        ],
      },
    ],
  );

  return (
    <div className="credit-card-stage">
      <h3>Credit Card</h3>
      <form onSubmit={creditCardStage.handleSubmit}>
        <label htmlFor="card-number">Card Number</label>
        <input
          type="text"
          name="card-number"
          value={cardNumber.value}
          onChange={cardNumber.onChange}
        />
        <div className="card-bottom">
          <label htmlFor="card-holder">Card Holder</label>
          <input
            type="text"
            name="card-holder"
            value={cardHolder.value}
            onChange={cardHolder.onChange}
          />
          <label htmlFor="expiration-date">Expiration Date</label>
          <input
            type="date"
            name="expiration-date"
            value={expirationDate.value}
            onChange={expirationDate.onChange}
          />
          <label htmlFor="cvv">CVV</label>
          <input
            type="number"
            name="cvv"
            value={cvv.value}
            onChange={cvv.onChange}
          />
        </div>
        <input type="submit" value="Correct"/>
      </form>
    </div>
  );
}

export default CreditCardStage;