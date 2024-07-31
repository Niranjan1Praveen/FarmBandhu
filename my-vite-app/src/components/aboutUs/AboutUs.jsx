import React from "react"
import './AboutUs.css'
export default function AboutUs(){
    return(
        <section id="about-us-container" className="section-p">
            <h1 className="welcome-title">Welcome to Farm Bandhu – the Ultimate Source for Farmers</h1>
            <div className="group">
                <p className="content">Welcome to Farm Bandhu, your trusted partner in empowering farmers with data-driven insights and tools to maximize their agricultural potential.</p>
                <p className="content">We are dedicated to supporting the backbone of our nation – the farmers – by providing them with the resources they need to make informed decisions and achieve the best possible outcomes for their crops.</p>
            </div>

            <div className="group"> 
                <h1 className="title">Who We Are</h1>
                <p className="content">Farm Bandhu is a pioneering platform developed to assist Indian farmers in navigating the complexities of the agricultural market.</p>
                <p className="content">Our team comprises passionate professionals with expertise in agriculture, data analytics, and technology, all committed to enhancing the livelihoods of farmers.</p>
                <p className="content">We understand the challenges faced by farmers and strive to bridge the information gap through innovative solutions.</p>
            </div>

            <div className="group">
                <h1 className="title">Our Vision</h1>
                <p className="content">Our vision is to revolutionize the agricultural sector by empowering farmers with accurate, timely, and actionable data. </p>
                <p className="content">We aim to create a sustainable and prosperous future for Indian agriculture by leveraging technology to provide farmers with the knowledge and tools they need to thrive in a competitive market.</p>
            </div>
            <div className="group">
                <h1 className="title">Our mission</h1>
                <p className="content">At Farm Bandhu, our mission is to provide farmers with the tools and information they need to make data-driven decisions.</p>
                <p className="content"> By offering transparent and accessible data analytics, we strive to enhance agricultural productivity, increase income, and improve the overall quality of life for farmers across India</p>
            </div>
            <div className="group">
                <h1 className="title">What we offer</h1>
                <ol>
                    <li><span>Price Comparison Tool</span>: Our platform provides a detailed comparison of different prices per kilogram of crops between private entities, cooperatives, government agencies, and input dealers. This enables farmers to identify the best selling prices for their produce and maximize their profits.</li>
                    <li><span>Market Insights</span>: Farmers receive valuable insights through graphs that depict the amount of land they possess compared to others in their state. This helps them understand the competitive landscape and make strategic decisions about their farming practices.</li>
                    <li><span>Historical Performance Analysis</span>: We offer line plots showing how various crops have performed over the years in the Indian market. This historical data allows farmers to gauge trends, predict future performance, and plan their crop cycles more effectively.</li>
                </ol>
            </div>
            <div className="group">
                <h1 className="title">Our Commitment</h1>
                <p className="content">We are committed to continuously improving our platform by integrating the latest advancements in technology and expanding our database.</p>
                <p className="content"> Our goal is to offer comprehensive and up-to-date information that empowers farmers to stay ahead in an ever-evolving market.</p>
            </div>
            <div className="group">
                <h1 className="title">Join Us</h1>
                <p className="content">We invite you to join the Farm Bandhu community and take advantage of the wealth of information and tools available at your fingertips.</p>
                <p className="content"> Together, we can build a stronger, more resilient agricultural sector that benefits everyone involved.</p>
            </div>
        </section>
    )
}