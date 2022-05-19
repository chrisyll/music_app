import React, {useEffect} from 'react';
import Explore from '../../components/Explore/Explore';
import LayoutItem from '../../components/LayoutItem/LayoutItem';
import classes from './Layout.module.css';
import videos from '../../videos.json';


class Layout extends React.Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() { 
 
        return (
            <div>
                <Explore trending = {this.props.trending} />
                <div className= {classes.Layout}>
                {
                    videos.map((video, index) => {
                        
                        return (
                            <LayoutItem 
                                key = {index}
                                data = {video}
                                cartHandler = {(data) => this.props.cartHandler(data)}
                                buyHandler = {(data) => this.props.buyHandler(data)}
                                />
                        );
                    })
                }
                </div>
            </div>
        );
    }
}
 
export default Layout;