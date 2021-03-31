import React from 'react'
import { Link } from 'react-router-dom'

import './index.scss'

interface BackProps {
  path: string
}

const Back: React.FC<BackProps> = (props) => {
  return (
    <Link to={props.path} className="back">
      <i className="fas fa-long-arrow-alt-left"></i> <p>Back</p>
    </Link>
  )
}

export default Back
