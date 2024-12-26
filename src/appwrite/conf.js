import config from '../config/config'
import { Client, Databases, Storage, Query, ID } from 'appwrite'

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
                    .setProject(config.appwriteProjectId)
                    .setEndpoint(config.appwriteUrl);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client)
    }

    async createPost({title, slug, content, feauteredImage, status,userId}){
        try {
            return await this.databases.createDocument(
                config.appwriteDbId,
                config.appwriteCollectionId,
                slug,
                {
                   title,
                   content,
                   feauteredImage,
                   status,
                   userId 
                }
            )
        } catch (error) {
            throw error;
        }
    }

    async updatePost(slug,{title, content, feauteredImage, status}){
        try {
            return await this.databases.updateDocument(
                config.appwriteDbId,
                config.appwriteCollectionId,
                slug,
                {
                   title,
                   content,
                   feauteredImage,
                   status,
                }
            )
        } catch (error) {
            throw error;
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                config.appwriteDbId,
                config.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            throw error;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                config.appwriteDbId,
                config.appwriteCollectionId,
                slug
            )
        } catch (error) {
            throw error
        }
    }

    async getPosts(queries = [Query.equal('status', ['active'])]){
        try {
            return await this.databases.getDocument(
                config.appwriteDbId,
                config.appwriteCollectionId,
                queries
            )
        } catch (error) {
            throw error;
        }
    }

    // File upload services

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            throw error;
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            config.appwriteBucketId,
            fileId
        )
    }
}

const service = new Service()

export default service