import React, { useState } from 'react';
import { FirstName } from './FirstName';
import { LastName } from './LastName';
import { Age } from './Age';

export type User = {
  firstName: string;
  lastName: string;
  age: number;
};

// move to feat/memoization-example branch for memoized version
// move to feat/use-ref-example branch for useRef version
export const UserProfile = (): JSX.Element => {
  // using useState will cause component re-render even if their props doesn't change
  const [user, setUser] = useState<User>({
    firstName: 'Mamadou',
    lastName: 'DICKO',
    age: 15,
  });

  const handleValueChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setUser(userData => ({
      ...userData,
      [event.target.name]: event.target.value,
    }));
  };

  const addUser = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    console.log({ user });
  };

  const { firstName, lastName, age } = user;

  return (
    <div style={{ backgroundColor: '#00000040', padding: 10 }}>
      <form onSubmit={addUser}>
        <p style={{ textAlign: 'center' }}>User card</p>
        <p>Rendered at: {new Date().toLocaleTimeString()}</p>

        <div>
          <label htmlFor="firstName">First Name input </label>
          <input
            name="firstName"
            defaultValue={firstName}
            onChange={handleValueChange}
            id="firstName"
          />
        </div>
        <div>
          <label htmlFor="firstName">Last Name input </label>
          <input
            name="lastName"
            defaultValue={lastName}
            onChange={handleValueChange}
            id="lastName"
          />
        </div>

        <FirstName value={firstName} />
        <LastName value={lastName} />
        <Age value={age} />

        <button type="submit">validate</button>
      </form>
    </div>
  );
};
