import React from 'react'
import logo from '../Photos/Logo.png'
import './Navigate.css'

function Navigate() {
    return (
        <nav className='swiggy-nav'>
            <div id='Nav-logo'>
                <img src={logo} alt='Swiggy' />
                <div className='nav-location'>
                    <p className='nav-location-copy'>
                        <span className='nav-location-label'>Kakkanad</span>
                        <span className='nav-location-address'>288R+8PX, Echamuku, Kakkanad...</span>
                    </p>
                    <i aria-hidden='true' className='fa-solid fa-angle-down' />
                </div>
            </div>
            <div id='Nav-icons'>
                <p><i className='fa-solid fa-magnifying-glass' /> Search</p>
                <p><i className='fa-solid fa-percent' /> Offers <sup>New</sup></p>
                <p><i className='fa-solid fa-bowl-food' /> Help</p>
                <p><i className='fa-regular fa-user' /> Profile</p>
                <p><i className='fa-solid fa-cart-shopping' /> Cart</p>
            </div>
        </nav>
    )
}

export default Navigate