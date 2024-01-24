import axios from "axios";
import { useState, createContext, useEffect } from "react";

export const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users/1").then((resp) => {
      setData({
        email: resp.data.email,
        username: resp.data.username,
      });
    });
  }, []);
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
export default AuthContextProvider;
