import { User } from "./types";
import { UserProfile } from "./UserProfile";

const USER: User = { firstName: "Mamadou", lastName: "DICKO", age: 15 };

function App() {
  return <UserProfile user={USER} />;
}

export default App;
