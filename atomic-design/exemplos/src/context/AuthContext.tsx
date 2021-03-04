import { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../services/api';

interface UserData {
  id: number;
  name: string;
  email: string;
  password: string;
  avatar?: string;
}

interface GithubUserData {
  avatar_url: string;
  name: string;
  email: string;
}

interface AuthContextProps {
  user: UserData | null;
  signIn(email: string, password: string): Promise<Error | void>;
  redirectToGithub(): void;
  githubSignIn(accessToken: string): Promise<void>;
}

export const AuthContext = createContext({} as AuthContextProps);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserData | null>(() => {
    const user = window.sessionStorage.getItem('@RentACar:user');
    if (!user) {
      return null;
    }

    return JSON.parse(user);
  });

  const history = useHistory();

  async function githubSignIn(accessToken: string): Promise<void> {
    const { data } = await api.get<GithubUserData>('https://api.github.com/user', {
      headers: {
        Authorization: `token ${accessToken}`,
      },
    });

    const githubUser = {
      id: Date.now(),
      name: data.name,
      email: data.email,
      password: '',
      avatar: data.avatar_url,
    };

    setUser(githubUser);
    window.sessionStorage.setItem('@RentACar:user', JSON.stringify(githubUser));
    history.push('/home');
  }

  async function redirectToGithub() {
    const client_id = process.env.REACT_APP_GITHUB_CLIENT_ID;
    const state = String(Math.round(Math.random() * Date.now()));
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${client_id}&state=${state}&scope=user`;
  }

  async function signIn(email: string, password: string): Promise<Error | void> {
    const { data } = await api.get<UserData[]>(`users?email=${email}`);

    if (!data.length) {
      throw Error('Usuário e/ou senha não conferem');
    }

    if (data[0].password === password) {
      setUser(data[0]);
      window.sessionStorage.setItem('@RentACar:user', JSON.stringify(data[0]));

      history.push('/home');
    } else {
      throw Error('Usuário e/ou senha não conferem');
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        redirectToGithub,
        githubSignIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
