import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1 className="header__title">75 Hard Tracker</h1>
                <div className="header__links">
                    <NavLink to="/tracker" className="header__link">tracker</NavLink>
                    <NavLink to="/stats" className="header__link">stats</NavLink>
                </div>
            </div>
        )
    }
}