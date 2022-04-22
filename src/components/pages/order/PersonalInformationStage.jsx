import React from 'react';

import './PersonalInformationStage.css';

function PersonalInformationStage(props) {

  return (
    <div className="personal-information-stage">
      <h3>Personal Information</h3>
      <form action="">
        <label htmlFor="firstname">First Name</label>
        <input type="text" name="firstname"/>
        <label htmlFor="surname">Surname</label>
        <input type="text" name="surname"/>
        <label htmlFor="surname">Phone Number</label>
        <input type="text" name="phone number"/>
        <input type="submit" value="accept"/>
      </form>
    </div>
  );
}

export default PersonalInformationStage;