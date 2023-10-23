import { getUserDetail } from '@/utils/features'
import React, { Suspense } from 'react'
import Posts from './posts'
import {notFound} from 'next/navigation'

export const dynamicParams = false;

export const generateStaticParams = ()=>{
  return [{
    id:"1",
  },{
    id:"2",
  },{
    id:"3",
  },{
    id:"4",
  }]
}

export const generateMetadata = async ({params})=>{
  const user = await getUserDetail(params.id)
  return{
    title : `${user.name}'s profile`,
  }
}

const page = async({params}) => {
    const user = await getUserDetail(params.id);

    if(!user.id) return notFound();
    
  return (
    <>
    <div>
    <h1 className='user-link'>{user.name}</h1>
    <h3 className='user-link-detail'>{user.email}</h3>
    </div>
<Suspense fallback={<div>Loading...</div>}>
<Posts id={params.id}/>
</Suspense>
    </>
  )
}

export default page
