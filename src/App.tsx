import React from 'react';
import { type User } from './types';
import { UserProfile } from './UserProfile';

const USER: User = { firstName: 'Mamadou', lastName: 'DICKO', age: 15 };

function App(): JSX.Element {
  return <UserProfile user={USER} />;
}

export default App;
