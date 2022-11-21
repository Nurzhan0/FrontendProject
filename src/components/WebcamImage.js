import React, { useCallback, useRef, useState, useContext } from "react";
import Webcam from "react-webcam";
import { ThemeContext } from "../App";
import './webcam.css';


function WebcamImage() {
  const {theme} = useContext(ThemeContext)
  const [img, setImg] = useState(null);
  const webcamRef = useRef(null);

  const videoConstraints = {
    width: 1000,
    height: 600,
    facingMode: "user",
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImg(imageSrc);
  }, [webcamRef]);

  return (
    <div className="containerAll" id= {theme}>
    <div className="Container">
      {img === null ? (
        <>
          <Webcam
            audio={false}
            mirrored={true}
            height={600}
            width={1000}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
          <div className="btn-container">
          <button className="btn1" 
          onClick={capture}>Take a photo
          </button>
          </div>
        </>
      ) : (
        <>
          <img src={img} alt="screenshot" />
          <div>
          <button className="btn2" onClick={() => setImg(null)}>Retake</button>
          </div>
        </>
      )}
    </div>
    </div>);
}

export default WebcamImage;