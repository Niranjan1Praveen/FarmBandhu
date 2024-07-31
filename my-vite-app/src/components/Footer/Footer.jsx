import React from "react";
import userSvg from '../../assets/images/icons/user.svg'
import facebookSvg from '../../assets/images/icons/facebook-f.svg'
import twitterSvg from '../../assets/images/icons/twitter.svg'
import linkedInSvg from '../../assets/images/icons/linkedin-in.svg'
import instagramSvg from '../../assets/images/icons/instagram.svg'
import quoraSvg from '../../assets/images/icons/quora.svg'

import "./Footer.css"
import { Link } from "react-router-dom";
export default function Footer({isAuth, setIsAuth}){
    return(
        <footer id="footer" className="section-p">
            {/* Footer Top */}
            <section id="footer-container">
                <div className="col">
                    <h3 className="logo-title">Farm Bandhu</h3>
                </div>
                <div className="col">
                    <a className="title">About</a>
                    <div className="footer-links">
                        <a href="">About us</a>
                        <a href="">Contact us</a>
                        <a href="">Subscribe</a>

                        
                    </div>
                </div>
                <div className="col">
                    <h4 className="title">Services</h4>
                    <div className="footer-links">
                        <a href="">link goes here</a>
                        <a href="">link goes here</a>
                        <a href="">link goes here</a>
                        <a href="">link goes here</a>
                        <a href="">link goes here</a>
                        
                    </div>
                </div>
                <div id="footer-social" className="col">
                    <h4 className="title">Support</h4>
                    <div className="footer-links">
                        <a href="">link goes here</a>
                        <a href="">link goes here</a> 
                        <a href="">link goes here</a> 
                    </div>
                </div>
                <div className="col social">
                    {!isAuth && <button className="footer-logIn">
                        <img src={userSvg} className="icon" alt="login image"/>
                        <Link to='/login'>Log In</Link>
                    </button>}

                    <div className="social-icons">
                        <img src={linkedInSvg} alt="LinkedIn social media link" className="icon" />
                        <img src={twitterSvg} alt="Twitter social media link" className="icon" />
                        <img src={facebookSvg} alt="Facebook social media link" className="icon" />
                        <img src={instagramSvg} alt="Instagram social media link" className="icon" />
                        <img src={quoraSvg} alt="Quora social media link" className="icon" />
                    </div>
                </div>
            </section>
            
            {/* Footer Bottom */}
            <section id="footer-bottom">
                <div className="copyright">
                    <small>@2023 - 2023 Lorem, ipsum dolor.</small>
                    <small>All rights reserved. All creations copyright belongs to the creators.</small>                </div>
                <div className="privacy">
                    <a href="">Legal Notice</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Terms of Use</a>
                </div>
            </section>
        </footer>
    )
}