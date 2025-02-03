import React from 'react'
import appwriteService from "../appwrite/conf"
import { Link } from 'react-router-dom'

function PostCard({$id, title, featuredImage}){
    return(
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-white rounded-xl hover:scale-105 duration-200 shadow p-2 border border-[#e5e5e5]'>
                <div className='justify-center mb-4'>
                    <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                    className='rounded-xl' />
                </div>
                <h2 className='text-xl font-bold text-[#14213d]'>{title}</h2>
            </div>
        </Link>
    )
}

export default PostCard