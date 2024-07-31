import React from "react"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import ContactUsForm from "../components/ContactUsForm/ContactUsForm"
export default function ContactPage({isAuth, setIsAuth}) {
    return(
        <section>
            <Header isAuth = {isAuth} setIsAuth = {setIsAuth}/>
            <ContactUsForm/>
            <Footer isAuth = {isAuth} setIsAuth = {setIsAuth}/>
        </section>
    )
}

