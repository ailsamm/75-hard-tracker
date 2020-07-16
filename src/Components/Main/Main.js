import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Tracker from '../Tracker/Tracker';
import Logger from '../Logger/Logger';
import './Main.css';

export default class Main extends Component {
    render() {
        return (
            <main className="main">
                <Switch>
                    <Route 
                        exact 
                        key='tracker'
                        path='/tracker' 
                        component={Tracker}
                    />
                    <Route 
                        key='logger'
                        path='/logger/:id' 
                        component={Logger}
                    />
                </Switch>
            </main>
        )
    }
}