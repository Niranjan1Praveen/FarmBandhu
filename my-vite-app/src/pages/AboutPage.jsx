import React from "react"
import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import Footer from "../components/Footer/Footer"
import AboutUs from "../components/aboutUs/aboutUs"
export default function AboutPage({isAuth, setIsAuth}) {
    return(
        <section>
            <Header isAuth = {isAuth} setIsAuth = {setIsAuth}/>
            <AboutUs/>
            <Footer isAuth = {isAuth} setIsAuth = {setIsAuth}/>
        </section>
    )
}

