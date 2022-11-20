import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";

function WebcamImage() {
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
    <div className="container mx-auto px-40">
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
          <div >
          <button className="rounded-2xl px-10 mb-5 w-auto h-10 bg-green-600 hover:bg-green-500 gap-4" 
          onClick={capture}>Take a photo
          </button>
          </div>
        </>
      ) : (
        <>
          <img src={img} alt="screenshot" />
          <div>
          <button className="rounded-2xl px-10 mb-5 w-auto h-10 bg-red-600 hover:bg-red-500" onClick={() => setImg(null)}>Retake</button>
          </div>
        </>
      )}
    </div>
    </div>);
}

export default WebcamImage;