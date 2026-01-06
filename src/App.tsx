import "./App.css";
import { Person } from "./Person";

// let name: string = "Angel";
// let age: number = 23;
// let isMarried: boolean = false;

// let ages: number[] = [1, 5, 9, 8];
// let person: any = ""; // Any defies the whole porpuse of using TypeScript, so avoid it.

function App() {
  return (
    <>
      <Person name="Angel" age={23} isMarried={false} />
      <Person name="Pedro" age={28} isMarried={true} />
    </>
  );
}

export default App;
