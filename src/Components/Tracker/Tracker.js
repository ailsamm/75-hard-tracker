import React, { Component } from 'react';
import TrackerDay from '../TrackerDay/TrackerDay';
import AppContext from '../../AppContext';
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint, faDumbbell, faLeaf, faBook, faWineGlassAlt } from '@fortawesome/free-solid-svg-icons';
import './Tracker.css';

export default class Tracker extends Component {

    static contextType = AppContext;

    constructor(props) {
        super(props);
        this.state = {
            userLogs: []
        }
    }

    render() {
        let days = [];
        let userLogs = this.context.userLogs.filter(log => log.user_id === this.context.loggedInUser);
        for (let i = 0; i < 75; i++) {
            let dayLog = userLogs.find(log => log.day_number === i + 1);
            days.push(<TrackerDay key={i+1} num={i+1} log={dayLog || null}/>);
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
            </div>
        )
    }
}