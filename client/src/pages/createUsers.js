import React from 'react';
import CreateUsers from '../Components/CreateUsers';

const createUsers = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <CreateUsers />
    </div>
  );
};

export default createUsers;