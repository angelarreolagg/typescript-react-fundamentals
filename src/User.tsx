import { useContext, useState } from "react";
import { UserContext } from "./UserContextProvider";

interface Props {
  name: string;
  age: number;
  isMarried: boolean;
}

export const User = (props: Props) => {
  // useContext infers the return type from the UserContext definition - no extra typing needed here!
  const { users, addUser, updateUser, deleteUser } = useContext(UserContext);

  const [biography, setBiography] = useState<string | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBiography(e.target.value);
  };

  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>This person {props.isMarried ? "is married" : "is single"}</p>
      <p>Bio: {biography === null ? "No Bio Available" : biography}</p>
      <input
        onChange={handleChange}
        id="bio"
        type="text"
        placeholder="type the bio of the person..."
      />
    </div>
  );
};
