import React from "react";
import "./Login.css";
import goBackTo from '../../assets/images/icons/less-than.svg';
import google from '../../assets/images/icons/google.svg';
import facebook from '../../assets/images/icons/facebook.svg';
import { useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Login({ setIsAuth }) {
    let navigate = useNavigate();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const { t } = useTranslation('login');  
    const [error, setError] = React.useState('');
    const [showPsswd, setShowPsswd] = React.useState(false);
    function signInWithGoogle() {
        signInWithPopup(auth, provider).then((user) => {
            localStorage.setItem("User signed in:", user.email);
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            navigate("/");
        });
    }

    function signInWithEmailPassword(event) {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                localStorage.setItem("User signed in:", user.email);
                localStorage.setItem("isAuth", true);
                setIsAuth(true);
                navigate("/");
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.error("Sign-in error:", errorMessage);
            });
    }

    function signInWithFacebook() {
        signInWithPopup(auth, provider_fb)
            .then((userCredential) => {
                const user = userCredential.user;
                localStorage.setItem("isAuth", true);
                setIsAuth(true);
                navigate("/");
                console.log('Signed in with Facebook:', user);
            })
            .catch((error) => {
                console.error('Error signing in with Facebook:', error);
            });
    }
    const handleLogin = (e) => {
        e.preventDefault();
        const userData = JSON.parse(localStorage.getItem('UserRegisterData'));
        if (email === userData.email && password === userData.password) {
            localStorage.setItem('isAuth', true);
            setIsAuth(true);
            navigate('/');
        } else {
            setError('Invalid email or password.');
            console.log(error);
        }
    };
    return (
        <section id="login-container" className="section-p">
            <form id="login-form" onSubmit={signInWithEmailPassword}>
                <Link to="/" className="go-back-to">
                    <img src={goBackTo} alt="" className="icon" />
                    {t('loginContainer.links.0')}  
                </Link>
                <p>{t('loginContainer.paragraph')}</p>  
                <input
                    type="email"
                    id="email"
                    placeholder={t('loginContainer.emailPlaceholder')}
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type={!showPsswd ? "password" : "text"}
                    placeholder={t('loginContainer.passwordPlaceholder')}  
                    id="psswd"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {/* Show Password Button */}
                {password && <small className="show-psswd" onClick={()=>setShowPsswd(!showPsswd)}>{showPsswd ? "Hide" : "Show"} Password</small>} 
                {error && <small className="error">{error}</small>}
                <a href="" id="forget-pswd">{t('loginContainer.forgetPasswordLink')}</a>  
                <button className="logIn-btn" onClick={handleLogin}>{t('loginContainer.submitButton')}</button>  

                <div className="provider-sign-in-container">
                    <div className="wrap">
                        <div className="line-1"></div>
                        <small>{t('loginContainer.providerSignInContainer.wrap.small')}</small>  
                        <div className="line-2"></div>
                    </div>

                    <button className="provider-btn" onClick={signInWithGoogle} type='button' disabled>
                        <img src={google} alt="google logo" />
                        {t('loginContainer.providerSignInContainer.providerButtons.0')}  
                    </button>
                    <button className="provider-btn" onClick={signInWithFacebook} type='button' disabled>
                        <img src={facebook} alt="facebook logo" />
                        {t('loginContainer.providerSignInContainer.providerButtons.1')}  
                    </button>
                </div>
            </form>
        </section>
    );
}
