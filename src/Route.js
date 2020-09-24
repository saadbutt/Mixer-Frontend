import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import App from "./App";
import Instruction from "./Instructions";
import Ethereum from "./Ethereum";
import history from './history';
import How from './How'
import Why from './Why'


export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/Instruction" component={Instruction} />
                    <Route path="/Ethereum" component={Ethereum} />
                    <Route path="/How" component={How} />
                    <Route path="/Why" component={Why} />
                </Switch>
            </Router>
        )
    }
}