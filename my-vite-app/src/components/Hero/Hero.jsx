import React from "react"
import "./Hero.css"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useTranslation } from "react-i18next";
import heroBg from "../../assets/images/background/hero.jpeg"
export default function Hero({isAuth}) {
    React.useEffect(
        () => {
            AOS.init({duration: 900, once: false})
        }, []
    ) 
    const { t } = useTranslation('hero');
    const languages = [
        'Empowering Indian Farmers', // English
        'भारतीय किसानों को सशक्त बनाना', // Hindi
        'ভারতীয় কৃষকদের ক্ষমতায়ন', // Bengali
        'இந்திய விவசாயிகளை சக்திவாய்ந்ததாக்குதல்', // Tamil
        'భారతీయ రైతులను శక్తివంతం చేస్తుంది', // Telugu
        'ಭಾರತೀಯ ರೈತರಿಗೆ ಅಧಿಕಾರ ನೀಡುವುದು', // Kannada
        'ભારતીય ખેડૂતોને સશક્ત બનાવવું', // Gujarati
        'ഭാരതീയ കർഷകരെ സശക്തമാക്കൽ' // Malayalam
      ];
    
      const [currentText, setCurrentText] = React.useState(languages[0]);
      const [fade, setFade] = React.useState(true);
    
      React.useEffect(() => {
        const intervalId = setInterval(() => {
          setFade(false);
          setTimeout(() => {
            const currentIndex = languages.indexOf(currentText);
            const nextIndex = (currentIndex + 1) % languages.length;
            setCurrentText(languages[nextIndex]);
            setFade(true);
          }, 500); 
    
        }, 6000);
    
        return () => clearInterval(intervalId);
      }, [currentText, languages]);
      
    return(
        <section id="hero" className="section-p" data-aos="fade-in" data-aos-delay="520">
            <div className="hero-title">
                
                <h1 className={`fade-up ${fade ? 'fade-in' : 'fade-out'}`}> {currentText}</h1>
                <h1>
                    <p className="hero--slogan">{t('subTitle')}</p>
                    {isAuth && <p>Welcome {JSON.parse(localStorage.getItem('UserRegisterData')).name}</p>}
                </h1>
            </div>
            <div className="hero-grid">
                <img src={heroBg} alt="" />
            </div>
        </section>

    )
 }