import React, {useState} from 'react';
import classes from './Redeem.module.css';
import videos from '../../videos.json';

const Redeem = (props) => {

    const [token, setToken] = useState('');
    const [showError, setShowError] = useState(false);
    const [myVideos, setMyVideos] = useState([]);
    const [source, setSource] = useState('');

    const handleTokenSubmit = () => {
        setShowError(true);
        videos.map((video, index) => {
            if(token === video.token){
                setShowError(false);
                setSource ('/videos/' + video.title + '.mp4');
                setMyVideos([{...video}]);
                return null;
            }
        })
    }

    return (
        <div className= {classes.Redeem}>
            <h1>Redeem Token</h1>
            <div className= {classes.InputBlock}>
                <label>Insert token below...</label>
                <input type = 'text'onChange={(e) => setToken(e.target.value)}/>
            </div>
            <button className= {classes.RedeemSubmit} onClick={() => handleTokenSubmit()}>Submit</button>
            {showError ? <div style = {{color: 'red', width: 'fit-content', margin: 'auto', paddingBottom: '24px'}}>Invalid  token.</div> : null}
            {myVideos.length > 0 ? myVideos.map((video, index) => 
                                                    
                                                    {
                                                    
                                                       return (
                                                        <div key = {index} className= {classes.DownloadItem}>
                                                        <video className= {classes.DownloadItemThumbnail} >
                                                            <source src= {source} type="video/mp4"/>
                                                        </video>
                                                        <div style = {{position: 'relative'}}>
                                                            <p style = {{fontWeight: '500', textTransform: 'capitalize', margin: '0 0 8px 0'}}> { video.title } </p>
                                                            <button className= {classes.Download}>Download</button>
                                                        </div>
                                                    </div>)}
                                                ) : null}
        </div>
    );
}

export default Redeem;