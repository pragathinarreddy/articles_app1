import Article from "./Article";
import { allArticles } from "../data";
import { useEffect, useState } from "react";




function Articles (){
    const[data,setdata ]=useState(null)
        useEffect(() => {
            fetch("https://dummyjson.com/products").then(res => res.json()).then(data => setdata(data))
        },[])
        console.log(data  " data")


    return (
        
        allArticles.map((article) => {
            // console.log(article);
            return (
                <>
    <div key={article.publishedAt}>
        <h2>{article.author}</h2>
        <p>{article.title}</p>
        <p>{article.description}</p>
        <a href={article.url}></a>
        <img className="image" src={article.urlToImage} alt={article.title} />
        <p>{article.publishedAt}</p>
        <p>{article.content}</p>

                </div>
        </>
            )
        })

    )
}

export default Articles