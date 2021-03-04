import { useHistory } from 'react-router-dom';
import Box from '../../components/atoms/Box';
import Label from '../../components/atoms/Label';
import LabeledButton from '../../components/molecules/LabeledButton';
import { VideoContainer, ContentContainer } from './LandingPage.styles';

const LandingPage = () => {
  const history = useHistory();

  function goToLoginPage() {
    history.push('/sign-in');
  }

  return (
    <>
      <VideoContainer autoPlay muted loop>
        <source src="/videos/start.mp4" type="video/mp4" />
      </VideoContainer>
      <ContentContainer alignItems="center" justifyContent="space-between" direction="column" height="100vh">
        <Box width="100%" direction="row-reverse" margin="2rem 0 0 0">
          <LabeledButton size="small" variant="text">
            Registrar
          </LabeledButton>
          <LabeledButton size="small" variant="outlined" onClick={goToLoginPage}>
            Entrar
          </LabeledButton>
        </Box>
        <Box margin="0 0 2rem 0">
          <Label size="extra-large" color="white">
            Alugue o carro dos seus sonhos. Venha fazer parte dessa <strong>incrível</strong> experiência!
          </Label>
        </Box>
      </ContentContainer>
    </>
  );
};

export default LandingPage;
