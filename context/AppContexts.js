// src/contexts/AppContext.js
import React, { createContext, useEffect, useState } from "react";
import { getCategories } from "../utils/customFunctions/database";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true); // NEW

  const fetchCategories = async () => {
    try {
      setLoadingCategories(true); // Start loading
      //FIXME: in initial login, there is no token, so the categories are not fetched
      const response = await getCategories();
      if (response.status === 200) {
        setCategories(response.data.categories);
      } else {
        console.warn("Failed to fetch categories: ", response.data.message);
      }
    } catch (err) {
      console.error("Error fetching categories:", err);
    } finally {
      setLoadingCategories(false); // Done loading
    }
  };

  useEffect(() => {
    fetchCategories(); // Fetch on app start
  }, []);

  return (
    <AppContext.Provider
      value={{
        categories,
        setCategories,
        loadingCategories,
        setLoadingCategories,
        fetchCategories,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
