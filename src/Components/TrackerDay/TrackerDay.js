import React, { Component } from 'react';
import './TrackerDay.css';
import { NavLink } from 'react-router-dom';

export default class TrackerDay extends Component {

    getClassName(){
        let className;
        let log = this.props.log;
        // if day successfully completed
        if (!!log && log.complete) {
            className = "complete"
        }
        // if day incomplete
        else if (!!log && !log.complete) {
            className = "incomplete"
        }
        // if day not logged
        else {
            className = "notLogged";
        }
        return className;
    }
    render() {
        let className = this.getClassName();
        return (
            <NavLink to={`/logger/${this.props.num}`} className={`trackerDay ${className}`}>
                <p className="trackerDay__number">
                    {this.props.num}
                </p>
            </NavLink>
        )
    }
}