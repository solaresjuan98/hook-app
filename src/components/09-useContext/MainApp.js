import React, {useState} from "react";
import { AppRouter } from "./AppRouter";
import { UserContext } from "./UserContext";

export const MainApp = () => {
  const [user, setUser] = useState({});
  /* const user = {
    id: 123,
    name: "Juan",
    email: "email@gmail.com",
  }; */
  return (
    <UserContext.Provider value={{
        user,
        setUser,
        temp: 1234
    }}>
      <AppRouter />
    </UserContext.Provider>
  );
};
