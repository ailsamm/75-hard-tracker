import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1 className="header__title">75 Hard Tracker</h1>
            </div>
        )
    }
}