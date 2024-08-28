import React from "react";
import ReactDOMClient from "react-dom/client";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import RegisterPage from "./pages/RegisterPage";
import LogInPage from "./pages/LogInPage";
import AboutPage from "./pages/AboutPage";
import CropPrice from './components/CropPriceAnalysis/CropPrice';
import CropRecommendation from './components/CropRecommendation/CropRecommendation';
import './data/i18n';
import "./styles/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    const [isAuth, setIsAuth] = React.useState(localStorage.getItem('isAuth'));
    const [languages, setIsLangugaes] = React.useState('Hindi');
    return (
        <section>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<HomePage isAuth={isAuth} setIsAuth={setIsAuth} languages={languages} setIsLangugaes={setIsLangugaes}/>} />
                    <Route path="/blog" element={<BlogPage isAuth={isAuth} setIsAuth={setIsAuth} />} />
                    <Route path="/about" element={<AboutPage isAuth={isAuth} setIsAuth={setIsAuth}/>} />
                    <Route path="/contact" element={<ContactPage isAuth={isAuth} setIsAuth={setIsAuth} />} />
                    <Route path="/crop-price-analysis-tool" element={<CropPrice />} />
                    <Route path="/crop-recommendation-tool" element={<CropRecommendation />} />
                    <Route path="/login" element={<LogInPage isAuth={isAuth} setIsAuth={setIsAuth} />} />
                    <Route path="/register" element={<RegisterPage isAuth={isAuth} setIsAuth={setIsAuth} />} />
                </Routes>
            </BrowserRouter>
        </section>
    );
}

const container = document.getElementById('root');
if (!container) {
    throw new Error('Root container missing in index.html');
}

let root = container._reactRootContainer || ReactDOMClient.createRoot(container);
container._reactRootContainer = root;

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
