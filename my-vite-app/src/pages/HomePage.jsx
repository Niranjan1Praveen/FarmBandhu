import React from "react"
import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import Footer from "../components/Footer/Footer"
import FeaturedPost from "../components/FeaturedPost/FeaturedPost"
import Testimonial from "../components/testimonial/Testimonial"
import Latestquiz from "../components/latestQuiz/latestQuiz"
export default function HomePage({isAuth, setIsAuth}) {
    return(
        <section>
            <Header isAuth = {isAuth} setIsAuth = {setIsAuth}/>
            <Hero/>
            <FeaturedPost/>
            <Latestquiz/>            
            <Testimonial/>
            <Footer isAuth = {isAuth} setIsAuth = {setIsAuth}/>
        </section>
    )
}
