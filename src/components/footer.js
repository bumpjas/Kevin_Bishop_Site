import React from 'react';
import "../assets/css/footer.css";
import facebook from "../assets/images/facebook png icon (1).png";
import instagram from "../assets/images/instagram png icon.png";
import twitter from "../assets/images/twitter.png";
import riverchurch from "../assets/images/The-River-Church.png";
import riverchurchFB from "../assets/images/river church3.jpg";

const Footer = () => 
    <React.Fragment id="footer">
         <a target="_blank" href="https://www.facebook.com/theriverchurchinc"><img id="socialmedialinks" src={riverchurchFB} alt="logo" /></a>
         <a target="_blank"  href="https://www.facebook.com/kevinbishopministries/"><img id="socialmedialinks" src={facebook} alt="logo" /></a>
         <a target="_blank" href="https://www.instagram.com/kevinbishopmin/"><img id="socialmedialinks" src={instagram} alt="logo" /></a>
         <a target="_blank" href="https://twitter.com/KevinBishopMin"><img id="socialmedialinks" src={twitter} alt="logo" /></a>
         <a target="_blank" href="https://www.theriverchurchinc.com/"><img id="socialmedialinks" src={riverchurch} alt="logo" /></a>
        
        
      
    </React.Fragment>

export default Footer;