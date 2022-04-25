import React, { useState } from 'react';

import {
  createChangeOrderStageAction,
} from '../../../store/order/actions';
import {
  createChangePersonalInformationAction,
} from '../../../store/profile/actions';
import useInput from '../../../hooks/useInput';
import useStage from '../../../hooks/useStage';
import { CREDIT_CARD_STAGE } from '../../../store/constants';

import './PersonalInformationStage.css';

function PersonalInformationStage(props) {
  const firstName = useInput('');
  const surname = useInput('');
  const phoneNumber = useInput('');

  const personalInfoStage = useStage(
    CREDIT_CARD_STAGE,
    [
      {
        action: createChangePersonalInformationAction,
        data: [
          firstName.value, surname.value, phoneNumber.value,
        ],
      },
    ],
  );

  return (
    <div className="personal-information-stage">
      <h3>Personal Information</h3>
      <form onSubmit={personalInfoStage.handleSubmit}>
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          name="firstname"
          value={firstName.value}
          onChange={firstName.onChange}
        />
        <label htmlFor="surname">Surname</label>
        <input
          type="text"
          name="surname"
          value={surname.value}
          onChange={surname.onChange}
        />
        <label htmlFor="surname">Phone Number</label>
        <input
          type="text"
          name="phone number"
          value={phoneNumber.value}
          onChange={phoneNumber.onChange}
        />
        <input type="submit" value="accept"/>
      </form>
    </div>
  );
}

export default PersonalInformationStage;