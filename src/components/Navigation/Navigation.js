import React, {useState} from 'react';
import classes from './Navigation.module.css'
import { Fade as Hamburger } from 'hamburger-react'
import { Link, useNavigate } from 'react-router-dom';

const Navigation = (props) => {

    const [anInput, setAnInput] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        if (e.key === 'Enter' && anInput !== ''){
            navigate('/search-result-page', {state: {input: anInput}});
        }
    }

    let titleVisibility = window.innerWidth > 768 ? 'visible' : 'hidden';

    return ( 
        <div className= {classes.Navigation}>
            <div className= {classes.Hamburger} style = {props.open ? {position: 'fixed'} : {position: 'unset'}}>
                <Hamburger onToggle={props.toggleDrawer} toggled={props.routed} />
            </div>
            <Link to = '/' style = {{visibility: titleVisibility}} className= {classes.Navlink}>Title</Link>
            <div className= {classes.Search}>
                <input type = 'text' onChange={(e) => setAnInput(e.target.value)} onKeyUp = {(e) => handleSearch(e)}/>
                <div style = {{
                    backgroundImage: `url(${'/assets/search.png'})`, 
                    width: '24px', 
                    height: '42px',
                    backgroundColor: 'white',
                    backgroundRepeat: 'no-repeat',
                    paddingRight: '20px',
                    backgroundPosition: 'center',
                    borderRadius: '0 4px 4px 0'
                    }}></div>
            </div>
            <Link   to = '/checkout'
                    style = {{
                        backgroundImage: `url(${'/assets/cart.png'})`,
                        width: '32px',
                        height: '32px',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        cursor: 'pointer'
                    }}
                    >
            </Link>
        </div>
    );
}

export default Navigation;