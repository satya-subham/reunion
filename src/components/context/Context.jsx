import React, { createContext, useState } from "react";

const mainContext = createContext();

export function Context({ children }) {
  const [fav, setFav] = useState([]);

  return (
    <>
      <mainContext.Provider value={{ fav, setFav }}>
        {children}
      </mainContext.Provider>
    </>
  );
}
export { mainContext };
