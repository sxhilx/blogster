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
            path: "/singup",
            active: !authStatus
        },
        {
            name: 'All Post',
            path: "/allpost",
            active: authStatus
        },
        {
            name: 'Add Post',
            path: "/addpost",
            active: authStatus
        }
    ]

    return(
        <header className='py-3 shadow bg-gray-500'>
            <Container>
                <nav className='flex'>
                    <div className='mr-4'>
                        <Link to='/'>
                            <Logo width='70px'/>
                        </Link>
                    </div>
                    <ul className='flex ml-auto'>
                        {navItems.map((item) => 
                            item.active ? (
                                <li key={item.name}>
                                    <button
                                    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
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