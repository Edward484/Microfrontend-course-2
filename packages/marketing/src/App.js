import {StylesProvider,createGenerateClassName} from "@material-ui/core";
import {BrowserRouter, Route, Router, Switch} from "react-router-dom";
import Pricing from "./components/Pricing";
import Landing from "./components/Landing";
import React from 'react'

const generateClassName = createGenerateClassName({
    productionPrefix:'ma',
})

const App = ({history}) => {

    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <Router history={history}>
                    <Switch>
                        <Route exact path={'/pricing'} component={Pricing}/>
                        <Route exact path={'/'} component={Landing}/>
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    )
}

export default App;