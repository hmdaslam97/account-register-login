import React from 'react'
import { Link } from 'react-router-dom' 

function Home() {
  return (
    <div>
      <div className="topnav">
        <a className="active" href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <div Name="sub">
                <Link to="/register" >Register</Link>
                <Link to="/signin">Sign</Link>
        </div>
    </div>
    <h1>Welcome to Home page</h1>
    </div>
  )
}

export default Home
