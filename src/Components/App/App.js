import React, { Component } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
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

    addNewLog = (log) => {
        let logs = [...this.state.userLogs, log]
        this.setState({
            userLogs: logs
        });
    }

    render() {
        const contextValue = {
            users: this.state.users,
            userLogs: this.state.userLogs,
            loggedInUser: this.state.loggedInUser,
            onAddNewLog: this.addNewLog,
        }
        return (
            <AppContext.Provider value={contextValue}>
                <div className="app">
                <Header/>
                <Main/>
                </div>
            </AppContext.Provider>
        );
    }
}
  