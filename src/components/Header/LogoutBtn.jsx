import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn(){
    const dispatch = useDispatch()

    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
    return (
        <div>
            <button className='inline-block px-3 md:px-6 py-2 text-[#ffffff] font-medium duration-200 hover:bg-[#fca311] hover:text-black rounded-full'
            onClick={logoutHandler}>
               Logout 
            </button>
        </div>
    )
    
}

export default LogoutBtn