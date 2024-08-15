import React from "react";
import Login from "../components/Login/Login";
export default function LogInPage({isAuth, setIsAuth}){
    return(
        <section>
            <Login setIsAuth={setIsAuth}/>
        </section>
    )
}