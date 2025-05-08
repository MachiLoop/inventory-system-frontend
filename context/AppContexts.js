// src/contexts/AppContext.js
import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  return (
    <AppContext.Provider value={{ categories, setCategories }}>
      {children}
    </AppContext.Provider>
  );
};
