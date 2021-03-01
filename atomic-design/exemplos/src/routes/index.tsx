import { Route, Switch } from 'react-router-dom';
import PageNotFound from '../pages/404';
import Home from '../pages/Home';
import VehicleCatalog from '../pages/VehicleCatalog';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/vehicle-catalog">
        <VehicleCatalog />
      </Route>
      <Route path="*">
        <PageNotFound />
      </Route>
    </Switch>
  );
};

export default Routes;
