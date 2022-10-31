import React from "react"
import "./footer.css"

function Footer() {
    return (
        <section id="footer">
            <span>
                <a
                href="https://www.twitter.com/Abgikcodez"
                alt="link to my twitter"
                target="_blank">
                    <i className="fab fa-twitter"></i>
                </a>

                <a
                href="https://www.facebook.com/Abgikcodez"
                alt="link to my twitter"
                target="_blank">
                    <i className="fab fa-facebook"></i>
                </a>

                <a
                href="https://www.linkedin.com/in/araoye-abraham-dev"
                alt="link to my twitter"
                target="_blank">
                    <i className="fab fa-linkedin"></i>
                </a>

                <a
                href="https://www.github.com/abrokinla"
                alt="link to my twitter"
                target="_blank">
                    <i className="fab fa-github"></i>
                </a>
            </span>
            {/* <section id="btn-theme">
                <button onClick="myFunction()">Dark</button>
            </section> */}
        </section>
    )
}

export default Footer;