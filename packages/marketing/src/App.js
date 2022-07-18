import {StylesProvider} from "@material-ui/core";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Pricing from "./components/Pricing";
import Landing from "./components/Landing";
import React from 'react'

const App = () => {

    return (
        <div>
            <StylesProvider>
                <BrowserRouter>
                    <Switch>
                        <Route exact path={'/pricing'} component={Pricing}/>
                        <Route exact path={'/'} component={Landing}/>
                    </Switch>
                </BrowserRouter>
            </StylesProvider>
        </div>
    )
}

export default App;