import React, { useState } from 'react';
import Webcam from "react-webcam";
import './webcam.css';

const HEIGHT = 500;
const WIDTH = 600;

class WebcamApp extends React.Component {
  
  setRef = (webcam) => {
    this.webcam = webcam;
  }

  stop = () => {
    let stream = this.webcam.video.srcObject;
    const tracks = stream.getTracks();
    
    tracks.forEach(track => track.stop());
    this.webcam.video.srcObject = null;
  };

  render() {
    return (
      <div className="block w-full">
        <Webcam className="justify-center bg-slate-600 py-5 mx-50"
          audio={false}
          ref={this.setRef}
          height={HEIGHT}
					width={WIDTH}
          mirrored={true}
        />
        <br />
        <div>
          <button className="px-10 mb-5 w-auto h-10 bg-red-600 hover:bg-red-500"
          onClick={this.stop}>Stop</button>
        </div>
      
      </div>
    );
  }
}


export default WebcamApp;