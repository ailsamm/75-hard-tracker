import React, { Component } from 'react';
import Header from '../Header/Header';
import Tracker from '../Tracker/Tracker';
import AppContext from '../../AppContext';
import STORE from '../../STORE';
import './App.css';

export default class App extends Component {

    constructor(props){
        super(props);
        this.state = {
          loggedInUser: 1,
          users: [],
          userLogs: []
        }
    }

    componentDidMount() {
        this.setState({
            users: STORE.users,
            userLogs: STORE.userLogs
        })
    }

    render() {
        const contextValue = {
            users: this.state.users,
            userLogs: this.state.userLogs,
            loggedInUser: this.state.loggedInUser
        }
        return (
            <AppContext.Provider value={contextValue}>
                <div className="app">
                <Header/>
                <Tracker/>
                </div>
            </AppContext.Provider>
        );
    }
}
  