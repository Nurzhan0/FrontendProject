import React, {useState} from "react";
import "./upload-image.css"
import axios from "axios"

function UploadImage() {
    const [image, setImage] = useState('')
    
    function fileSelectedHandler(e) {
        setImage(e.target.files[0])
        console.log(e.target.files[0]);
    }

    function fileUploadhandler() {
        const fd = new FormData()
        fd.append("image", image)
        axios.post("http://127.0.0.1:8000/api/image", fd).then(res=> {
            console.log(res)
        })
    }
    
    return (
        <div className="UploadImage">
            <input type="file" name="file" onChange={fileSelectedHandler}/>
            <button onClick={fileUploadhandler}>Upload</button>
        </div>
    );
}

export default UploadImage;