import React, { useContext } from "react";
import { Link } from "react-router-dom"
import "./home-style.css"
import { ThemeContext } from "../App";

// const Home = () => {
//     const {theme} = useContext(ThemeContext)
//     return(
//         <div class="container" id = {theme} >
//             <div className="basis-1/2 px-4 mx-auto mt-20">
//             <div class="text-box">
//             <h2>An application for the classification of sign language</h2> 
//                 <p>HandGesture improves the communication experience of people with partial or complete hearing loss and mute people. </p>    
//             </div>
//             <div className='grid gap-5 grid-cols-4 px-8 py-5 '>
//                 <Link to="/webcam">
//                     <button className="btn">START NOW</button>
//                 </Link>
//                 <Link to="/about">
//                     <button className="py-2 px-4 flex w-full rounded-lg border border-transparent bg-gray-300 items-center justify-center">LEARN MORE</button>
//                 </Link>
//             </div>
//             </div>
            
//         <div className="image">
//         <img
//           src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
//           alt=""
//         />
//       </div>
//       </div>
//     )
// }

const Home = () => {
    const {theme} = useContext(ThemeContext)
    return (
        <div className="home" id = {theme}>
          <img src="https://cdn.analyticsvidhya.com/wp-content/uploads/2020/09/10-incredible-open-source-computer-vision-projects-for-beginner.jpg"
           alt="Travel" className="home__image" />
          <h1 className="home__title">An application for the classification of sign language</h1>
          <p className="home__title1">HandGesture improves the communication experience of people with partial or complete hearing loss and mute people</p>
          <div className="start">
            <h1 className="start_title">Let's start</h1>
            <div className="container-buttons">
                 <Link to="/webcam">
                     <button className="btn1">START NOW</button>
                 </Link>
                 <Link to="/about">
                     <button className="btn2">LEARN MORE</button>
                 </Link>
                 <Link to="/form">
                     <button className="btn1">UPLOAD IMAGE</button>
                 </Link>
             </div>

            </div>
        </div>


      );
}

export default Home