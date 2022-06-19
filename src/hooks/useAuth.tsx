import localforage from "localforage";
import React from "react";

const useAuth = () => {
  const [user, setUser] = React.useState<any>();
  React.useEffect(() => {
    localforage.getItem("user", (err, val) => setUser(val));
    console.log(user);
  }, [user, setUser]);

  return user;
};

export default useAuth;
