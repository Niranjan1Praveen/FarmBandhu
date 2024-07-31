import React from 'react';
import { Link } from 'react-router-dom';
import './latestQuiz.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import arrowRight from '../../assets/images/icons/arrow-right.svg'
const Latestquiz = () => {
    const [newsData , setNewsData] = React.useState([]);
    const [checkNewsData , setCheckNewsData] = React.useState(false);
    React.useEffect(
        () => {
            AOS.init({duration: 700, once: false,  easing: 'ease'})
        }, []
    )
    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://newsapi.org/v2/everything?q=agriculture&apiKey=e4ba2183d1a44603b56217281e3e6707");
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setNewsData(data.articles);
                setCheckNewsData(true);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    const popularElements = newsData.slice(0,4).map((data, id)=>{
        return (
                <div className="box box-1" data-aos="fade-up" key={id}>
                    <div className="box-img"><img src={data.urlToImage} alt="Image goes here" /></div>
                    <h4>{data.title}</h4>
                    <Link to={data.url} className="go-back-to">
                        Read now
                        <img src={arrowRight} alt="arrow right" className="icon"/>
                    </Link>
                </div>
        )
    })
    return (
        <React.Fragment>
            {checkNewsData && <section id='popularContainer' className='section-p'>
                <h1 className='popular-post-title'>Popular posts</h1>
                <div className='popularBox'>
                    {popularElements}      
                </div>
            </section>
            }
        </React.Fragment>
    );
}

export default Latestquiz;
