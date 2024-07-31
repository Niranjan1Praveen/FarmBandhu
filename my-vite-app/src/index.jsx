import React from "react"
import ReactDOMClient from "react-dom/client"
import HomePage from "./pages/HomePage"
import BlogPage from "./pages/BlogPage"
import ContactPage from "./pages/ContactPage"
import RegisterPage from "./pages/RegisterPage"
import LogInPage from "./pages/LogInPage"
import Tools from "./pages/PredTools"
import AboutPage from "./pages/AboutPage"
import "./styles/style.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
function App(){
    const [isAuth, setIsAuth] = React.useState(localStorage.getItem("isAuth"));
    return(
        <section>
            <BrowserRouter> 
                <Routes>
                    <Route path="/" exact element={<HomePage isAuth={isAuth} setIsAuth={setIsAuth}/>}/>
                    <Route path="/blog" element={<BlogPage isAuth={isAuth}/>}/>
                    <Route path="/about" element={<AboutPage></AboutPage>}/>
                    <Route path="/contact" element={<ContactPage isAuth={isAuth}/>}/>
                    {/* <Route path="/blog/:id" element={<SingleBlogPage isAuth={isAuth}/>}/> */}
                    <Route path="/tools" element={<Tools/>}/>
                    <Route path="/login" element={<LogInPage isAuth={isAuth} setIsAuth={setIsAuth}/>}/>
                    <Route path="/register" element={<RegisterPage isAuth={isAuth} setIsAuth={setIsAuth}/>}/>
                </Routes>
            </BrowserRouter>
        </section>
    )
}
const container = document.getElementById('root');
if (!container) {
    throw new Error('Root container missing in index.html');
}

let root;
if (!container._reactRootContainer) {
    root = ReactDOMClient.createRoot(container);
} else {
    root = container._reactRootContainer;
}
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);