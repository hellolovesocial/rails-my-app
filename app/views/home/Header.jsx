import React, { Component } from 'react'
import './App.css'

const Header = () => (
  <header className="App-header">
    <nav className="nav">
      <ul>
        <li>about</li>
        <li>home</li>
        <li>new post</li>
        <li>contact</li>
      </ul>
    </nav>
    <img
    src="./flower.jpg" 
    alt="FlowerLogo"
    className="App-headerImage"
     />
  </header>
 )

 export default Header