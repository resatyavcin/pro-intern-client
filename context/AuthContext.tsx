import Router from 'next/router';
import React, { createContext, useContext } from 'react';
import { ReactNode, useMemo, useState, useEffect } from 'react';

//import Service
import { registerService, loginService, activateAccountService } from '../service/authService';

import { useRouter } from 'next/router';
import { Student } from '../common/models/User/Student';
import { User } from '../common/models/User/LoginUser';

interface AuthContextType {
  user: User;
  setLoginUser: (user: User) => void;
  error?: any;
  token?: string;
  login: (form: Pick<Student, 'email' | 'password'>) => void;
  signUp: (form: Student) => void;
  activeAccount: (token: string) => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

function AuthProvider({ children }: { children: ReactNode }): JSX.Element {
  const [user, setUser] = useState<User>({ _id: '', email: '', firstName: '', lastName: '', role: '' });

  const [error, setError] = useState<string>();

  const router = useRouter();

  const login = async (form: Pick<Student, 'email' | 'password'>) => {
    const response = await loginService(form);
    if (response.status !== 500) {
      setError('');
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(response.user));

      router.push('/dashboard');
    } else {
      setError(response.data);
    }
  };

  const setLoginUser = (user: User) => {
    setUser(user);
  };

  const signUp = async (form: Student) => {
    const response = await registerService(form);
    if (response.status !== 500) {
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
      setLoginUser,
      error,
      login,
      signUp,
      activeAccount
    }),
    [user, error]
  );

  return <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
