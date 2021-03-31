import React from 'react'
import { Link } from 'react-router-dom'

import './index.scss'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/">Home</Link>
      </div>
    </header>
  )
}

export default Header
