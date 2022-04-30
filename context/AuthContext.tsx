import Router from 'next/router';
import React, { createContext, useContext } from 'react';
import { ReactNode, useMemo, useState, useEffect } from 'react';

//import Service
import { registerService, loginService, activateAccountService, fetchProfileService } from '../service/authService';

import { useRouter } from 'next/router';
import { Student } from '../common/models/User/Student';
import { User } from '../common/models/User/LoginUser';

interface AuthContextType {
  user: User;
  loadingAuth: boolean;
  setLoginUser: (user: User) => void;
  error?: any;
  token?: string;
  login: (form: Pick<Student, 'email' | 'password'>) => void;
  getProfile: () => void;
  signUp: (form: Student) => void;
  activeAccount: (token: string) => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

function AuthProvider({ children }: { children: ReactNode }): JSX.Element {
  const [user, setUser] = useState<User>({ _id: '', email: '', firstName: '', lastName: '', role: '' });
  const [loadingAuth, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const router = useRouter();

  const login = async (form: Pick<Student, 'email' | 'password'>) => {
    setLoading(true);
    const response = await loginService(form);
    if (response) {
      setLoading(false);
      if (response.status !== 500) {
        setError('');
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
        if (response.user.role === 'STUDENT') {
          router.push('/');
        } else if (response.user.role === 'ADMIN') {
          router.push('/dashboard');
        }
      } else {
        setError(response.data);
      }
    }
  };

  const setLoginUser = (user: User) => {
    setUser(user);
  };

  const getProfile = async () => {
    setLoading(true);

    const response = await fetchProfileService();
    if (response) {
      setLoading(false);
    }
    return response;
  };

  const signUp = async (form: Student) => {
    setLoading(true);

    const response = await registerService(form);
    if (response) {
      setLoading(false);
      setError('');
      if (response.status !== 500) {
        router.push('/auth/login');
      } else {
        setError(response.data);
      }
    }
  };

  const activeAccount = async (token: string) => {
    setLoading(true);

    const statusCode = await activateAccountService(token);
    if (statusCode) {
      setLoading(false);
    }
    if (statusCode !== 500) {
      router.push('/auth/login');
    }
  };

  const memoedValue = useMemo(
    () => ({
      loadingAuth,
      user,
      getProfile,
      setLoginUser,
      error,
      login,
      signUp,
      activeAccount
    }),
    [user, error, loadingAuth]
  );

  return <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
