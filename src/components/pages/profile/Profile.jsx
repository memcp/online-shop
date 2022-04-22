import React from 'react';

import './Profile.css';

function Profile(props) {
  return (
    <div className="profile">
      <h3>Your Profile</h3>
      <p>First Name: Ilyas</p>
      <p>Surname: Garipov</p>
      <p>Phone Number: 9 (999) 888-88-88</p>
      <p>Address: Town, Street, Home, Flat</p>
    </div>
  );
}

export default Profile;