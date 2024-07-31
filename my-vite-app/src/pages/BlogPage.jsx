import React from "react";
import Header from "../components/Header/Header";
import Filterblock from "../components/FilterBlock/FilterBlock";
import Blog from "../components/Blog/Blog";
import Footer from "../components/Footer/Footer";
export default function BlogPage({isAuth, setIsAuth}){
    const [inputVal, setInputVal] = React.useState('');
    const [selectedVal, setSelectedVal] = React.useState('');
    const [newsData , setNewsData] = React.useState([]);
    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://newsapi.org/v2/everything?q=agriculture&apiKey=e4ba2183d1a44603b56217281e3e6707");
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setNewsData(data.articles);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    const filteredContainers = newsData.filter((container) =>
        selectedVal ? container.title.includes(selectedVal) : true
    );

    function getInputVal(event){
        setInputVal(event.target.value)
    }

    function search(){
        const search_box = inputVal.toUpperCase();
        const blog = document.querySelectorAll(".blog-container");
        const title = document.querySelectorAll(".blog-title");
        for (var i = 0; i < title.length; i++){
            let match = blog[i].querySelectorAll(".blog-title")[0]
            if(match){
                let textValue = match.textContent || match.innerHTML;
                if(textValue.toUpperCase().indexOf(search_box) > -1){
                    blog[i].style.display = "";
                }else{
                    blog[i].style.display = "none";
                }
            }
        }

    }

    // Select function
    function getSelectedVal(){
        const categories = document.getElementById("categories").value;
        setSelectedVal(categories);
    }
    return(
        <section>
            <Header isAuth = {isAuth} setIsAuth = {setIsAuth}/>
            <Filterblock getSelectedVal={getSelectedVal} getInputVal={getInputVal} search={search}/>
            <Blog filteredContainers = {filteredContainers} newsData={newsData}/>
            <Footer isAuth = {isAuth} setIsAuth = {setIsAuth}/>
        </section>
    )
}