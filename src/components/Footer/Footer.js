import React from 'react';
import classes from './Footer.module.css'
import { Link } from 'react-router-dom';

function Footer(props) {
    return ( 
        <div className= {classes.Footer}>
            <div>
                <Link className= {classes.Navlink} to = '/contact-us'>Contact</Link>
            </div>
            <div>
                <Link className= {classes.Navlink} to = '/faqs'>FAQs</Link>
            </div>  
            <div>
                <Link className= {classes.Navlink} to = '/about'>About</Link>
            </div>
        </div>
    );
}

export default Footer;