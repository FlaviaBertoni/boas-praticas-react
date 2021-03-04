import { Switch } from 'react-router-dom';
import PageNotFound from '../pages/404';
import Home from '../pages/Home';
import VehicleCatalog from '../pages/VehicleCatalog';
import LandingPage from '../pages/LandingPage';
import SignIn from '../pages/SignIn';
import Route from './Route';
import { PrivateRoutes } from './PrivateRoutes';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/sign-in" component={SignIn} />
      <Route path="/" component={PrivateRoutes} isPrivate />
    </Switch>
  );
};

export default Routes;
