import React, {useState} from "react";
import "./upload-image.css"
import axios from "axios"
import { ThemeContext } from "../App";

function UploadImage() {
    const [image, setImage] = useState('')
    const [resultText, setResultText] = useState('Result')
    
    function fileSelectedHandler(e) {
        setImage(e.target.files[0])
        console.log(e.target.files[0]);
    }

    function fileUploadhandler() {
        const fd = new FormData()
        fd.append("image", image)
        fd.append("language", "kz")
        axios.post("http://127.0.0.1:8000/api/image/", fd)
            .then(res => res.data)
            .then(res => setResultText(
                res.data
            ))
            
    }
    
    return (
        <div className="UploadImage">
            <input type="file" name="file" onChange={fileSelectedHandler}/>
        
            <div className="btn-upload">
                <button onClick={fileUploadhandler}>Upload</button>
            </div>
            <div>
                <span>{resultText}</span>
            </div>
        </div>
    );
}

export default UploadImage;