import React, { Component } from 'react';
import TrackerDay from '../TrackerDay/TrackerDay';
import './Tracker.css';

export default class Tracker extends Component {
    render() {
        var days = [];
        for (var i = 0; i < 75; i++) {
            days.push(<TrackerDay num={i+1}/>);
        }
        return (
            <div className="tracker">
                {days}
            </div>
        )
    }
}