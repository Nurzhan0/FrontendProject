import React from "react";
import { Link } from "react-router-dom"
import "./home-style.css"

const Home = () => {
    return(
        <div class="grid grid-cols-2 py-5 px-10 bg-white">
            <div className="basis-1/2 px-4 mx-auto mt-20">
            <div class="text-box">
            <h2 class= "text-5xl font-bold">An application for the classification of sign language</h2> 
                <p class = "text-3xl text-blue-300 font-semibold dark:text-gray-50 mr-3 mt-2">HandGesture improves the communication experience of people with partial or complete hearing loss and mute people. </p>    
            </div>
            <div className='grid gap-5 grid-cols-4 px-8 py-5 '>
                <Link to="/webcam">
                    <button className="py-2 px-4 flex w-full rounded-lg border border-transparent bg-green-500 text-white font-semibold items-center justify-center">START NOW</button>
                </Link>
                <a className="py-2 px-4 flex w-full rounded-lg border border-transparent bg-gray-300 items-center justify-center">LEARN MORE</a>
            </div>
            </div>
            
        <div className="lg:absolute lg:right-0 lg:w-1/2 basis-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-1/2 lg:w-full"
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt=""
        />
      </div>
      </div>
    )
}

export default Home