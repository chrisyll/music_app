import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import classes from './CompletedModal.module.css'

const CompletedModal = (props) => {
    
    
    return (
        <div className= {classes.CompletedModal}>
            <Backdrop show />
            <div style = {{margin: 'auto', height: 'fit-content'}}>
                <p className= {classes.Text}><b>{props.transaction} completed successfully!</b> <br/><br/> Taking you back home...</p>
            </div>
        </div>
    );
}

export default CompletedModal;