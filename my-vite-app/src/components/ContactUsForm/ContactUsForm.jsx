import React from "react"
import "./ContactUsForm.css"
import Vaibhav from '../../assets/images/users/vaibhav.jpeg'
import Niranjan from '../../assets/images/users/niranjan.jpeg'
import Debshata from '../../assets/images/users/debshata.jpeg'
export default function ContactUsForm(){
    return(
        <section id="contact-form" className="section-p">
            <form action="" name="contact-form" id="form">
                <span>Leave a message</span>
                <h2>We love to hear from you!</h2>
                <input type="text" name="name" id="name" placeholder="Your Name" required />
                <input type="email" name="email" id = "email" placeholder="Your Email" required />
                <input type="text" name="subject" id = "subject" placeholder="Your Subject" required />
                <textarea name="message" id="area-msg" cols="30" rows="10" placeholder="Your Message" required></textarea>
                <button type="submit">Submit</button>
            </form>
            
            <div className="members">
                <h2>Members of Farm Bandhu</h2>
                <div className="people">
                    <img src={Vaibhav} alt="vaibhav img"/>
                    <p><span>Vaibhav Jain</span>Phone: +91 XXXXXXXXXX <br/> Email: abc@gmail.com</p>
                </div>
                <div className="people">
                    <img src={Niranjan} alt="niranjan img"/>
                    <p><span>Niranjan Praveen</span>Phone: +91 XXXXXXXXXX<br/> Email: abc@gmail.com</p>
                </div>
                <div className="people">
                    <img src={Debshata} alt="debshata img"/>
                    <p><span>Debshata Choudhury</span>Phone: +91 XXXXXXXXXX <br/> Email: abc@gmail.com</p>
                </div>
            </div>
    </section>
    )
}