import React from 'react'
import './index.css'
import Singlepost from '../Singlepost'

export default function Postlists({posts}) {
  return (
    <div className='post-list container'>
        {posts.map(post=>(
            <Singlepost post={post} key={post.id}/>
        ))}
    </div>
  )
}
