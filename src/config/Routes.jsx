import PropTypes from 'prop-types';
import { Switch, Route } from "react-router-dom";
import { Catalog, Detail, Home } from '../pages';

const Routes = () => {
    return (
        <Switch>
            <Route
                path='/:category/search/:keyword'
                component={Catalog}>
            </Route>
            <Route
                path='/:category/:id'
                component={Detail}>
            </Route>
            <Route
                path='/:category/:id'
                component={Catalog}>
            </Route>
            <Route
                path='/'
                exact
                component={Home}>
            </Route>
        </Switch>
    )
}

Routes.propTypes = {}
export default Routes;

