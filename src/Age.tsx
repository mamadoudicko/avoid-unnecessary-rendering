import React, { memo, useState } from 'react';

const Age = ({ value }: { value: number }): JSX.Element => {
  // using local state for explications purposes
  const [age, setAge] = useState<number>(value);

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

export const MemoizedAge = memo(Age);
