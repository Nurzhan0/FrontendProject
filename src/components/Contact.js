import React, { useContext } from "react";
import "./contact.css"
import { ThemeContext } from "../App";

const Contact = () => {
    const {theme} = useContext(ThemeContext)
    return(
        <section className="hero-1" id = {theme}>
            <h1>Our contacts</h1>
            <div class="grid-container">
                <div class="grid-item">
                    <img className="photo1" src="https://cdn-icons-png.flaticon.com/512/8244/8244509.png" alt="hand" />
                    <h2>Visit us</h2>
                    <h4>You can visit us and talk to the guys</h4>
                    <h5>Abaya 109B, Almaty, KZ</h5>
                </div>
                <div class="grid-item">
                <img className="photo1" src="https://cdn-icons-png.flaticon.com/512/5585/5585836.png" alt="hand" />
                    <h2>Call us</h2>
                    <h4>You can call us on the number</h4>
                    <h5>+7 (707) - 777 - 77 - 77</h5>
                </div>
                <div class="grid-item">
                <img className="photo1" src="https://cdn-icons-png.flaticon.com/512/5602/5602809.png" alt="hand" />
                    <h2>Contact us</h2>
                    <h4>You can write to us</h4>
                    <h5>handGesture@gmail.com</h5>
                </div>
            </div>
        </section>
    )
}

export default Contact