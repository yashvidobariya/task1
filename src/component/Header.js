import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <nav className="nav">

                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Addpost">Create Blog</Link></li>
                    <li><Link to="/bloglist">bloglist</Link></li>
                    {/* <li><Link to="/login">Login</Link></li> */}
                </ul>
            </nav >
        </div>
    )
}

export default Header
