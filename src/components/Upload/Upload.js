import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { React, useState } from 'react';
import classes from './Upload.module.css'
import { useNavigate } from 'react-router-dom';
import CompletedModal from '../CompletedModal/CompletedModal';
import { v4 as uuidv4 } from 'uuid';

const Upload = (props) => {

    const navigate = useNavigate();
    
    const [file, setFile] = useState();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priceTag, setPriceTag] = useState('');

    const [isAbstract, setIsAbstract] = useState(false);
    const [isDocumentary, setIsDocumentary] = useState(false);
    const [isMusicVideo, setIsMusicVideo] = useState(false);

    const [isWinter, setIsWinter] = useState(false);
    const [isNature, setIsNature] = useState(false);
    const [isCity, setIsCity] = useState(false);
    const [isPop, setIsPop] = useState(false);

    const [showError, setShowError] = useState(false);
    const [transactionSuccess, setTransactionSuccess] = useState(false);
    
    let tags = [];
    let genre = [];

    const handleUploadSubmit = () => {

        console.log(isAbstract, isDocumentary, isMusicVideo);

        if(isAbstract) {
            genre.push('Abstract');
        }
        if(isDocumentary) {
            genre.push('Documentary');
        }
        if(isMusicVideo) {
            genre.push('Music Video');
        }

        if(isWinter) {
            tags.push('Winter');
        }
        if(isNature) {
            tags.push('Nature');
        }
        if(isCity) {
            tags.push('City');
        }
        if(isPop) {
            tags.push('Pop');
        }
        if(file && title && description && priceTag && tags !== null){
            setShowError(false);
            setTransactionSuccess(true);

            let token = uuidv4();

            const newVideo = {
                id: token,
                title: title,
                description: description,
                genre: [...genre],
                tag: [...tags],
                price: priceTag,
                token: token
            }
            
            console.log(newVideo);

            setTimeout(() => {
                navigate('/');
              }, 5000);
        }
        else {
            setShowError(true);
        }
    }

    return (
        <div className= {classes.Upload}>
            {transactionSuccess ? <CompletedModal transaction = 'Upload' /> : null}
            <h1>Video Upload</h1>
            <div className= {classes.UploadBlock} style = {{textAlign: 'center'}}>
                <label htmlFor= 'file-upload'  className= {classes.CustomUpload}>
                    Video
                    <FontAwesomeIcon icon = {faCloudUploadAlt} style = {{marginLeft: '12px'}} />
                </label>
                <input onChange = {(e) => setFile(e.target.files)} id = 'file-upload' type = 'file' accept="video/mp4,video/x-m4v,video/*" name = 'video' />
                {file ? <div>{file[0].name}</div> : null}
            </div>
            <div className= {classes.UploadBlock}>
                <label>Title</label>
                <input onChange = {(e) => setTitle(e.target.value)} type = 'text' name = 'title' maxLength= '60' />
            </div>
            <div className= {classes.UploadBlock}>
                <label>Description</label>
                <textarea onChange = {(e) => setDescription(e.target.value)} type = 'text' name = 'description' style = {{height: '120px'}} maxLength= '120'/>
            </div>
            <div className= {classes.UploadBlock}>
                <label>Genre</label>
                <div style = {{backgroundColor: 'white', border: '1px solid #eaeaea', padding: '8px'}}>
                    <div>
                        <input onChange = {(e) => {setIsAbstract(true); setIsDocumentary(false); setIsMusicVideo(false);}} type = 'radio' name = 'genre' id = 'abstract' />
                        <label htmlFor= 'abstract'>Abstract</label>
                    </div>
                    <div>
                        <input onChange = {(e) => {setIsAbstract(false); setIsDocumentary(true); setIsMusicVideo(false);}} type = 'radio' name = 'genre' id = 'documentary' />
                        <label htmlFor= 'documentary'>Documentary</label>
                    </div>
                    <div>
                        <input onChange = {(e) => {setIsAbstract(false); setIsDocumentary(false); setIsMusicVideo(true);}} type = 'radio' name = 'genre' id = 'musicVideo' />
                        <label htmlFor= 'musicVideo'>Music Video</label>
                    </div>
                </div>
            </div>
            <div className= {classes.UploadBlock}>
                <label>Tags</label>
                <div style = {{backgroundColor: 'white', border: '1px solid #eaeaea', padding: '8px'}}>
                    <div>
                        <input onChange = {(e) => setIsNature(e.target.checked)} type = 'checkbox' id = 'nature' />
                        <label htmlFor= 'nature'>Nature</label>
                    </div>
                    <div>
                        <input onChange = {(e) => setIsWinter(e.target.checked)} type = 'checkbox' id = 'winter' />
                        <label htmlFor= 'winter'>Winter</label>
                    </div>
                    <div>
                        <input onChange = {(e) => setIsCity(e.target.checked)} type = 'checkbox' id = 'city' />
                        <label htmlFor= 'city'>City</label>
                    </div>
                    <div>
                        <input onChange = {(e) => setIsPop(e.target.checked)} type = 'checkbox' id = 'pop' />
                        <label htmlFor= 'pop'>Pop</label>
                    </div>
                </div>
            </div>
            <div className= {classes.UploadBlock}>
                <label>Price</label>
                <div>
                    <input value = {priceTag} onChange = {(e) => setPriceTag(e.target.value)} type = 'number' name = 'price' />
                    <span style={{width: '20%', paddingLeft: '4px'}}>€</span>
                </div>
            </div>
            <button onClick = {() => handleUploadSubmit()} className= {classes.UploadSubmit}>Submit</button>
            {showError ? <div style = {{color: 'red', width: 'fit-content', margin: 'auto', paddingBottom: '24px'}}>Please fill in the fields above to complete the video upload process.</div> : null}
        </div>
    );
}   

export default Upload;