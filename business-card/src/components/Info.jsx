import React from "react"
import "./info.css"
import profilePic from "./images/Ab.png"

function Info() {
    return (        
        <section id="wrapper">            
            <header>
                <img
                id="profile-pic"
                alt="araoye abraham headshot"
                src={profilePic} />
            </header>
            <section id="contact">
                <h3>Araoye Abraham A.</h3>
                <p>Fullstack Developer</p>
                <section id="contact-btns">
                    <span id="email">
                        <a target="_blank" href="mailto: abrokinla@gmail.com">                        
                            <input type="button" value="Email"/>                            
                        </a>
                        <i className="fas fa-envelope" aria-hidden="true"></i>
                    </span>
                    <span id="linkedin">
                        <a target="_blank" href="https://www.linkedin.com/in/araoye-abraham-dev">                            
                            <input type="button" value="Linkedin"/>
                        </a>
                        <i className="fab fa-linkedin" aria-hidden="true"></i>
                    </span>
                </section>
            </section>


        </section>
    )
}

export default Info;