import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Header.css";
import userSvg from '../../assets/images/icons/user.svg';
import languageIcon from '../../assets/images/icons/language.svg';
import logo from '../../assets/images/logo/logo.png';
import xmark from '../../assets/images/icons/xmark.svg';
import bars from '../../assets/images/icons/bars.svg';
import { useNavigate } from "react-router-dom";
export default function Header({ isAuth, setIsAuth, setIsLangugaes}) {
    const { t, i18n } = useTranslation('header');
    const navigate = useNavigate();
    function handleChangeLanguages(e) {
        localStorage.setItem('Language', e.target.value);
        i18n.changeLanguage(localStorage.getItem('Language'));
        setIsLangugaes(e.target.value);
    }

    function displayNavbar() {
        const navbar = document.getElementById("navbar");
        navbar.style.right = "0";
    }

    function closeNavbar() {
        const navbar = document.getElementById("navbar");
        navbar.style.right = "-100%";
    }

    const logOut = () => {
        localStorage.setItem('isAuth', false);
        // localStorage.clear();
        setIsAuth(false);
        navigate("/login");
    }

    return (
        <section id="header" className="section-p">
            {/* Logo */}
            <div className="logo">
                <img src={logo} alt="" className="logo-img" />
                <h1 className="logo-title">{t('title')}</h1>
            </div>
            {/* Navbar */}
            <ul id="navbar">
                <li id="close" onClick={closeNavbar}>
                    <img src={xmark} onClick={closeNavbar} alt="close navbar" />
                </li>
                <li className="active"><Link to="/">{t('home')}</Link></li>
                <li className="active"><Link to="/blog">{t('news')}</Link></li>
                <li className="dropdown">
                    <Link>{t('tools.title')}</Link>
                    <ul className="dropdown-content">
                        <li><Link to="/crop-recommendation-tool">{t('tools.links.1')}</Link></li>
                        <li><Link to="/crop-price-analysis-tool">{t('tools.links.0')}</Link></li>
                        <li><a href="http://127.0.0.1:5000" target="_blank" rel="noopener noreferrer">{t('tools.links.4')}</a></li>
                        <li><Link to="/">{t('tools.links.3')}</Link></li>
                    </ul>
                </li>
                <li className="active"><Link to="/about">{t('about')}</Link></li>
                <li className="active"><Link to="/contact">{t('contact')}</Link></li>
                {!isAuth && (
                    <li className="register">
                        <button>
                            <Link to="/register">{t('signUp')}</Link>
                        </button>
                    </li>
                )}
                {!isAuth ? (
                    <li className="logIn">
                        <img src={userSvg} className="icon" alt="login" />
                        <Link to="/login">{t('logIn')}</Link>
                    </li>
                ) : (
                    <li className="logIn" onClick={logOut}>
                        <img src={userSvg} className="icon" alt="logout" />
                        <Link to="/">{t('logOut')}</Link>
                    </li>
                )}
                <li>
                    <div className="language-set">
                        <img src={languageIcon} alt="language logo" className="icon" />
                        <select id="languageSelect" value={i18n.language} onChange={handleChangeLanguages}>
                            <option value="en">English</option>
                            <option value="hi">हिंदी</option>
                        </select>
                    </div>
                </li>
            </ul>

            <div id="mobile-btn">
                <img src={bars} alt="menu" onClick={displayNavbar} />
            </div>
        </section>
    );
}
