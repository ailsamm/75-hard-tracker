import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import AppContext from '../../AppContext';
import './Stats.css';

export default class Stats extends Component {

    static contextType = AppContext;

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    getBarData(){
        let userLogs = this.context.userLogs.filter(log => log.user_id === this.context.loggedInUser);
        let logCount = userLogs.length;
        let successfulLogs = userLogs.filter(log => log.complete);
        let successCount = successfulLogs.length;
        let failureCount = logCount - successCount;
        console.log(successCount, failureCount)
        return {
            labels: ['successes', 'failures'],
            datasets: [
                {
                label: null,
                backgroundColor: ['#63ebe2', '#e88fdb'],
                borderWidth: 2,
                data: [successCount, failureCount]
                }
            ]
        }
    }

    render() {
        let userLogs = this.context.userLogs.filter(log => log.user_id === this.context.loggedInUser);
        let logCount = userLogs.length;
        let successfulLogs = userLogs.filter(log => log.complete);
        let successCount = successfulLogs.length;
        let failureCount = logCount - successCount;
         
        return (
            <div className="stats">
                <div className="stats__quickFeatures">
                    <div className="stats__quickFeature">
                        <p className="featureTitle">DAYS COMPLETED</p>
                        <p className="featureContent">{logCount}/75</p>
                    </div>
                    <div className="stats__quickFeature">
                        <p className="featureTitle">DAYS REMAINING</p>
                        <p className="featureContent">{75 - logCount}</p>
                    </div>
                    <div className="stats__quickFeature">
                        <p className="featureTitle">SUCCESS RATE</p>
                        <p className="featureContent">{Math.floor((successCount / logCount) * 100)}%</p>
                    </div>
                </div>
                <div className="stats__charts">
                    <Bar   
                        className="stats__charts__barChart"
                        data={this.getBarData()}
                        options={{
                            chartArea: {
                                backgroundColor: '#FFF'
                            },
                            responsive: true,
                            maintainAspectRatio: true,
                            title:{
                                display:true,
                                text:'Current progress',
                                fontSize:20,
                                fontColor: "#FFF"
                            },
                            legend:{
                                display:false,
                            },
                            scales: {
                                xAxes: [{
                                    ticks: {
                                        fontColor: "#FFF"
                                    },
                                    gridLines: {
                                        display: false
                                    }
                                }],
                                yAxes: [{
                                    ticks: {
                                        beginAtZero: true,
                                        fontColor: "#FFF",
                                        userCallback: function(label) {
                                            if (Math.floor(label) === label) return label;
                                        }
                                    }
                                }]
                            }
                        }}
                    />
                </div>
            </div>
        )
    }
}