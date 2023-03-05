import React from 'react';

type FirstNameProps = {
  firstName: string;
};

export const FirstName = ({ firstName }: FirstNameProps): JSX.Element => {
  return (
    <div style={{ backgroundColor: '#00FF0040', padding: 10 }}>
      <p>First Name: {firstName}</p>
      <p>Rendered at: {new Date().toLocaleTimeString()}</p>
    </div>
  );
};
