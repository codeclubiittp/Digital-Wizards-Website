import React from 'react';
// import { Link } from 'react-router-dom';
import '../css/Footer.css'; // Import CSS for styling

function Footer(){
    return (
        <footer>
        <div class="footer-container">
            <div class="footer-left">
                
                <div class="logo"></div>
                {/* Add DW Logo */}
                <p>Digital Wizards</p>
            </div>
    
            <div class="footer-links">
                <ul>
                    <li>ABOUT US</li>
                    <li>DOMAINS</li>
                    <li>CONTACT US</li>
                </ul>
    
                <ul>
                    {/* Add Social icons + Links*/}
                    <li>SOCIAL 1</li>
                    <li>SOCIAL 2</li>
                    <li>SOCIAL 3</li>
                </ul>
            </div>
    
            <div class="footer-bottom">
            <p class="copyrights">© Copyright. All rights reserved.</p>
            <p class="owner">Made with 🩵 by Team Web Development.</p>
            </div>
        </div>
    </footer>
    );
}

export default Footer;