import React, { useState } from 'react';
import { MemoizedAge } from './Age';
import { MemoizedFirstName } from './FirstName';
import { MemoizedLastName } from './LastName';

export type User = {
  firstName: string;
  lastName: string;
  age: number;
};

// move to feat/memoization-example branch for memoized version
// move to main branch for useState version
export const UserProfile = (): JSX.Element => {
  // using useState will cause components re-render even if their props doesn't change
  // you can use memoization to prevent re-rendering when props doesn't change
  // CAUTION: memoization should be used for optimization purpose, not to only prevent re-rendering
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
        {
          // by using memoized version, component won't re-render when their props doesn't change (or state)
        }
        <MemoizedFirstName value={firstName} />
        <MemoizedLastName value={lastName} />
        <MemoizedAge value={age} />

        <button type="submit">validate</button>
      </form>
    </div>
  );
};
