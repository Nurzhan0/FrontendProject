import React from "react";
import "./about.css"

const About = () => {
    return(
        <section className = "hero-1">
            <h1>About project</h1>
            <h3>This system for interacting with the deaf and dumb using gestures, 
                if widely used, will be useful because it helps to communicate with the deaf 
                and dumb even without knowledge of sign language. It's also a convenient way to 
                understand deaf and dumb people even if someone hasn't learned sign language yet, 
                as the sign language translator system will help you accurately predict and translate 
                sign language gesture. Such a system also allows people to be united and happy. 
                Those who need to communicate using sign language will be happy to be heard and understood. 
                They will be motivated to "speak up" as people try to "listen" to them.</h3>
            <img className="photo1" src="https://mediapipe.dev/images/mobile/hand_crops.png" alt="hand" />

            <h1>Our aim</h1>
            <h3>Our goal is to create a program that will recognize hand gestures, 
                thereby creating an interaction between people with disabilities, 
                in which the recognized gestures will be translated into understandable 
                language. It's up to us to decide how the machine interacts with the gesture, 
                because ultimately we need to get the resulting hand gestures to be understandable 
                and well interpreted by the computer.
            </h3>
            <img className="photo1" src="https://www.smekenseducation.com/wp-content/uploads/2020/06/TalkMovesIcons-scaled.jpg" alt="hand" />
        </section>
    )
}

export default About