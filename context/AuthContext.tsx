import Router from 'next/router';
import React, { createContext, useContext } from 'react';
import { ReactNode, useMemo, useState } from 'react';

//import Service
import { registerService, loginService, activateAccountService } from '../service/authService';

import { useRouter } from 'next/router';

interface User {
  email: string;
  password: string;
  phone: string;
}

type A = Omit<User, 'phone'>;

interface AuthContextType {
  user?: User;
  loading: boolean;
  error?: any;
  token?: string;
  login: (form: A) => void;
  signUp: (form: User) => void;
  activeAccount: (token: string) => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

function AuthProvider({ children }: { children: ReactNode }): JSX.Element {
  const [user, setUser] = useState<User>();
  const [token, setToken] = useState<string>('');
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingInitial, setLoadingInitial] = useState<boolean>(true);

  const router = useRouter();

  const login = async (form: A) => {
    const response = await loginService(form);
    if (response.status !== 500 || response.token == token) {
      setError('');
      router.push('/');
    } else {
      setError(response.data);
    }
  };

  const signUp = async (form: User) => {
    const statusCode = await registerService(form);
    if (statusCode !== 500) {
      router.push('/auth/login');
    }
  };

  const activeAccount = async (token: string) => {
    const statusCode = await activateAccountService(token);
    if (statusCode !== 500) {
      router.push('/auth/login');
    }
  };

  const memoedValue = useMemo(
    () => ({
      user,
      token,
      loading,
      error,
      login,
      signUp,
      activeAccount
    }),
    [user, loading, error]
  );

  return <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
