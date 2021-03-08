import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Background } from '../../components/atoms/Background';
import Box from '../../components/atoms/Box';
import Button from '../../components/atoms/Button';
import Input from '../../components/atoms/Input';
import Label from '../../components/atoms/Label';
import useAuth from '../../hooks/useAuth';
import { Container, Content, GithubButton } from './SignIn.styles';

const SignIn = () => {
  const query = useQuery();
  const { signIn, redirectToGithub, githubSignIn } = useAuth();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
    try {
      await signIn(email, password);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  if (accessToken) {
    githubSignIn(accessToken);
  }

  return (
    <Container>
      <Background url="images/background/delorean.jpg" />
      <Content direction="column" bgColor="primary" justifyContent="center" alignItems="center" width="100%">
        <Label as="h2" size="medium" color="white">
          Informe seus dados de login
        </Label>
        <Box as="form" direction="column" margin="1rem 0" onSubmit={handleLogin} padding="0 3rem" width="100%">
          <Label htmlFor="email" color="white">
            e-mail
          </Label>
          <Input
            lineHeight="3rem"
            padding="0 1rem"
            borderRadius="4px"
            required
            type="email"
            name="email"
            id="email"
            onChange={handleEmailChange}
            margin="0.5rem 0 0 0"
          />
          <Label margin="1rem 0 0 0" htmlFor="password" color="white">
            password
          </Label>
          <Input
            lineHeight="3rem"
            padding="0 1rem"
            borderRadius="4px"
            required
            type="password"
            name="password"
            id="password"
            onChange={handlePasswordChange}
            margin="0.5rem 0 0 0"
          />
          <Button type="submit" margin="2rem 0 0 0" variant="outlined" disabled={isLoading}>
            <Label size="medium">{isLoading ? 'Vrummm!' : 'Entrar'}</Label>
          </Button>
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
