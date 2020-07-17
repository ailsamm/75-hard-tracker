import React, { Component } from 'react';
import { Checkbox, FormControlLabel, TextField } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import AppContext from '../../AppContext';
import './Logger.css';

export default class Logger extends Component {

    static contextType = AppContext;

    constructor(props){
        super(props);
        this.state = {
            workout1: false,
            workout2: false,
            water: false,
            read: false,
            diet: false,
            noCheating: false,
            notes: ""
        }
    }

    handleUpdateNotes = val => {
        this.setState({
            notes: val
        })
    }

    handleChange = val => {
        this.setState({
            [`${val}`]: !this.state[val],
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let { workout1, workout2, water, read, diet, noCheating, notes } = this.state;
        let userId = this.context.loggedInUser;
        let day = parseInt(this.props.match.params.id);
        const complete = workout1 && workout2 && water && read && diet && noCheating;
        const log = {
            user_id: userId,
            day_number: day,
            logged: true,
            complete,
            workout1, 
            workout2, 
            water, 
            read, 
            diet, 
            no_cheating: noCheating, 
            notes
        }

        this.context.onAddNewLog(log);
        this.props.history.push("/tracker");
    }

    render() {
        //<NavLink to="/tracker" className="logger__form__button">LOG</NavLink>
        let day = this.props.match.params.id || 1;
        return (
            <div className="logger">
                <form className="logger__form" onSubmit={this.handleSubmit}>
                    <h1 className="logger__title">DAY {day}</h1>
                    <div className="logger__form__input">
                        <div className="logger__form__checkboxes">
                            <FormControlLabel
                                control={
                                <Checkbox
                                    onChange={e => this.handleChange(e.target.value)}
                                    checked={this.state.workout1}
                                    name="checkedB"
                                    color="primary"
                                    value="workout1"
                                />
                                }
                                label="First workout"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox
                                    onChange={e => this.handleChange(e.target.value)}
                                    checked={this.state.workout2}
                                    name="checkedB"
                                    color="primary"
                                    value="workout2"
                                />
                                }
                                label="Second workout"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox
                                    onChange={e => this.handleChange(e.target.value)}
                                    checked={this.state.water}
                                    name="checkedB"
                                    color="primary"
                                    value="water"
                                />
                                }
                                label="Drink 1 gallon of water"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox
                                    onChange={e => this.handleChange(e.target.value)}
                                    checked={this.state.read}
                                    name="checkedB"
                                    color="primary"
                                    value="read"
                                />
                                }
                                label="Read 10 pages"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox
                                    onChange={e => this.handleChange(e.target.value)}
                                    checked={this.state.diet}
                                    name="checkedB"
                                    color="primary"
                                    value="diet"
                                />
                                }
                                label="Stick to diet"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox
                                    onChange={e => this.handleChange(e.target.value)}
                                    checked={this.state.noCheating}
                                    name="checkedB"
                                    color="primary"
                                    value="noCheating"
                                />
                                }
                                label="No cheat meals or alcohol"
                            />
                        </div>
                        <TextField 
                            onChange={e => this.handleUpdateNotes(e.target.value)}
                            id="outlined-search" 
                            classes={{root:"aaa"}}
                            label="Notes" 
                            type="search" 
                            variant="outlined" 
                        />
                    </div>
                    <div className="logger__form__buttons">
                        <NavLink to="/tracker" className="logger__form__button backButton">BACK</NavLink>
                        <button type="submit" className="logger__form__button submitButton">LOG</button>
                    </div>
                </form>
            </div>
        )
    }
}