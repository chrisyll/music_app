import React from 'react';
import classes from './LayoutItem.module.css'
import { useNavigate } from 'react-router-dom';


const LayoutItem = (props) => {

    const navigate = useNavigate();
    let source = '/videos/' + props.data.title + '.mp4';
    return (
        <div className= {classes.LayoutItem}>
            <video className= {classes.Thumbnail} >
                <source src= {source} type="video/mp4"/>
            </video>
            <div className= {classes.Misc}>
                <p style = {{fontWeight: '500', textTransform: 'capitalize', margin: '0 0 8px 0'}}> { props.data.title } </p>
                <p style = {{margin: '0 0 32px 0'}, {fontStyle: 'italic'}}> { props.data.description } </p>
                <p style = {{textTransform: 'capitalize'}}> <span style = {{fontWeight: '500'}}>Genre:</span> { props.data.genre } </p>
                <p><span style = {{fontWeight:'500'}}>Tags:</span> 
                    {props.data.tag.map((tag, index) => {
                        if (index < props.data.tag.length - 1){
                            return (<span key = {index} style = {{textTransform: 'capitalize'}}> {tag}, </span>);
                        }
                        else {
                            return (<span key = {index} style = {{textTransform: 'capitalize'}}> {tag} </span>)
                        }
                    })} 
                </p>
                
                <p><span style = {{fontWeight:'500'}}>Price:</span> {props.data.price === '0' ? 'Free' : props.data.price+'€' } </p>
                <button className= {classes.ToCart} onClick={() => props.cartHandler(props.data)} >Add to Cart</button>
                <button className= {classes.Buy} onClick={() =>{ props.buyHandler(props.data);
                navigate('/checkout')}}>Buy</button>
            </div>
        </div>
    );
}

export default LayoutItem;