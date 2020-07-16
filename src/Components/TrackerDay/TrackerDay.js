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

    getNavLink() {
        return (
            <NavLink to={`/logger/${this.props.num}`} className={`trackerDay notLogged`}>
                <p className="trackerDay__number">
                    {this.props.num}
                </p>
            </NavLink>
        )
    }

    getDiv(className){
        return (
            <div onClick={e => this.props.handleClick(this.props.num)} value={this.props.log.day_number} className={`trackerDay  ${className}`}>
                <p className="trackerDay__number">
                    {this.props.num}
                </p>
            </div>
        )
    }

    render() {
        let className = this.getClassName();
        return (
            className === "complete" || className === "incomplete" ? this.getDiv(className) : this.getNavLink()
        )
    }
}