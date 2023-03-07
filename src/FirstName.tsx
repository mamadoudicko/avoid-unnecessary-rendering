import React from 'react';

type FirstNameProps = {
  value: string;
};

export const FirstName = ({ value }: FirstNameProps): JSX.Element => {
  return (
    <div style={{ backgroundColor: '#00FF0040', padding: 10 }}>
      <p>First Name: {value}</p>
      <p>Rendered at: {new Date().toLocaleTimeString()}</p>
    </div>
  );
};
