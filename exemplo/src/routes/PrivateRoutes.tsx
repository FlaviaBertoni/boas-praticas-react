import { Route, Switch } from 'react-router-dom';
import Header from '../components/organism/Header';
import PageNotFound from '../pages/404';
import Home from '../pages/Home';
import VehicleCatalog from '../pages/VehicleCatalog';

export const PrivateRoutes = () => (
  <>
    <Header />
    <Switch>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/vehicle-catalog">
        <VehicleCatalog />
      </Route>
      <Route path="*" component={PageNotFound} />
    </Switch>
  </>
);
