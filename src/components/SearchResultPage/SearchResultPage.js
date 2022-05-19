import React from 'react';
import { useLocation } from 'react-router-dom';
import videos from '../../videos.json';
import LayoutItem from '../LayoutItem/LayoutItem';
import classes from './SearchResultPage.module.css'

const SearchResultPage = (props) => {
    const {state} = useLocation();

    return (
        <div className= {classes.SearchResultPage}>
            <p style = {{width: '50%', fontWeight: '500', fontSize: '20px', margin: '0 auto'}}>Search results:</p>
            <div>
                {videos.map((video, index) => {
                        if ( video.genre.includes(state.input) || video.tag.includes(state.input) || video.title.includes(state.input) ){
                            return (
                                <LayoutItem 
                                    key = {index}
                                    data = {video}
                                    cartHandler = {(data) => props.cartHandler(data)}
                                    buyHandler = {(data) => props.buyHandler(data)}
                                    />
                            );
                        }
                    })}      
            </div>
        </div>
    );
}

export default SearchResultPage;