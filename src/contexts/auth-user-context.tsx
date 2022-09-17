import React, { createContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export type UserProps = {
  token: string;
  user: Omit<UserProps, "password">;
};

interface ContextDefaultValuesType {
  userData: UserProps | undefined;
  setUserData: (value: UserProps) => void;
}

const contextDefaultValues: ContextDefaultValuesType = {
  userData: undefined,
  setUserData: () => {},
};

export const AuthUserContext =
  createContext<ContextDefaultValuesType>(contextDefaultValues);

const AuthUserProvider: React.FC<Props> = ({ children }) => {
  const [userData, setUserData] = useState<UserProps>();

  const setUser = (user: UserProps) => setUserData(user);

  return (
    <AuthUserContext.Provider value={{ userData, setUserData: setUser }}>
      {children}
    </AuthUserContext.Provider>
  );
};

export default AuthUserProvider;
