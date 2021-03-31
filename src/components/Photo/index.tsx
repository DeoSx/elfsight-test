import React, { useState } from 'react'

import './index.scss'

import { Photo as PhotoPropTypes } from '../../global'

interface PhotoComponent extends PhotoPropTypes {
  clickHandler: (id: number) => void
}

const Photo: React.FC<PhotoComponent> = (props) => {
  const [loading, setLoading] = useState<boolean>(true)

  const handleLoading = () => {
    setLoading(false)
  }

  return (
    <div className="photo" onClick={() => props.clickHandler(props.id)}>
      <div className="photo__img">
        {loading && <i className="fas fa-image"></i>}
        <img onLoad={handleLoading} src={props.thumbnailUrl} alt="" />
      </div>
      <p className="photo__title">{props.title}</p>
    </div>
  )
}

export default Photo
