import React, {Suspense} from "react"
import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import Footer from "../components/Footer/Footer"
import FeaturedPost from "../components/FeaturedPost/FeaturedPost"
import Tools from "../components/Tools/Tools"
import Notificationtoast from "../components/notificationToast/notificationToast"
import EmptyList from '../../src/assets/images/gifs/EmptyList.gif'
export default function HomePage({isAuth, setIsAuth, languages, setIsLangugaes}) {
    return(
        <section>
            <Header isAuth = {isAuth} setIsAuth = {setIsAuth} languages={languages} setIsLangugaes={setIsLangugaes}/>
            <Suspense fallback={<div><img src={EmptyList} alt="Empty List Gif" /></div>}>
                <Hero isAuth={isAuth}/>
            </Suspense>
            <Tools languages={languages}/>
            <FeaturedPost/>
            <Footer isAuth = {isAuth} setIsAuth = {setIsAuth}/>
            <Notificationtoast/>
        </section>
    )
}
