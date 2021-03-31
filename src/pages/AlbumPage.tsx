import React, { useEffect, useContext } from 'react'
import { RouteComponentProps } from 'react-router-dom'

import Loader from '../components/Loader'
import AlbumCard from '../components/Album'
import Back from '../components/Back'

import { AppContext } from '../store'

interface RouteParams {
  id: string
}

interface IAlbumPage extends RouteComponentProps<RouteParams> {}

const AlbumPage: React.FC<IAlbumPage> = ({ match }) => {
  const { fetchAlbums, albums, loader } = useContext(AppContext)

  useEffect(() => {
    fetchAlbums(match.params.id)
  }, [])

  if (loader) {
    return <Loader />
  }

  return (
    <div className="container">
      <Back path={'/'} />
      <h2>Albums page</h2>
      <div className="albums">
        {albums.length ? (
          albums.map((a) => <AlbumCard key={a.id} {...a} />)
        ) : (
          <Loader />
        )}
      </div>
    </div>
  )
}

export default AlbumPage
