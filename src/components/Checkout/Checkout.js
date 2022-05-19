import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './Checkout.module.css'
import Cleave from 'cleave.js/react';
import { useState } from 'react';


const Checkout = (props) => {

    const regex=/^[a-zA-Z]+$/;

    const navigate = useNavigate();

    let totalPrice = 0;

    props.itemList.forEach(element => {
        totalPrice = totalPrice + parseFloat(element.price);
    });

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [card, setCard] = useState('');
    const [date, setDate] = useState('');
    const [cvv, setCVV] = useState('');
    const [showError, setShowError] = useState(false);


    const handleFirstName = (e) => {
        if (e.target.value === "" || regex.test(e.target.value)){
            setFirstName(e.target.value);
        }
    }

    const handleLastName = (e) => {
        if (e.target.value === "" || regex.test(e.target.value)){
            setLastName(e.target.value);
        }
    }

    const completeTransaction = () => {
        if (firstName && lastName && card && date && cvv) {
            setShowError(false);
            let newDate = date.slice(0,-1); //Date input allows 3 characters in YY, remove it.
            
            navigate('/tokens');
        }
        else {
            setShowError(true);
        }
    }

    let imageSource;
    
    return (
        <div className= {classes.Checkout}>
            {props.itemList.map((item, index) => {
                imageSource = '/videos/' + item.title + '.mp4';
                return (
                    <div key = {index} style = {{display: 'flex', alignItems: 'center', position: 'relative'}}>
                    <video className= {classes.Thumbnail} >
                        <source src= {imageSource} type="video/mp4"/>
                    </video>
                            <div>
                                <p style = {{fontWeight: '500', textTransform: 'capitalize'}}> { item.title } </p>
                                <p>Price: { item.price }€</p>
                            </div>
                            <div className= {classes.Remove} onClick = {() => props.handleRemove(index)}></div>
                    </div>
                );
            })}
            <p style={{backgroundColor: 'black', color: 'white', padding: '12px', textAlign: 'end'}}> <span style = {{fontWeight: '500'}}>Total Price:</span> {totalPrice.toFixed(2)}€</p>
            <div className= {classes.CheckoutForm}>
                <input 
                    value = {firstName} 
                    onChange = {(e) => handleFirstName(e)} 
                    disabled = {props.itemList.length > 0 ? false : true} 
                    className= {classes.Input} 
                    placeholder= 'First Name' />
                <input 
                    value = {lastName} 
                    onChange = {(e) => handleLastName(e)} 
                    disabled = {props.itemList.length > 0 ? false : true} 
                    className= {classes.Input} 
                    placeholder= 'Last Name' />
                <Cleave 
                    onInput={e => setCard(e.target.value)} 
                    disabled = {props.itemList.length > 0 ? false : true} 
                    className= {classes.Input} 
                    placeholder = 'xxxx-xxxx-xxxx-xxxx' 
                    options = {{numericOnly: true, blocks: [4,4,4,4], delimiter: '-'}}/>
                <Cleave 
                    onInput={e => setDate(e.target.value)} 
                    disabled = {props.itemList.length > 0 ? false : true} 
                    className= {classes.Input} 
                    placeholder='MM/YY' 
                    options = {{date: true, datePattern: ['m', 'y']}} />
                <Cleave 
                    onInput={e => setCVV(e.target.value)} 
                    disabled = {props.itemList.length > 0 ? false : true} 
                    className= {classes.Input}
                     placeholder='CVV' 
                    options = {{numericOnly:true, blocks: [3]}}/>
                <button 
                    onClick={() => completeTransaction()} 
                    disabled = {props.itemList.length > 0 ? false : true} 
                    style = {props.itemList.length > 0 ? {cursor: 'pointer'} : {cursor: 'not-allowed'}} >Submit</button>
                {showError ? <div style = {{color: 'red'}}>Please fill in the fields above to complete the checkout process.</div> : null}
            </div>
        </div>
    );
}

export default Checkout;