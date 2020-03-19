import React from 'react';
import Nav from './../Nav'
import './style.css'

function Header() {

    return (
        <div className='main-header'>
            <div className='logo'>
                <h2>VLS</h2>
                {/* Insert Logo here */}
            <Nav />
            </div>
        </div>
    )
}

export default Header;