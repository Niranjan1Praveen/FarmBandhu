import React from 'react';
import Header from "../components/Header/Header"
import Footer from '../components/Footer/Footer';
import BlogsData from '../BlogsData';
import { useParams } from "react-router-dom"
import SingleBlog from '../components/SingleBlog/SingleBlog';
import EmptyList from '../components/EmptyList/EmptyList';
export default function SingleBlogPage({isAuth, setIsAuth}){
    const {id} = useParams();
    const [blog, setBlog] = React.useState()
    React.useEffect(
        ()=>{
            let blog = BlogsData.find((blog)=>blog.id === parseInt(id))
            if(blog){
                setBlog(blog)
            }
        }, []
    )
    return (
       <section>
           {
               blog ? (
                    // Single Blog Page JSX
                    <section>
                        <Header isAuth = {isAuth} setIsAuth = {setIsAuth}/>
                        <SingleBlog
                            title= {blog.title}
                            cover={blog.cover}
                            authorCover={blog.authorCover}
                            content={blog.content}
                            authorName={blog.authorName}
                            publishedDate={blog.publishedDate}
                            isAuth={isAuth}
                            blogCategory={blog.blogCategory}
                            blogId = {blog.id}
                        />
                        <Footer/>
                    </section>
               ) : <EmptyList/>
           }
       </section>
    );
}

