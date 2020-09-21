// import Axios from 'axios'
import Link from 'next/link'
import React from 'react'
import fetch from 'isomorphic-unfetch'

function NewsCard() {


  return (
    <div className="w-full h-full grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
      {
        // newsArray.map((news) => (
        //   <Link className="cursor-pointer bg-gray-300" to={news.url}>
        //     <img src={news.urlToImage} alt="Headline" />
        //     <h2>{news.title}</h2>
        //   </Link>
        // ))
      }
    </div>
  )
}

// NewsCard.getInitialProps = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/todos');
//   // const newsArray = await res.json();
//   console.log(res.json());
//   // console.log(newsArray);
//   return {}
// }

export default NewsCard
