import React, {useCallback, useEffect, useState} from 'react'
import { useForm } from 'react-hook-form'
import {Button, Input, Select, RTE} from '../index'
import appwriteService from "../../appwrite/conf"
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


function PostForm({post}){
    const {register, handleSubmit, watch, setValue, control, getValues} = useForm({
        defaultValues: {
            title: post?.title || '',
            slug: post?.slug || '',
            content: post?.content || '',
            status: post?.status || 'active'
        },
    })

    const navigate = useNavigate()
    const userData = useSelector(state => state.auth.userData)
    const [loading, setLoading] = useState(false)
    

    const submit = async(data) => {
        if(post){
            setLoading(true)
            const file = data.image[0] ? appwriteService.uploadFile(data.image[0]) : null 

            if(file){
                appwriteService.deleteFile(post.featuredImage)
            }
            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : post.featuredImage
            })
            setLoading(false)
            if(dbPost){
                navigate(`/post/${dbPost.$id}`)
            }
        }else {
            setLoading(true)            
            const file = await appwriteService.uploadFile(data.image[0]);

            const userId = userData.$id;

            if (!userId) {
                console.error("User ID is missing");
                return;
            }

            if(file){
                const fileId = file.$id
                data.featuredImage = fileId
                console.log("File Id set");
                
                const dbPost = await appwriteService.createPost({
                    ...data,
                    userId: userId
                })
                console.log("Post created");
                setLoading(true)
                if(dbPost){
                    navigate(`/post/${dbPost.$id}`)
                }
            }
            
        }
    }

    const slugTransform = useCallback((value) => {
        if(value && typeof value === 'string'){
            return value
            .trim()
            .toLocaleLowerCase()
            .replace(/\s+/g, '-') 
            .replace(/[^\w\-]+/g, '');
        }

        return ''

    }, [])

    useEffect(() => {
        if (post && !getValues('slug')) {
            setValue('slug', slugTransform(post.title || ''), { shouldValidate: true });
        }

        const subscription = watch((value, { name }) => {
            if (name === 'title' && value.title) {
                setValue('slug', slugTransform(value.title), { shouldValidate: true });
            }
        });
    
        return () => {
            subscription.unsubscribe();
        };
    }, [post, watch, slugTransform, setValue, getValues]);
    

    
    return (
        <form onSubmit={handleSubmit(submit)} className=" flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { 
                            shouldValidate: true 
                        });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {loading ? "Loading..." : (post ? "Update" : "Submit")}
                </Button>
            </div>
        </form>
    );
}

export default PostForm