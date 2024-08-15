import React from "react";
import userSvg from '../../assets/images/icons/user.svg';
import facebookSvg from '../../assets/images/icons/facebook-f.svg';
import twitterSvg from '../../assets/images/icons/twitter.svg';
import linkedInSvg from '../../assets/images/icons/linkedin-in.svg';
import instagramSvg from '../../assets/images/icons/instagram.svg';
import quoraSvg from '../../assets/images/icons/quora.svg';

import "./Footer.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer({ isAuth }) {
    const { t } = useTranslation('footer');

    return (
        <footer id="footer" className="section-p">
            {/* Footer Top */}
            <section id="footer-container">
                <div className="col">
                    <h3 className="logo-title">{t('footer.logoTitle')}</h3>
                </div>
                <div className="col">
                    <a className="title">{t('footer.about.title')}</a>
                    <div className="footer-links">
                        <a href="#">{t('footer.about.links.0')}</a>
                        <a href="#">{t('footer.about.links.1')}</a>
                        <a href="#">{t('footer.about.links.2')}</a>
                    </div>
                </div>
                <div className="col">
                    <h4 className="title">{t('footer.services.title')}</h4>
                    <div className="footer-links">
                        <a href="#">{t('footer.services.links.0')}</a>
                        <a href="#">{t('footer.services.links.1')}</a>
                        <a href="#">{t('footer.services.links.2')}</a>
                        <a href="#">{t('footer.services.links.3')}</a>
                    </div>
                </div>
                <div id="footer-social" className="col">
                    <h4 className="title">{t('footer.support.title')}</h4>
                    <div className="footer-links">
                        <a href="#">{t('footer.support.links.0')}</a>
                        <a href="#">{t('footer.support.links.1')}</a>
                    </div>
                </div>
                <div className="col social">
                    {!isAuth && (
                        <button className="footer-logIn">
                            <img src={userSvg} className="icon" alt={t('logIn.alt')} />
                            <Link to='/login'>{t('footer.logIn.text')}</Link>
                        </button>
                    )}

                    <div className="social-icons">
                        <img src={linkedInSvg} alt={t('footer.socialMedia.linkedin')} className="icon" />
                        <img src={twitterSvg} alt={t('footer.socialMedia.twitter')} className="icon" />
                        <img src={facebookSvg} alt={t('footer.socialMedia.facebook')} className="icon" />
                        <img src={instagramSvg} alt={t('footer.socialMedia.instagram')} className="icon" />
                        <img src={quoraSvg} alt={t('footer.socialMedia.quora')} className="icon" />
                    </div>
                </div>
            </section>

            {/* Footer Bottom */}
            <section id="footer-bottom">
                <div className="copyright">
                    <small>{t('footer.bottom.copyright.0')}</small>
                    <small>{t('footer.bottom.copyright.1')}</small>
                </div>
                <div className="privacy">
                    <a href="#">{t('footer.bottom.privacy.0')}</a>
                    <a href="#">{t('footer.bottom.privacy.1')}</a>
                    <a href="#">{t('footer.bottom.privacy.2')}</a>
                </div>
            </section>
        </footer>
    );
}
