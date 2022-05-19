import React from 'react';
import classes from './Explore.module.css'
import exploreTags from '../../exploreTags.json'
import { useNavigate } from 'react-router-dom';

const Explore = (props) => {
    const navigate = useNavigate();
    
    return ( 
        <div className= {classes.Explore}>
            <p>Explore Trending Tags</p>
            <div className= {classes.ExploreItems} >
                {exploreTags.map((tag, index) => {

                    let myUrl = '/assets/' +tag.name+'.jpg';

                    return (
                    <div 
                        className= {classes.ExploreItem} 
                        key = {index} 
                        style={{backgroundImage: `url(${myUrl})`, 
                                backgroundSize: 'cover', 
                                textShadow: '0 1px 0 rgba(0, 0, 0, 0.6)',
                                paddingTop: '16px',
                                fontSize: '1.2em',
                                textTransform: 'capitalize'}}
                        onClick={() => navigate('/search-result-page', {state: {input: tag.name}})}>{tag.name}</div>
                );})}
            </div>
        </div>
    );
}

export default Explore;