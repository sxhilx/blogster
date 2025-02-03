import React, {useState, useEffect} from 'react'
import appwriteService from "../appwrite/conf"
import { Container, PostCard } from '../components'
import { useSelector } from 'react-redux'

function YourPost(){
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const userData = useSelector((state) => state.auth.userData);

    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true)
            const response = await appwriteService.getPosts([]);
            if (response) {
                setPosts(response.documents);
            }
            setIsLoading(false)
        };

        fetchPosts();
    }, []);

    const userPosts = posts.filter(post => post.userId === userData.$id);
    
    return(
        <div className='py-8 w-full'>
            <Container>
            <div className="md:grid grid-cols-1 md:grid-cols-3 gap-4">
                    {isLoading ? (
                        <div className="w-full text-center py-8">
                            <h1 className="text-2xl font-bold">Loading...</h1>
                        </div>
                    ) : userPosts.length === 0 ? (
                        <div className="w-full text-center py-8">
                            <h1 className="text-2xl font-bold">You have no posts</h1>
                        </div>
                    ) : (
                        userPosts.map((post) => (
                            <div key={post.$id} className="p-2">
                                <PostCard {...post} />
                            </div>
                        ))
                    )}
                </div>
            </Container>
        </div>
    )
}

export default YourPost