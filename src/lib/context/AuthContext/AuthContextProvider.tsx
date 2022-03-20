import React, { useEffect, useState } from "react";
import axios from "axios";
import localforage from "localforage";
import { AuthContextType, AuthContext } from "./AuthContext";
import * as API from "../../../api/Api";

interface AuthContextProviderProps {
  children: React.ReactNode | null;
}

export const LOCAL_STORAGE_KEY = "CULTURE";

export const AuthContextProvider = (props: AuthContextProviderProps) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<API.User | undefined>(undefined);
  const [error, setError] = useState<any>();

  useEffect(() => {
    authenticate();
  }, []);

  const authenticate = async () => {
    const userStorageDetails = (await localforage.getItem(
      LOCAL_STORAGE_KEY
    )) as string;
    axios.defaults.headers.common.Authorization = `Bearer ${userStorageDetails}`;
    if (!userStorageDetails) {
      setLoading(false);
      setUser(undefined);
      return;
    }

    try {
      const res = await API.getUserDetails();
      setUser(res);
    } catch (err: any) {
      setError(err);
      localforage.removeItem(LOCAL_STORAGE_KEY);
    } finally {
      setLoading(false);
    }
  };

  const login = (user: API.User) => {
    setUser(user);
    axios.defaults.headers.common.Authorization = `Bearer ${user.token}`;
    localforage.setItem(LOCAL_STORAGE_KEY, user.token);
  };

  const logout = async () => {
    setUser(undefined);
    localforage.removeItem(LOCAL_STORAGE_KEY);
  };

  // if (loading) return <LoadingScreen />;

  const context: AuthContextType = {
    isAuthenticated: user !== undefined,
    isLoading: loading,
    error: error,
    user: user,
    login: login,
    logout: logout,
  };

  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  );
};
