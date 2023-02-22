import React, { createContext, useState } from "react";

const mainContext = createContext();

export function Context({ children }) {
  const [fav, setFav] = useState([]);
  const [login, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(false)

  return (
    <>
      <mainContext.Provider value={{ fav, setFav , login , setLogin, signUp, setSignUp}}>
        {children}
      </mainContext.Provider>
    </>
  );
}
export { mainContext };
