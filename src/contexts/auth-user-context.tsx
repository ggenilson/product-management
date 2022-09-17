import React, { createContext, useEffect, useState } from "react";
import { UserProps } from "../shared/user-form";

interface Props {
  children: React.ReactNode;
}

export type UserContextProps = {
  token: string;
  user: Omit<UserProps, "password">;
};

interface ContextDefaultValuesType {
  userData: UserContextProps | undefined;
  setUserData: (value: UserContextProps) => void;
}

const contextDefaultValues: ContextDefaultValuesType = {
  userData: undefined,
  setUserData: () => {},
};

export const AuthUserContext =
  createContext<ContextDefaultValuesType>(contextDefaultValues);

const AuthUserProvider: React.FC<Props> = ({ children }) => {
  const [userData, setUserData] = useState<UserContextProps>();

  useEffect(() => {
    if (!userData) {
      const localUserInfo = localStorage.getItem(
        "product-management-user-data"
      );

      if (localUserInfo) {
        const parsedLocalUserInfo = JSON.parse(localUserInfo);

        setUser(parsedLocalUserInfo);
      }
    }
  }, []);

  const setUser = (user: UserContextProps) => setUserData(user);

  return (
    <AuthUserContext.Provider value={{ userData, setUserData: setUser }}>
      {children}
    </AuthUserContext.Provider>
  );
};

export default AuthUserProvider;
