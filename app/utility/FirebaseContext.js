import React from "react";

import { Firebase } from "./firebase";

export const FirebaseContext = React.createContext();

const FirebaseProvider = ({ children }) => (
  <FirebaseContext.Provider value={Firebase}>
    {children}
  </FirebaseContext.Provider>
);

export default FirebaseProvider;
