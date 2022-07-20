import React, {lazy, Suspense, useState,useEffect} from 'react'
import Header from "./components/Header";
import {Router, Route, Switch, Redirect} from "react-router-dom";
import {createGenerateClassName, StylesProvider} from "@material-ui/core";
import {createBrowserHistory} from 'history'

const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
})

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));
const DashboardLazy = lazy( () => import('./components/DasboardApp'))

const history = createBrowserHistory();

const App = () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {
       if(isSignedIn){
           history.push('/dashboard')
       } 
    },[isSignedIn])

    return (
        <Router history={history}>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)}/>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route path={"/auth"}>
                                <AuthLazy onSignIn={() => setIsSignedIn(true)}/>
                            </Route>
                            <Route path={'/dashboard'}>
                                {!isSignedIn && <Redirect to={"/"}/>}
                                <DashboardLazy/>
                            </Route>
                            <Route path={"/"}>
                                <MarketingLazy/>
                            </Route>
                        </Switch>
                    </Suspense>
                </div>
            </StylesProvider>
        </Router>
    )
}
export default App