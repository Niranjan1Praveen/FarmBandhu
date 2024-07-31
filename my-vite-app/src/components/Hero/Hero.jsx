import React from "react"
import "./Hero.css"
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function Hero() {
    React.useEffect(
        () => {
            AOS.init({duration: 1700, once: false})
        }, []
    )
    return(
        <section id="hero" className="section-p" data-aos="fade-up">
            <div className="hero-title">
            <h1>
                Empowering Indian Farmers: 
                <p className="hero--slogan">"Growing greatness from the ground up"</p>
            </h1>
            </div>
            
            <div className="hero-grid">
                <div className="box box-1"></div>
                <div className="box box-2"></div>
                <div className="box box-3"></div>
            </div>
        </section>
    )
 }