import React from "react"
import "./Blog.css"
import {Link} from "react-router-dom"
import EmptyList from "../EmptyList/EmptyList"
import arrowRight from '../../assets/images/icons/arrow-right.svg'
export default function Blog({filteredContainers, newsData}){
    const [Pages , setPages] = React.useState(1)
    function PageClicker(pageIndex) {
        setPages(pageIndex)
    }
    // console.log(newsData);
    const BlogElements = filteredContainers.map((data, id)=> {
        return (
           <main className="blog-container" key={id}>
               <span className="blog-category"></span>
               <div className="blog-img">
                   <img src={data.urlToImage} alt="" className="blog-cover"/>
               </div>
               <h4 className="blog-title">{data.title}</h4>

               <div className="blog-author-details">
                   <img src={data.urlToImage} alt="" />
                   <p> 
                       {/* <a href="" className="element"></a> */}
                       {data.author} on {data.publishedAt}
                   </p>
               </div>
               <p className="blog-content">{data.description}</p>

               <div className="blog-read-more">
                   <Link to={data.url}>Read More</Link>
                   <img src={arrowRight} alt="read more link" />
               </div>              
           </main>
        )
    })

    return(
        <section>
             <main id="blog-root" className="section-p">
                {   newsData.length > 0 
                    ?
                    BlogElements.slice(Pages * 12 - 12, Pages*12)
                    :
                    <EmptyList/>
                }
            </main>

            {/* Pagination Code */}

            {
                newsData.length > 0 &&
                    (
                        <main id="pagination" className="section-p">
                            {
                                [...Array(4)].map((value, index)=>{
                                    return (
                                        <button key={index} onClick={ () => PageClicker(index + 1)} className={Pages === index + 1 ? "pageClicked" : ""}>{index+1}</button>
                                    )
                                })
                            }
                        </main>
                    )
            }
    
        </section>
       
    )
}