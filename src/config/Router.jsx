import { Switch, Route } from "react-router-dom";
import { Catalog, Detail, Home } from "../pages";

export const Router = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/:category/search/:keyword" component={Catalog}></Route>
            <Route path="/:category/:id" component={Detail}></Route>
            <Route path="/:category" component={Catalog}></Route>
        </Switch>
    );
};

