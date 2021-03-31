import React, { SyntheticEvent, useContext, useEffect, useState } from 'react'
import { Photo } from '../../global'
import { AppContext } from '../../store'

import './index.scss'

interface IModal {
  photoId: number
}

const Modal: React.FC<IModal> = ({ photoId }) => {
  const { setModalState, photos } = useContext(AppContext)

  const [idx, setIdx] = useState<number>(
    photos.findIndex((p) => p.id === photoId)
  )

  const navigationHandler = (direction: string) => {
    const length = photos.length - 1

    if (direction === 'next') {
      if (idx < length) {
        setIdx(idx + 1)
      }
    } else {
      if (idx !== 0) {
        setIdx(idx - 1)
      }
    }
  }

  return (
    <div className="overlay" onClick={() => setModalState(false)}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal__content">
          <img src={photos[idx].thumbnailUrl} alt="" />
          <p>{photos[idx].title}</p>
        </div>
        <div className="modal__actions">
          <i
            className="fas fa-arrow-left"
            onClick={() => navigationHandler('prev')}
          ></i>
          <i
            className="fas fa-arrow-right"
            onClick={() => navigationHandler('next')}
          ></i>
        </div>
      </div>
    </div>
  )
}

export default Modal
