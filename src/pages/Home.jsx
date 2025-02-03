import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/conf"
import { Container, PostCard } from '../components'
import { useSelector } from 'react-redux'

function Home(){
    const userData = useSelector((state) => state.auth.userData);
    
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true)
            await appwriteService.getPosts().then((posts) => {
                if(posts){
                    setPosts(posts.documents)
                }
            })
            setIsLoading(false)
        }
        fetchPosts()
    }, [])


    return userData ? (

        <div className='w-full py-8'>
            <Container>
                <div className='md:grid grid-cols-1 md:grid-cols-3 gap-4'>
                    {isLoading ? (
                        <div className="w-full text-center py-8">
                            <h1 className="text-2xl font-bold">Loading...</h1>
                        </div>
                    ) : posts.length > 0 ? (
                        posts.map((post) => (
                            <div className='p-2' key={post.$id}>
                            <PostCard
                                $id={post.$id}
                                title={post.title}
                                featuredImage={post.featuredImage} 
                            />
                        </div>
                    ))
                    ) : (
                        <div className="w-full text-center py-8">
                            <h1 className="text-2xl font-bold">No Posts Available</h1>
                        </div>
                    )}
                </div>
            </Container>
        </div>
    ) : (
    <div className="w-full text-center py-20 md:py-auto">
        <h1 className="text-2xl font-bold">Login or Signup to read posts</h1>
    </div>
    )
}

export default Home