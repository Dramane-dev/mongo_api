import React from 'react';
import DisplayUsers from '../Components/DisplayUsers';

const Users = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <DisplayUsers />
    </div>
  );
};

export default Users;