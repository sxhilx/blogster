import React from 'react'
import {Container, Logo, LogoutBtn} from "../index"
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Header = () => {

    const authStatus = useSelector((state) => state.auth.status)

    const navigate = useNavigate()

    const navItems = [
        {
            name: 'Home',
            path: "/",
            active: true
        },
        {
            name: 'Login',
            path: "/login",
            active: !authStatus
        },
        {
            name: 'Singup',
            path: "/signup",
            active: !authStatus
        },
        {
            name: 'Your Post',
            path: "/your-post",
            active: authStatus
        },
        {
            name: 'Add Post',
            path: '/add-post',
            active: authStatus
        }
    ]

    return(
        <header className='py-2 shadow bg-[#14213d] text-[#ffffff] font-medium'>
            <Container>
                <nav className='flex'>
                    <div className='ml-1 md:ml-10'>
                        <Link to='/'>
                            <Logo width='65px'/>
                        </Link>
                    </div>
                    <ul className='flex ml-auto mt-2'>
                        {navItems.map((item) => 
                            item.active ? (
                                <li key={item.name}>
                                    <button
                                    className='inline-block px-3 md:px-6 py-2 duration-200 hover:bg-[#fca311] hover:text-black rounded-full'
                                    onClick={() => navigate(item.path)}
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            ) : null
                        )}
                        {authStatus && (
                            <li>
                                <LogoutBtn/>
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    )
}

export default Header