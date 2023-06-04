import React, { useEffect, useState } from 'react'
import QBox from './QBox'
import './css/Qfeed.css'
import Post from './Post'
import axios from 'axios';

function Qfeed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("/api/questions")
      .then((res) => {
        console.log(res.data.reverse());
        setPosts(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [])
  return (
    <div className='feed'>
        <QBox />
        {posts.map((post, index) => (
        <Post key={index} post={post} />
        ))}
        
    </div>
  )
}

export default Qfeed