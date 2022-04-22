import React from 'react';

import './CreditCardStage.css'

function CreditCardStage(props) {
  return (
    <div className="credit-card-stage">
      <h3>Credit Card</h3>
      <form>
        <label htmlFor="card-number">Card Number</label>
        <input type="text" name="card-number"/>
        <div className="card-bottom">
          <label htmlFor="card-holder">Card Holder</label>
          <input type="text" name="card-holder"/>
          <label htmlFor="expiration-date">Expiration Date</label>
          <input type="date" name="expiration-date"/>
          <label htmlFor="cvv">CVV</label>
          <input type="number" name="cvv"/>
        </div>
        <input type="submit" value="Correct"/>
      </form>
    </div>
  );
}

export default CreditCardStage;