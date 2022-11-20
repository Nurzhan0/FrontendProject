import React, { useState } from 'react';
import Webcam from "react-webcam";
import './webcam.css';

const HEIGHT = 500;
const WIDTH = 800;

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

  buttonRef = () => {
    let button = document.querySelectorAll('button')
    button.disabled = false

    button.onClick = () => {
      takeSelfie()
      .then(download)
    }
  }


  render() {
    return (
      <div className="block w-full right-10">
        <Webcam className="justify-center bg-slate-600 py-5 mx-50 "
          audio={false}
          ref={this.setRef}
          height={HEIGHT}
					width={WIDTH}
          mirrored={true}
        />
        <br />
        <div>
          <button className="rounded-2xl px-10 mb-5 w-auto h-10 bg-red-600 hover:bg-red-500"
          onClick={this.stop}>Stop</button>
        </div>
        <div>
          <button className="rounded-2xl px-10 mb-5 w-auto h-10 bg-green-600 hover:bg-green-500"
          onClick={this.buttonRef}>Take a photo</button>
        </div>
      
      </div>
    );
  }

  
}
function takeSelfie() {
  let canvas = document.createElement('canvas')
  let ctx = canvas.getContext('2d')

  canvas.width = WIDTH
  canvas.height = HEIGHT

  ctx.drawImage(this.webcam.video, 0,0)


  return new Promise((res, rej) => {
    canvas.toBlob(res, "image.jpeg")
  })

}

function download(blob) {
  let a = document.createElement('a')
  a.href = URL.createObjectURL(blob)
  a.download = "image.jpg"
  document.body.appendChild(a)
  a.click()
}


export default WebcamApp;