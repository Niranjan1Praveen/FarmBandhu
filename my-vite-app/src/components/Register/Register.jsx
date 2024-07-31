import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo/farm_logo.jpeg'
import goBackTo from '../../assets/images/icons/less-than.svg'
import google from '../../assets/images/icons/google.svg'
import facebook from '../../assets/images/icons/facebook.svg'
import './Register.css'
const Register = ({setIsAuth}) => {
    let navigate = useNavigate();
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [name, setName] = React.useState('')
    
    return (
        <section id="register-container">
            <form action="" id="login-form">
                <Link to="/" className="go-back-to">
                    <img src={goBackTo} alt="" className="icon"/>
                    go back to home page
                </Link>
                <img src={logo} alt="Website logo" className="register-logo icon" />
                <p>Create your Farm Bandhu account</p>
                <input type="name" id="name" placeholder="Username" required value={name} onChange={(e)=>setName(e.target.value)}/>
                <input type="tel" id="Phone Number" placeholder="Phone Number" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="text" placeholder="OTP(ONE TIME PASSWORD)" id="OTP" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <span className='terms-text'>By submitting the form you agree to the <a href="">Terms of Services</a></span>
                <button className="logIn-btn signIn-btn" type="submit">Join Now</button>
                <div className="provider-sign-in-container">

                    <div className="wrap">
                        <div className="line-1"></div>
                            <small>or</small>
                        <div className="line-2"></div>
                    </div>

                    <button className="provider-btn" type='button'>
                        <img src={google} alt="google logo" />
                        Continue with Google
                    </button>
                    <button className="provider-btn" type='button'>
                        <img src={facebook} alt="facebooklogo" />
                        Continue with Facebook
                    </button>

                </div>
            </form>
    </section>
    );
}

export default Register;
