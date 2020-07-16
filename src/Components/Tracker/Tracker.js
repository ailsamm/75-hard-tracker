import React, { Component } from 'react';
import TrackerDay from '../TrackerDay/TrackerDay';
import AppContext from '../../AppContext';
import LogModal from '../LogModal/LogModal';
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint, faDumbbell, faLeaf, faBook, faWineGlassAlt } from '@fortawesome/free-solid-svg-icons';
import './Tracker.css';

export default class Tracker extends Component {

    static contextType = AppContext;

    constructor(props) {
        super(props);
        this.state = {
            userLogs: [],
            isModalOpen: false,
            selectedLog: {
                user_id: 100, 
                day_number: 1, 
                logged: true, 
                complete: true, 
                workout1: true, 
                workout2: true, 
                water: true, 
                no_cheating: true, 
                diet: true, 
                read: true, 
                notes: ""
            },
        }
    }

    handleClick = dayNumber => {
        let log = this.context.userLogs.find(log => log.day_number === dayNumber && log.user_id === this.context.loggedInUser);
        this.setState({
            selectedLog: log,
            isModalOpen: true
        })
    }

    handleCloseModal = () => {
        this.setState({ isModalOpen: false });
    };

    render() {
        let days = [];
        let userLogs = this.context.userLogs.filter(log => log.user_id === this.context.loggedInUser);
        for (let i = 0; i < 75; i++) {
            let dayLog = userLogs.find(log => log.day_number === i + 1);
            days.push(<TrackerDay handleClick={this.handleClick} key={i+1} num={i+1} log={dayLog || null}/>);
        }
        return (
            <div className="tracker">
                <div className="tracker__days">
                    {days}
                </div>
                <div className="tracker__rules">
                    <h2 className="tracker__rules__title">Daily Rules</h2>
                    <div className="tracker__rules__ruleset">
                        <p className="tracker__rules__rule"><FontAwesomeIcon icon={faDumbbell}/> 2 x 45 minute working sessions</p>
                        <p className="tracker__rules__rule"><FontAwesomeIcon icon={faLeaf}/> 1 exercise session must be outside</p>
                        <p className="tracker__rules__rule"><FontAwesomeIcon icon={faTint}/> Drink 1 gallon of water</p>
                        <p className="tracker__rules__rule"><FontAwesomeIcon icon={faBook}/> Read 10 pages</p>
                        <p className="tracker__rules__rule"><FontAwesomeIcon icon={faWineGlassAlt}/> No alcohol</p>
                    </div>
                </div>
                <LogModal open={this.state.isModalOpen} log={this.state.selectedLog} handleClose={this.handleCloseModal}/>
            </div>
        )
    }
}