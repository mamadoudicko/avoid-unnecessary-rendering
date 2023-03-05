import React, { useState } from "react";

export const Age = () => {
  const [age, setAge] = useState<number>(18);

  console.log("Age re-rendered");

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(parseInt(event.target.value));
  };

  return (
    <div>
      <p>Age: {age}</p>
      <input type="number" value={age} onChange={handleAgeChange} />
      <p>{new Date().toLocaleTimeString()}</p>
    </div>
  );
};
