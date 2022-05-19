import React, {useState} from 'react';
import classes from './Contact.module.css'
import { useNavigate } from 'react-router-dom';


const Contact = (props) => {

    const [name, setName] = useState();
    const [mail, setMail] = useState();
    const [message, setMessage] = useState();

    const navigate = useNavigate();

    const sendMessage = () => {
        if (name && mail && message) {
            navigate('/');
        }
    }

    return (
            <div className= {classes.Contact}>
            <h1 style = {{width: '20%', margin: '0 auto', fontSize: '22px'}}>Contact</h1>
                <div className= {classes.InputBlock}>
                    <label>First Name</label>
                    <input type = 'text' onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className= {classes.InputBlock}>
                    <label>E-Mail</label>
                    <input type = 'email' onChange={(e) => setMail(e.target.value)}/>
                </div>
                <div className= {classes.InputBlock}>
                    <label>Message</label>
                    <textarea type = 'text' onChange={(e) => setMessage(e.target.value)} style = {{height: '120px'}}/>
                </div>
                <button className= {classes.Submit} onClick={() => sendMessage()}>Submit</button>
            </div>
    );
}

export default Contact;