import React, { memo } from 'react';
type LastNameProps = {
  value: string;
};

const LastName = ({ value }: LastNameProps): JSX.Element => {
  return (
    <div style={{ backgroundColor: '#FFB30040', padding: 10 }}>
      <p>Last Name: {value}</p>
      <p>Rendered at: {new Date().toLocaleTimeString()}</p>
    </div>
  );
};

export const MemoizedLastName = memo(LastName);
