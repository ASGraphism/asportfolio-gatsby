import React, { createContext, useState } from "react";

export const MenuContext = createContext(false);

export default ({ children }) => {

  const [menuState, setMenuState] = useState(false);



  return (
    <MenuContext.Provider value={{ menuState, setMenuState }}>
      {children}
    </MenuContext.Provider>
  );
}