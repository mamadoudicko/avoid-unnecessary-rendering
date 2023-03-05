import React from "react";

type FirstNameProps = {
  firstName: string;
  onFirstNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const FirstName = ({ firstName, onFirstNameChange }: FirstNameProps) => {
  console.log("FirstName re-rendered");

  return (
    <div>
      <p>First Name:{firstName}</p>
      <input value={firstName} onChange={onFirstNameChange} />
      <p>{new Date().toLocaleTimeString()}</p>
    </div>
  );
};
