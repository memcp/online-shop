import React from 'react';
import { useSelector } from 'react-redux';

import PersonalInformationStage from './PersonalInformationStage';
import CreditCardStage from './CreditCardStage';
import AddressStage from './AddressStage';
import { createChangeOrderStageAction } from '../../../store/order/actions';

import './Order.css';

function Order(props) {

  const currentStage = useSelector((state) => state.order.orderStage);

  return (
    <div className="order">
      <div className="stages">
        {currentStage === 'personal-information-stage'
          ? <PersonalInformationStage/>
          : null}
        {currentStage === 'credit-card-stage' ? <CreditCardStage/> : null}
        {currentStage === 'address-stage' ? <AddressStage/> : null}
      </div>
    </div>
  );
}

export default Order;