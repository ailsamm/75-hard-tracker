import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import Tracker from '../Tracker/Tracker';
import Logger from '../Logger/Logger';
import './Main.css';

export default class Main extends Component {
    render() {
        return (
            <main className="main">
                <Switch>
                    <AnimatedSwitch
                        atEnter={{ opacity: 0 }}
                        atLeave={{ opacity: 0 }}
                        atActive={{ opacity: 1 }}
                        className="switch-wrapper"
                    >
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
                    </AnimatedSwitch>
                </Switch>
            </main>
        )
    }
}