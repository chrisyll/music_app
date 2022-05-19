import React from 'react';
import classes from './Faq.module.css'

const Faq = (props) => {
    return (
        <div className= {classes.Container}>
        <h1>Frequently Asked Questions</h1>
            <div className= {classes.Block}>
                <h1>Can I buy these items?</h1>
                <p>No, unfortunately the items being displayed on the website are not for sale. They are only being used here as a demo.</p>
            </div>
            <div className= {classes.Block}>
                <h1>What is this website?</h1>
                <p>This website is a prototype of an e-commerce site selling different kinds of videos.</p>
            </div>
        </div>
    );
}

export default Faq;