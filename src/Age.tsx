import React, { useState } from 'react';

export const Age = (): JSX.Element => {
  const [age, setAge] = useState<number>(18);

  const handleAgeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setAge(parseInt(event.target.value));
  };

  return (
    <div style={{ backgroundColor: '#FF000040', padding: 10 }}>
      <p>Age: {age}</p>
      <input type="number" defaultValue={age} onChange={handleAgeChange} />
      <p>Rendered at: {new Date().toLocaleTimeString()}</p>
    </div>
  );
};
