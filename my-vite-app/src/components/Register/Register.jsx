import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo/logo.png';
import goBackTo from '../../assets/images/icons/less-than.svg';
import google from '../../assets/images/icons/google.svg';
import facebook from '../../assets/images/icons/facebook.svg';
import './Register.css';
import { useTranslation } from "react-i18next";

const Register = ({ setIsAuth }) => {
    const navigate = useNavigate();
    const [userData, setUserData] = React.useState({
        name: "",
        email: "",
        password: "",
        confirm_psswd: "",
    });
    const { t } = useTranslation('register');
    const [error, setError] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setUserData((prevUserData) => ({
            ...prevUserData,
            [name]: value
        }));

        if (name === "password") {
            setConfirmPassword(true);
            if (value.length === 0) {
                setUserData((prevUserData) => ({
                    ...prevUserData,
                    confirm_psswd: ""
                }));
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, password, confirm_psswd } = userData;

        if (!name || !email || !password || (confirmPassword && !confirm_psswd)) {
            setError("All fields are required!");
        } 
        else if (confirmPassword && password !== confirm_psswd) {
            setError("Passwords do not match!");
        } 
        else if(email === JSON.parse(localStorage.getItem('UserRegisterData')).email){
            setError("Email already exists!");
        }
        else {
            localStorage.setItem('UserRegisterData', JSON.stringify(userData));
            localStorage.setItem('isAuth', true);
            setIsAuth(true);
            navigate("/");
        }
    };

    return (
        <section id="register-container" className='section-p'>
            <form action="" id="register-form">
                <Link to="/" className="go-back-to">
                    <img src={goBackTo} alt="" className="icon" />
                    {t('registerContainer.links.0')} 
                </Link>
                <img src={logo} alt={t('registerContainer.logoAlt')} className="register-logo icon" />
                <p>{t('registerContainer.paragraph')}</p> 
                
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder={t('registerContainer.inputs.0.placeholder')} 
                    required
                    value={userData.name}
                    onChange={handleChange}
                />

                <input 
                    type="email" 
                    id="email"
                    name="email"
                    placeholder={t('registerContainer.inputs.1.placeholder')} 
                    required
                    value={userData.email}
                    onChange={handleChange}
                />
                
                <input 
                    type="password" 
                    id="psswd"
                    name="password"
                    placeholder={t('registerContainer.inputs.2.placeholder')} 
                    required
                    value={userData.password}
                    onChange={handleChange}
                />

                {confirmPassword && (
                    <input
                        type="password"
                        id="confirm_psswd"
                        name="confirm_psswd"
                        placeholder="Confirm your password"
                        required
                        value={userData.confirm_psswd}
                        onChange={handleChange}
                    />
                )}

                {error && <small className='error'>{error}</small>}

                <span className='terms-text'>
                    {t('registerContainer.termsText')} <a href="#">{t('registerContainer.termsLink')}</a>
                </span>
                
                <button className="logIn-btn signIn-btn" type="submit" onClick={handleSubmit}>
                    {t('registerContainer.submitButton')}
                </button> 

                <div className="provider-sign-in-container">
                    <div className="wrap">
                        <div className="line-1"></div>
                        <small>{t('registerContainer.providerSignInContainer.wrap.small')}</small>  
                        <div className="line-2"></div>
                    </div>

                    <button className="provider-btn" type='button'>
                        <img src={google} alt="google logo" />
                        {t('registerContainer.providerSignInContainer.providerButtons.0')}  
                    </button>
                    
                    <button className="provider-btn" type='button'>
                        <img src={facebook} alt="facebook logo" />
                        {t('registerContainer.providerSignInContainer.providerButtons.1')}  
                    </button>
                </div>
            </form>
        </section>
    );
}

export default Register;
