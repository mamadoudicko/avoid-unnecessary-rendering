import React, { useRef } from 'react';
import { FirstName } from './FirstName';
import { LastName } from './LastName';
import { Age } from './Age';

export type User = {
  firstName: string;
  lastName: string;
  age: number;
};

export const UserProfile = (): JSX.Element => {
  const user = useRef<User>({
    firstName: 'Mamadou',
    lastName: 'DICKO',
    age: 15,
  });

  const getUser = (): User => user.current;

  const setUser = (userNewValues: User): void => {
    user.current = userNewValues;
  };

  const handleValueChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setUser({
      ...getUser(),
      [event.target.name]: event.target.value,
    });
  };

  const addUser = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    console.log({ user: getUser() });
  };

  const { firstName, lastName, age } = getUser();

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
