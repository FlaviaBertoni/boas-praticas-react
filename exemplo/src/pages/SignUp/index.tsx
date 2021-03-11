import { useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import { Background } from '../../components/atoms/Background';
import Box from '../../components/atoms/Box';
import Button from '../../components/atoms/Button';
import Input from '../../components/atoms/Input';
import Label from '../../components/atoms/Label';
import InputWithIcon from '../../components/molecules/Input-with-icon';
import useAuth from '../../hooks/useAuth';

interface StateProps {
  name: string;
  email: string;
  password: string;
}

type TypeActions = 'name' | 'email' | 'password';

interface RegisterUserActionsProps {
  type: TypeActions;
  payload: string;
}

function reducer(state: StateProps, action: RegisterUserActionsProps) {
  switch (action.type) {
    case 'name':
      return { ...state, name: action.payload };
    case 'email':
      return { ...state, email: action.payload };
    case 'password':
      return { ...state, password: action.payload };
    default:
      return state;
  }
}

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

const SignUp = () => {
  const { createUser } = useAuth();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  function handleClick() {
    setIsShowPassword(prev => !prev);
  }

  async function handleSignUp(event: React.MouseEvent<HTMLFormElement, MouseEvent>) {
    event.preventDefault();
    setError(null);
    setIsLoading(true);
    try {
      await createUser(state);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    const typeName = e.target.name as TypeActions;
    dispatch({ type: typeName, payload: e.target.value });
  }

  return (
    <Box alignItems="stretch" height="100vh">
      <Background url="images/background/herbie.jpg">
        <span>
          Photo by{' '}
          <a href="https://unsplash.com/@ssidde?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Stefan Sidén
          </a>{' '}
          on{' '}
          <a href="https://unsplash.com/s/photos/herbie?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Unsplash
          </a>
        </span>
      </Background>
      <Box
        maxWidth="500px"
        direction="column"
        bgColor="primary"
        justifyContent="center"
        alignItems="center"
        width="100%"
        padding="2rem"
      >
        <Label as="h2" size="medium" color="white">
          Cadastre-se e tenha acesso ao carro dos seus sonhos. <em>É rápido, fácil e seguro.</em>
        </Label>
        <Box as="form" direction="column" margin="1rem 0" padding="0 3rem" width="100%" onSubmit={handleSignUp}>
          <Label htmlFor="name" color="white">
            Nome
          </Label>
          <Input
            lineHeight="3rem"
            padding="0 1rem"
            borderRadius="4px"
            required
            type="text"
            name="name"
            id="name"
            margin="0.5rem 0 0 0"
            onChange={handleChangeInput}
            value={state.name}
          />
          <Label margin="1rem 0 0 0" htmlFor="email" color="white">
            E-mail
          </Label>
          <Input
            lineHeight="3rem"
            padding="0 1rem"
            borderRadius="4px"
            required
            type="email"
            name="email"
            id="email"
            margin="0.5rem 0 0 0"
            onChange={handleChangeInput}
            value={state.email}
          />
          <Label margin="1rem 0 0 0" htmlFor="password" color="white">
            Senha
          </Label>
          <InputWithIcon
            imgPath={isShowPassword ? 'icons/eye-off.svg' : 'icons/eye.svg'}
            handleClick={handleClick}
            lineHeight="3rem"
            padding="0 1rem"
            borderRadius="4px"
            required
            type={isShowPassword ? 'text' : 'password'}
            name="password"
            id="password"
            margin="0.5rem 0 0 0"
            onChange={handleChangeInput}
            value={state.password}
          />
          <Button type="submit" margin="2rem 0 0 0" variant="outlined" disabled={isLoading}>
            {isLoading ? (
              <Label role="progressbar" aria-busy aria-describedby="registrando usuário" size="medium">
                Iniciando seu sonho...
              </Label>
            ) : (
              <Label size="medium">Registrar</Label>
            )}
          </Button>
          {!!error && (
            <Box width="100%" justifyContent="center" margin="0.5rem 0 0 0">
              <Label role="alert" color="black" size="small">{`Ocorreu um erro! ${error}`}</Label>
            </Box>
          )}
        </Box>
        <Label color="white">
          <Link to="/sign-in">Já tem cadastro? Entre aqui.</Link>
        </Label>
      </Box>
    </Box>
  );
};
export default SignUp;
