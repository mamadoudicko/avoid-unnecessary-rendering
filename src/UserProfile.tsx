import React, { useState } from 'react';
import { FirstName } from './FirstName';
import { LastName } from './LastName';
import { Age } from './Age';
import { type User } from './types';

type UserProfileProps = {
  user: User;
};

export const UserProfile = ({ user }: UserProfileProps): JSX.Element => {
  const [firstName, setFirstName] = useState<string>(user.firstName);

  const handleFirstNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setFirstName(event.target.value);
  };

  return (
    <div>
      <p>{new Date().toLocaleTimeString()}</p>
      <FirstName
        firstName={firstName}
        onFirstNameChange={handleFirstNameChange}
      />
      <LastName lastName={user.lastName} />
      <Age />
    </div>
  );
};
