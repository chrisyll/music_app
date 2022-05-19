import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import classes from './ToTopButton.module.css';
import { useEffect, useState } from 'react';

const ToTopButton = (props) => {

    const [buttonIsVisible, setButtonIsVisible] = useState(false);


    useEffect(() => {
        const toggleButtonVisibility = () => {
        if (window.scrollY > 200){
            setButtonIsVisible(true);
        }
        else {
            setButtonIsVisible(false);
        }
        }

        window.addEventListener('scroll', toggleButtonVisibility);

        return () => {
        window.removeEventListener('scroll', toggleButtonVisibility);
        }
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        })
    }

    return ( 
        <FontAwesomeIcon 
            onClick={scrollToTop} 
            icon = {faArrowAltCircleUp} 
            className= {classes.ToTopButton}
            style = {buttonIsVisible ? {visibility: 'visible'} : {visibility: 'hidden'}}
            />
     );
}

export default ToTopButton;