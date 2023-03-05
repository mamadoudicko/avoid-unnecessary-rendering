import React from 'react';
type LastNameProps = {
  lastName: string;
};

export const LastName = ({ lastName }: LastNameProps): JSX.Element => {
  console.log('LastName re-rendered');

  return (
    <div>
      <p>Last Name: {lastName}</p>
      <p>{new Date().toLocaleTimeString()}</p>
    </div>
  );
};
