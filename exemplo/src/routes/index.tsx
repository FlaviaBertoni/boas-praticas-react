import { Switch } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import SignIn from '../pages/SignIn';
import Route from './Route';
import { PrivateRoutes } from './PrivateRoutes';
import SignUp from '../pages/SignUp';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/sign-in" component={SignIn} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/" component={PrivateRoutes} isPrivate />
    </Switch>
  );
};

export default Routes;
