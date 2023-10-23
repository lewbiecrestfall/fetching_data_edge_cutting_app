import { getUserPosts } from '@/utils/features'
import React from 'react'

const posts = async ({id}) => {
    const posts =  await getUserPosts(id)
  return (
    <div className='posts'>
      {posts?.map(i=>(
        <h1 key={i.id}>{i.title}</h1>
      ))}
    </div>
  )
}

export default posts
