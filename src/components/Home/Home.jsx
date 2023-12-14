import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <div className='homepage'>
            <div className='home-title'>
                <p>You got the travel plans, we got the travel vans.</p>
            </div>
            <div className='home-description'>
                <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            </div>
            <button className='find-your-van-button'>Find your van</button>
        </div>
    );
}

export default Home