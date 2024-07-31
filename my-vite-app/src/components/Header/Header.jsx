import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"
import userSvg from '../../assets/images/icons/user.svg'
import logOutSvg from '../../assets/images/icons/circle-exclamation.svg'
import language from '../../assets/images/icons/language.svg'
import logo from '../../assets/images/logo/farm_logo.jpeg'
import xmark from '../../assets/images/icons/xmark.svg'
import bars from '../../assets/images/icons/bars.svg'
export default function Header({isAuth, setIsAuth}) {
    function displayNavbar(){
        const navbar = document.getElementById("navbar");
        navbar.style.right="0"
    }  
    function closeNavbar(){
        const navbar = document.getElementById("navbar");
        navbar.style.right="-100%";
    }
    async function logOut(){
       await signOut(auth).then(
            ()=>{
                setIsAuth(false)
                localStorage.clear()
                
            }
        )
    }
    return(
        <section id="header" className="section-p">
            {/* Logo */}
            <div className="logo">
                <img src={logo} alt="" className="logo-img"/>
                <h1 className="logo-title">FARM BANDHU</h1>
            </div>
            {/* Navbar */}
            <ul id="navbar">
                <li id="close" onClick={closeNavbar}>
                    <img src={xmark} onClick={closeNavbar}/>
                </li>
                <li className="active"><Link to="/">Home</Link></li>
                <li className="active"><Link to="/blog">News</Link></li>
                <li className="active"><Link to="/tools">Analytical Tools</Link></li>
                <li className="active"><Link to="/about">About us</Link></li>
                <li className="active"><Link to="/contact">Contact us</Link></li>
                {!isAuth && <li className="register"><button> <Link to="/register">Sign Up</Link></button></li>}
                {!isAuth ? <li className="logIn">
                    <img src={userSvg} className="icon" alt="login image"/>
                    <Link to="/login">Log In</Link>
                </li> 
                :
                <li className="logIn" onClick={logOut}>
                    <img src={logOutSvg} className="icon" alt="login image"/>
                    <Link to='/'>Log Out</Link>
                </li>}
                <li>
                    <div className="language-set">
                        <img src={language} alt="language logo" className="icon"/>
                        <select name="" id="" disabled>
                            <option value="English">English</option>
                            <option value="Hindi">Hindi</option>
                        </select>
                    </div>
                </li>
            </ul>
            
            <div id="mobile-btn">
                <img src={bars} alt="" onClick={displayNavbar}/>
            </div>
        </section>
    )
}