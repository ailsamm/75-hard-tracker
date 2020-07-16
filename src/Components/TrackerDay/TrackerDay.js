import React, { Component } from 'react';
import './TrackerDay.css';

export default class TrackerDay extends Component {
    render() {
        return (
            <div className="trackerDay">
                <p className="trackerDay__number">
                    {this.props.num}
                </p>
            </div>
        )
    }
}