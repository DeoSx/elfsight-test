import { ReactNode } from 'react'
export interface User {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

export interface Album {
  userId: number
  id: number
  title: string
}

export interface Photo {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

export interface AppState {
  users: User[]
  albums: Album[]
  photos: Photos[]
  error: string
  loader: boolean
  modal: boolean
  setModalState: (boolean) => void
  fetchUsers: () => void
  fetchAlbums: (id: string) => void
  fetchPhotos: (id: string) => void
}

export interface Children {
  children: ReactNode
}
