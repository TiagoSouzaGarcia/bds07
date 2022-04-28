import Navbar from "components/Navbar";
import Catalog from "pages/Catalog";
import Home from "pages/Home";
import { Route, Switch, BrowserRouter } from "react-router-dom";



const Routes = () => (
        <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/products">
                <Catalog />
            </Route>
        </Switch>
        </BrowserRouter> 
    );


export default Routes;