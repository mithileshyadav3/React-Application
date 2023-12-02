import React from 'react';
import  Styles from'./NavBar.module.css';
const NavBar = () => {
  return (
    <nav className={`${Styles.navbar} container`}>
        <div className='logo'>
        <img src="images/logo.png" alt=""/>
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        

        
    </nav>
  )
}

export default NavBar