import React from "react";
import "../styles/Contact.css";

function Contact() {
    return(
    <section className="contact-area" id="contact">
        <h3 className="contact-title">Contact</h3>
        <ul className="contact-content">
            <li>
                <i className="fa fa-map-marker"></i>
                <h4>Address</h4>
                <p>7317 Piedmont Drive <br/>Texas, USA</p>
            </li>
            <li>
                <i className="fa fa-phone"></i>
                <h4>Phone Number</h4>
                <p>+469-463-9884</p>
            </li>
            <li>
                <i className="fa fa-envelope"></i>
                <h4>Email Address</h4>
                <p>hannah.joy1143@gmail.com</p>
            </li>
        </ul>
    </section>
    )
}

export default Contact;