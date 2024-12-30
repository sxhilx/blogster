import config from '../config/config';
import { Client, Account, ID } from 'appwrite'

export class AuthService {
    client = new Client()
    account;

    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId)

        this.account = new Account(this.client)
    }

    async login(data){
        const {email, password} = data
        console.log("login with", {email, password});
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            console.log("Cannot login", error);
            
            throw error
        }
    }

    async createAccount(data){
        const {email, password, name} = data
        console.log('Creating account with:', { email, password, name });
        const userId = ID.unique().substring(0, 36);
        try {
            const userAccount = await this.account.create(userId, email, password, name);
            if (userAccount) {
                // call another method (login)
                return this.login({email, password})
            } else {
                throw new Error('Account creation failed');
            }
        } catch (error) {
            console.error('Error creating account:', error);
            throw error;
        }
    }
    

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout(){
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthService()

export default authService

