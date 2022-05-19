import React, {useState} from 'react';
import classes from './Token.module.css'
import { useNavigate } from 'react-router-dom';
import CompletedModal from '../CompletedModal/CompletedModal';

const Tokens = (props) => {

    const [done, setDone] = useState(false);
    const navigate = useNavigate();

    const HandleDone = () => {
        setDone(true);
        setTimeout(() => {
            navigate('/');
            props.resetOrder();
          }, 5000);
    }
    return (
        <div className= {classes.Tokens}>
        {done ? <CompletedModal transaction = 'Checkout'/> : null}
        <p className= {classes.TokensHeading}>Your tokens for each video are</p>
        <p className= {classes.TokensWarning}>(Please copy each token and keep it safe. In case of loss you won't be able to reclaim it.)</p>
            {props.itemList.map((item, index) => {
                return (
                    <div key = {index} className = {classes.TokenItem}>
                        <p><span style = {{fontWeight: '500'}}>Title:</span> {item.title}</p>
                        <p><span style = {{fontWeight: '500'}}>Token:</span> {item.token}</p>
                    </div>
                );
            })}
        <button className= {classes.TokenButton} onClick = {() => HandleDone()}>Done</button>
        </div>
    );
}

export default Tokens;