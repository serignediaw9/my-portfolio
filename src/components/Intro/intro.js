import React from 'react';
import './intro.css';
import profile from '../../assets/profile.png'

const Intro = () => {
    return (
        <section id='intro'>
            <div className='introContent'>
                <span className='hello'>Hello! </span>
                <span className='introText'>I am Serigne</span>
                <img src={profile} alt="Profile" className='bg' /> <br />
                <p className='introPara'>I am an aspiring data scientist with a breadth of knowledge spanning neuroscience, computer science and statistical analysis.</p>
            </div>
        </section>
    )
}

export default Intro