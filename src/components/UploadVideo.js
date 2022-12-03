import React, {useState} from "react";
import "./upload-video.css"
import axios from "axios"

function UploadVideo() {
    const [video, setVideo] = useState('')
    const [resultText, setResultText] = useState('Result')
    
    function fileSelectedHandler(e) {
        setVideo(e.target.files[0])
        console.log(e.target.files[0]);
    }

    function fileUploadhandler() {
        const fd = new FormData()
        fd.append("video", video)
        fd.append("language", "kz")
        axios.post("http://127.0.0.1:8000/api/video/", fd)
            .then(res => res.data)
            .then(res=> setResultText(
                res.data
            ))
    }
    
    return (
        <div className="UploadVideo">
            <input type="file" name="file" onChange={fileSelectedHandler}/>
            <button onClick={fileUploadhandler}>Upload</button>
            <div>
                <span>{resultText}</span>
            </div>
        </div>
    );
}

export default UploadVideo;