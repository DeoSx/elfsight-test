import React, { useState, createContext } from 'react'
import { Album, AppState, Photo, User, Children } from '../global'
import axios from '../services/axios'

const initialState: AppState = {
  users: [],
  albums: [],
  photos: [],
  error: '',
  loader: false,
  modal: false,
  fetchUsers: () => {},
  fetchAlbums: () => {},
  fetchPhotos: () => {},
  setModalState: () => {}
}

const AppContext = createContext<AppState>(initialState)

const AppContextProvider = ({ children }: Children) => {
  const [users, setUsers] = useState<User[]>([])
  const [albums, setAlbums] = useState<Album[]>([])
  const [photos, setPhotos] = useState<Photo[]>([])
  const [loader, setLoader] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const [modal, setModal] = useState<boolean>(false)

  const fetchUsers = async () => {
    try {
      setLoader(true)
      const res = await axios.get('/users')
      setUsers(res.data)
      setLoader(false)
    } catch (e) {
      setError(e.message)
      throw e
    }
  }

  const fetchAlbums = async (id: string) => {
    try {
      setLoader(true)
      const res = await axios.get(`/users/${id}/albums`)
      setAlbums(res.data)
      setLoader(false)
    } catch (e) {
      setError(e.message)
      throw e
    }
  }

  const fetchPhotos = async (id: string) => {
    try {
      setLoader(true)
      const res = await axios.get(`/albums/${id}/photos`)
      setPhotos(res.data)
      setLoader(false)
    } catch (e) {
      setError(e.message)
      throw e
    }
  }

  const setModalState = (state: boolean) => {
    setModal(state)
  }

  return (
    <AppContext.Provider
      value={{
        users,
        albums,
        photos,
        error,
        loader,
        modal,
        fetchUsers,
        fetchPhotos,
        fetchAlbums,
        setModalState,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppContextProvider }
