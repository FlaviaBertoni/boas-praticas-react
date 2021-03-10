import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function useAuth() {
  const { user, signIn, createUser, redirectToGithub, githubSignIn } = useContext(AuthContext);

  return { user, signIn, createUser, redirectToGithub, githubSignIn };
}
