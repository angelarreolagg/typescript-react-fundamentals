import "./App.css";
import { Person } from "./Person";

// Basic type examples - TypeScript ensures variables hold the correct type
// let name: string = "Angel";
// let age: number = 23;
// let isMarried: boolean = false;

// let ages: number[] = [1, 5, 9, 8];
// let person: any = ""; // Avoid 'any' - it disables type checking completely

function App() {
  return (
    <>
      {/* TypeScript validates props at compile time - wrong types = instant error */}
      <Person name="Angel" age={23} isMarried={false} />
      <Person name="Pedro" age={28} isMarried={true} />
    </>
  );
}

export default App;
