import React from "react"
import "./Hero.css"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useTranslation } from "react-i18next";
import heroBg from "../../assets/images/background/hero.jpeg"
export default function Hero() {
    React.useEffect(
        () => {
            AOS.init({duration: 900, once: false})
        }, []
    )
    const { t } = useTranslation('hero');
    return(
        <section id="hero" className="section-p" data-aos="fade-up" data-aos-delay="520">
            <div className="hero-title">
            <h1>
                {t('title')}
                <p className="hero--slogan">{t('subTitle')}</p>
            </h1>
            </div>
            
            <div className="hero-grid">
                <img src={heroBg} alt="" />
            </div>
        </section>

    )
 }