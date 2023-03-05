import React from 'react';
type LastNameProps = {
  lastName: string;
};

export const LastName = ({ lastName }: LastNameProps): JSX.Element => {
  return (
    <div style={{ backgroundColor: '#FFB30040', padding: 10 }}>
      <p>Last Name: {lastName}</p>
      <p>Rendered at: {new Date().toLocaleTimeString()}</p>
    </div>
  );
};
