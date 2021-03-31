import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { Album as AlbumTypes } from '../../global'
import { AppContext } from '../../store'

import './index.scss'

const Album: React.FC<AlbumTypes> = (props) => {
  const { photos } = useContext(AppContext)

  return (
    <Link to={`/photos/${props.id}`} className="album">
      <div className="album__image">
        <i className="fas fa-images"></i>
      </div>
      <p className="album__title">
        {props.title} <br />
        <strong>({photos.length ? photos.length : 50} photos)</strong>
      </p>
    </Link>
  )
}

export default Album
