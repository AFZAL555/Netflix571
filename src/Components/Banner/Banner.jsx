import React from 'react'
import './Banner.css'

export default function Banner() {
    return (
        <div className='banner'>
            <div className="content">
                <h1 className='tittle'>Movie Name</h1>
                <div className="banner_button">
                    <button className='btn'>Play</button>
                    <button className='btn'>My list</button>
                </div>
                <h2 className='description'>Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description</h2>

            </div>
            <div className="fade-bottom"></div>

        </div>
    )
}
