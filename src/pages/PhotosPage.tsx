import React, { useEffect, useContext, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { AppContext } from '../store'

import Loader from '../components/Loader'
import Photo from '../components/Photo'
import Modal from '../components/Modal'
import Back from '../components/Back'

interface RouteParams {
  id: string
}

interface IPhotosPage extends RouteComponentProps<RouteParams> {}

const PhotosPage: React.FC<IPhotosPage> = ({ match }) => {
  const [id, setId] = useState<number>(0)
  const [path, setPath] = useState<string>('/')

  const {
    fetchPhotos,
    photos,
    loader,
    modal,
    setModalState,
    albums,
  } = useContext(AppContext)

  useEffect(() => {
    fetchPhotos(match.params.id)
    if (albums.length) {
      const userId = albums[0].userId
      setPath(`/album/${userId}`)
    }
  }, [])

  const modalHandler = (id: number) => {
    setId(id)
    setModalState(true)
  }

  if (loader) {
    return <Loader />
  }

  return (
    <div className="container">
      <Back path={path} />
      <h2>Photos page</h2>
      <div className="photos">
        {photos.length &&
          photos.map((photo) => (
            <Photo key={photo.id} {...photo} clickHandler={modalHandler} />
          ))}
      </div>
      {modal && <Modal photoId={id} />}
    </div>
  )
}

export default PhotosPage
