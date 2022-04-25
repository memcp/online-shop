import React from 'react';
import { useSelector } from 'react-redux';

import './Profile.css';

function Profile(props) {
  const profile = useSelector((state) => state.profile);
  const order = useSelector((state) => state.order);

  return (
    <div className="profile">
      <h3>Your Profile</h3>
      <p>First Name: {profile.personalInformation.firstName}</p>
      <p>Surname: {profile.personalInformation.surname}</p>
      <p>Phone Number: {profile.personalInformation.phoneNumber}</p>
      <p>Address:
        {order.address.town},
        {order.address.street},
        {order.address.home},
        {order.address.flat}
      </p>
    </div>
  );
}

export default Profile;