import React from 'react';
import "./Testimonial.css"
import testimonialData from '../../data/testimonialData';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useTranslation } from 'react-i18next';
import { useSpeechSynthesis } from 'react-speech-kit'
const Testimonial = () => {
    React.useEffect(
        () => {
            AOS.init({duration: 700, once: false,  easing: 'ease'})
        }, []
    )
    const {t} = useTranslation('testimonial')
    return (
        <div id='testimonial-container' className='section-p'>

            <div className="testimonial-title">
                <h1>{t('title')}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, exercitationem.</p>
            </div>
            <div className="testimonials" data-aos="fade-in">
                {testimonialData.map((data)=>{
                    return (        
                        <div className="box" key={data.id}>
                            <h1>"</h1>
                            <p>{data.description}</p>
                            <div className="user">
                                <img src={data.img} alt={data.name}/>
                                <p>
                                    {data.name} <br/>
                                    <span>{data.desig}</span>
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Testimonial;
