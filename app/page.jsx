import { getAllUsers } from '@/utils/features'
import Link from 'next/link'
import React from 'react'

export const metadata = {
  title : "Users"
}

const page = async() => {

  const users = await getAllUsers()
 
  return (
    <div className='user-list'>
 {
  users?.map(i=>(
    <Link key={i.id} href={`/user/${i.id}`} className='user-link'>{i.name}</Link>
  ))
 }
    </div>
  )
}

export default page
