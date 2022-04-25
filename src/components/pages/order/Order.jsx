import React from 'react';
import { useSelector } from 'react-redux';

import PersonalInformationStage from './PersonalInformationStage';
import CreditCardStage from './CreditCardStage';
import AddressStage from './AddressStage';
import OrderCompletedStage from './OrderCompletedStage';
import {
  PERSONAL_INFORMATION_STAGE,
  CREDIT_CARD_STAGE,
  ADDRESS_STAGE, ORDER_COMPLETED_STAGE,
} from '../../../store/constants';

import './Order.css';

function Order(props) {

  const currentStage = useSelector((state) => state.order.orderStage);

  return (
    <div className="order">
      <div className="stages">
        {currentStage === PERSONAL_INFORMATION_STAGE
          ? <PersonalInformationStage/>
          : null}
        {currentStage === CREDIT_CARD_STAGE ? <CreditCardStage/> : null}
        {currentStage === ADDRESS_STAGE ? <AddressStage/> : null}
        {currentStage === ORDER_COMPLETED_STAGE ? <OrderCompletedStage/> : null}
      </div>
    </div>
  );
}

export default Order;