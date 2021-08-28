import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <Link to='/'>
        <div className="logo"></div>
      </Link>
      <div className="upload-container">
        <div className="section">
          <Link to='/upload'>
            <div className="upload" />
          </Link>
          <img className="personal" alt="user avatar" src="https://avatars.githubusercontent.com/u/66082052?v=4" />
        </div>
      </div>
    </div>
  )  
}
  
export default Header
