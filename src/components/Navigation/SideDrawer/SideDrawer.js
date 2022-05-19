import React from 'react';

import classes from './SideDrawer.module.css';
import Backdrop from '../../Backdrop/Backdrop';
import { Link } from 'react-router-dom';


const sideDrawer = ( props ) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];

    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <div>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className= {classes.Title}>Title</div>
                <nav className= {classes.Navblock}>
                    <Link onClick = {props.routed} className = {classes.Navlink} to = '/'>home</Link>
                    <Link onClick = {props.routed} className = {classes.Navlink} to = '/upload'>upload</Link>
                    <Link onClick = {props.routed} className = {classes.Navlink} to = '/redeem-token'>redeem</Link>
                </nav>
            </div>
        </div>
    );
};

export default sideDrawer;