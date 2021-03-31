import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.scss'

import Header from './components/Header'
import MainPage from './pages/MainPage'
import AlbumPage from './pages/AlbumPage'
import PhotosPage from './pages/PhotosPage'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          <Route path="/" component={MainPage} exact />
          <Route path="/album/:id" component={AlbumPage} />
          <Route path="/photos/:id" component={PhotosPage} />
        </Switch>
      </main>
    </BrowserRouter>
  )
}

export default App
