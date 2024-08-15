import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo/logo.png';
import goBackTo from '../../assets/images/icons/less-than.svg';
import google from '../../assets/images/icons/google.svg';
import facebook from '../../assets/images/icons/facebook.svg';
import './Register.css';
import { useTranslation } from "react-i18next";

const Register = ({setIsAuth}) => {
    const navigate = useNavigate();
    const [userData, setUserData] = React.useState({
        name: "",
        email: "",
        password: "",
    });
    const { t } = useTranslation('register');  
    React.useEffect(()=>{
        handleSubmit;
    }, [userData]);
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('UserRegisterData', JSON.stringify(userData));
        localStorage.setItem('isAuth', true);
        setIsAuth(true);
        navigate("/");
    }
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
                    type="name"
                    id="name"
                    placeholder={t('registerContainer.inputs.0.placeholder')} 
                    required
                    value={userData.name}
                    onChange={(e) => setUserData({
                        ...userData,
                        name: e.target.value
                    })}
                />

                <input type="email" 
                    id="email"
                    placeholder={t('registerContainer.inputs.1.placeholder')} 
                    required
                    value={userData.email}
                    onChange={(e) => setUserData({
                        ...userData,
                        email: e.target.value
                    })}
                />
                <input type="text" 
                    id="psswd"
                    placeholder={t('registerContainer.inputs.2.placeholder')} 
                    required
                    value={userData.password}
                    onChange={(e) => setUserData({
                        ...userData,
                        password: e.target.value
                    })}
                />

                <span className='terms-text'>
                    {t('registerContainer.termsText')} <a href="#">{t('registerContainer.termsLink')}</a>
                </span>
                <button className="logIn-btn signIn-btn" type="submit" onClick={handleSubmit}>{t('registerContainer.submitButton')}</button> 

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
