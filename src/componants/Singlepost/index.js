import React from 'react'
import './index.css'
import styles from './single_post.module.css'

export default function Singlepost({post}) {
    console.log(post);
  return (
    <div className={`single-post ${styles.card}`} key={post.id}>
       <h3>{post.title}</h3> 
        {post.status}
    </div>
  )
}
