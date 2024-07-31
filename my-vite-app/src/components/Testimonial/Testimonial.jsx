import React from 'react';
import "./Testimonial.css"
import testimonialData from '../../data/testimonialData';
import AOS from 'aos'
import 'aos/dist/aos.css'
const Testimonial = () => {
    React.useEffect(
        () => {
            AOS.init({duration: 700, once: false,  easing: 'ease'})
        }, []
    )
    return (
        <div id='testimonial-container' className='section-p'>

            <div className="testimonial-title">
                <h1>"Celebrating the Success Stories: Empowering Voices of Delight and Transformation – Discover What Our Valued Clients Have to Say in Their Inspiring Testimonials!"</h1>
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
