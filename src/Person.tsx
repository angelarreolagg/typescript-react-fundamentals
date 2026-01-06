import { useState } from "react";

interface PersonProps {
  name: string;
  age: number;
  isMarried: boolean;
}

export const Person = (props: PersonProps) => {
  const [isShowInfo, setIsShowInfo] = useState<boolean>(true); // Optional but is good practice to make clear the type of your states
  const toggleInfo = () => setIsShowInfo((prev) => !prev);

  const [biography, setBiography] = useState<string | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBiography(e.target.value);
  };

  return (
    <div>
      <button onClick={toggleInfo}>Toggle Info</button>
      {isShowInfo && (
        <>
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
        </>
      )}
    </div>
  );
};
