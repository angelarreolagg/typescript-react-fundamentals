import { createContext, useEffect, useState } from "react";

// Shared interface for User data - typically exported to be reused across components
export interface User {
  name: string;
  age: number;
  isMarried: boolean;
}

// Interface for the Context value - defines what data and functions are available globally
interface UserContextType {
  users: User[] | null;
  addUser: (user: User) => void;
  updateUser: (id: string) => void;
  deleteUser: (id: string) => void;
}

// Initial values are required for createContext, but often dummy values until Provider runs
const contextInitialValues = {
  users: null,
  addUser: () => null,
  updateUser: () => null,
  deleteUser: () => null,
};

// Generics <UserContextType> tell TS what shape this context will ALWAYS provided
export const UserContext = createContext<UserContextType>(contextInitialValues);

// Props interface for the Provider component
interface Props {
  // React.ReactNode is the standard type for any valid JSX children (elements, strings, null, etc.)
  children: React.ReactNode;
}

export const UserProvider = (props: Props) => {
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    setUsers([{ name: "Pedro", age: 22, isMarried: false }]);
  }, []);

  const addUser = (_user: User) => {
    return null;
  };
  const updateUser = (_id: string) => {
    return null;
  };
  const deleteUser = (_id: string) => {
    return null;
  };

  return (
    <UserContext.Provider value={{ users, addUser, updateUser, deleteUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
