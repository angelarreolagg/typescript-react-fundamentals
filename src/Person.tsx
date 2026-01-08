import { useState } from "react";

// Interface defines the exact shape of props - TypeScript will error if wrong types are passed
interface PersonProps {
  name: string;
  age: number;
  isMarried: boolean;
}

// Typing props ensures the component receives exactly what it expects
export const Person = (props: PersonProps) => {
  // Explicit generic <boolean> makes the state type clear, even though TS could infer it
  const [isShowInfo, setIsShowInfo] = useState<boolean>(true);
  const toggleInfo = () => setIsShowInfo((prev) => !prev);

  // Union type (string | null) - handles cases where data might not exist yet
  const [biography, setBiography] = useState<string | null>(null);

  // React.ChangeEvent<HTMLInputElement> gives type-safe access to e.target.value
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBiography(e.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Make something with the event of the form.
    event.preventDefault();
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
