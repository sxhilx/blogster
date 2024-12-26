import React, {useState, useEffect} from 'react'
import appwriteService from "../appwrite/conf"
import { Container, PostCard } from '../components'

function AllPost(){
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if(posts){
                setPosts(posts.documents)
            }
        })
    }, [])
    
    return(
        <div className='py-8 w-full'>
            <Container>
                <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard
                            $id={post.$id}  // Pass the $id prop
                            title={post.title}  // Pass the title prop
                            featuredImage={post.featuredImage}  // Pass the featuredImage prop
                        />
                    </div>
                ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPost