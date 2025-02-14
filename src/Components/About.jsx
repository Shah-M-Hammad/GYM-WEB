import React from 'react'
import image from '../images/about.png'
function About() {
  return (
    <div id='about'>
      <div className='about-img'>
        <img src={image} alt="" />
      </div>
      <div className='about-text'>
        <h1>LEARN MORE ABOUT US</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, odit id. Sunt molestias omnis quaerat minima autem maiores vero totam incidunt labore quisquam veritatis, error vitae alias, mollitia expedita voluptates.</p>
        <button>LEARN MORE</button>
      </div>
    </div>
  )
}

export default About
