import "./App.css";
import { User, Countries } from "./User";
import { UserProvider } from "./UserContextProvider";

// Basic type examples - TypeScript ensures variables hold the correct type
// let name: string = "Angel";
// let age: number = 23;
// let isMarried: boolean = false;

// let ages: number[] = [1, 5, 9, 8];
// let person: any = ""; // Avoid 'any' - it disables type checking completely

function App() {
  return (
    <UserProvider>
      {/* TypeScript validates props at compile time - wrong types = instant error */}
      <User
        name="Angel"
        age={23}
        isMarried={false}
        // Using the literal value from our Countries object ensures type safety
        country={Countries.Brazil}
      />
      <User name="Pedro" age={28} isMarried={true} country={Countries.France} />
    </UserProvider>
  );
}

export default App;
