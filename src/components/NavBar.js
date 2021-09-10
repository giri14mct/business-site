import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    const [iconClick, setIconClick] = useState(false)
    return (
        <>
            <header >
                <nav>
                    <div className='navbar-container'>
                        <Link to='/' className="navbar-logo" onClick={() => setIconClick(!iconClick)}>KALAN EXPORTS!  <i className='fab fa-typo3'></i> </Link>
                        <div className='menu-icon' onClick={() => setIconClick(!iconClick)}>
                            <i className={iconClick ? 'fas fa-times' : 'fas fa-bars'} />
                        </div>
                        <ul className={iconClick ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link to='/' className='nav-links' onClick={() => setIconClick(!iconClick)} >
                                    Home
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/About' className='nav-links' onClick={() => setIconClick(!iconClick)} >
                                    About Us
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/Products' className='nav-links' onClick={() => setIconClick(!iconClick)} >
                                    Products
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/Enquiry' className='nav-links' onClick={() => setIconClick(!iconClick)} >
                                    Enquiry
                                </Link>
                            </li>

                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default NavBar
