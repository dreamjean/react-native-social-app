import { useContext } from "react";

import authContext from "./authContext";

const useAuth = () => {
  const { user, setUser } = useContext(authContext);

  const logIn = (user) => setUser(user);

  const logOut = () => setUser(null);

  return { user, setUser, logIn, logOut };
};

export default useAuth;
