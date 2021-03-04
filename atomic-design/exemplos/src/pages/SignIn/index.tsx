import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Box from '../../components/atoms/Box';
import Label from '../../components/atoms/Label';
import LabeledButton from '../../components/molecules/LabeledButton';
import useAuth from '../../hooks/useAuth';
import { Background, Container, Content, GithubButton } from './SignIn.styles';

const SignIn = () => {
  const query = useQuery();
  const { signIn, redirectToGithub, githubSignIn } = useAuth();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const accessToken = query.get('access_token');

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  async function handleLogin(event: React.MouseEvent<HTMLFormElement, MouseEvent>) {
    event.preventDefault();
    try {
      await signIn(email, password);
    } catch (error) {
      console.log(error.message);
    }
  }

  if (accessToken) {
    githubSignIn(accessToken);
  }

  return (
    <Container>
      <Background />
      <Content direction="column" bgColor="primary" justifyContent="center" alignItems="center" width="100%">
        <Label as="h2" size="medium" color="white">
          Informe seus dados de login
        </Label>
        <Box as="form" direction="column" margin="1rem 0" onSubmit={handleLogin}>
          <Label htmlFor="email" color="white">
            e-mail
          </Label>
          <input required type="email" name="email" id="email" onChange={handleEmailChange} />
          <Label htmlFor="password" color="white">
            password
          </Label>
          <input required type="password" name="password" id="password" onChange={handlePasswordChange} />
          <LabeledButton size="small" variant="outlined">
            Entrar
          </LabeledButton>
        </Box>
        <Label as="h2" size="medium" color="white">
          Ou
        </Label>
        <GithubButton onClick={redirectToGithub}>Sign in with Github</GithubButton>
      </Content>
    </Container>
  );
};

export default SignIn;
