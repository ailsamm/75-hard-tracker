import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal } from '@material-ui/core/';
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import './LogModal.css';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

function getNotes(notes) {
    return (
        <div className="notes__container">
            <p className="notes__notes"><span className="notes__title">NOTES:</span> {notes}</p>
        </div>
    )
}

function getContent(log) {
    let complete = [];
    let incomplete = [];

    let rules = [
        {key:"workout1", fullName:"First workout"}, 
        {key:"workout2", fullName:"Second workout"}, 
        {key:"water", fullName:"Drink 1 gallon of water"}, 
        {key:"read", fullName:"Read 10 pages"}, 
        {key:"no_cheating", fullName:"No cheat meals or alcohol"}, 
        {key:"diet", fullName:"Stick to diet"}
    ];

    rules.map(rule => {
        let checked = log[`${rule.key}`];
        let display;
        if (checked) {
            display = <p key={rule.fullName} className="completeRule"><FontAwesomeIcon className="icon-check" icon={faCheckCircle}/> {rule.fullName}</p>
            complete.push(display);
        }
        else {
            display = <p key={rule.fullName} className="incompleteRule"><FontAwesomeIcon className="icon-cross" icon={faTimesCircle}/> {rule.fullName}</p>
            incomplete.push(display);
        }
    })

    return (
        <div>
            {complete}
            {incomplete}
            {!!log.notes.length && getNotes(log.notes)}
        </div>
    )
}

export default function LogModal(props) {
    const useStyles = makeStyles((theme) => ({
        main: {
          position: 'absolute',
          width: 400,
          backgroundColor: '#FFF',
          border: '2px solid #000',
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
          borderRadius: "10px",
          outline: 0
        }
    }));

    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);

    const body = (
        <div style={modalStyle} className={classes.main}>
            <h2 className="modal__title">DAY {props.log.day_number}</h2>
            {getContent(props.log)}
        </div>
    );

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
