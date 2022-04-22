import React from 'react';
import PersonalInformationStage from './PersonalInformationStage';
import CreditCardStage from './CreditCardStage';
import AddressStage from './AddressStage';

import './Order.css';

function Order(props) {

  const currentStage = 'credit-card-stage';

  return (
    <div className="order">
      <div className="stages">
        {currentStage === 'personal-info-stage' ? <PersonalInformationStage/> : null}
        {currentStage === 'credit-card-stage' ? <CreditCardStage/> : null}
        {currentStage === 'address-stage' ? <AddressStage/> : null}
      </div>
    </div>
  );
}

export default Order;