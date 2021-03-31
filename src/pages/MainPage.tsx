import React, { useEffect, useContext } from 'react'

import { AppContext } from '../store'

import User from '../components/User'
import Loader from '../components/Loader'

const MainPage: React.FC = () => {
  const { fetchUsers, users, loader } = useContext(AppContext)

  useEffect(() => {
    fetchUsers()
  }, [])

  if (loader) {
    return <Loader />
  }

  return (
    <div className="container main-page">
      <h2>Authors</h2>
      <div className="users">
        {users.length && users.map((user) => <User key={user.id} {...user} />)}
      </div>
    </div>
  )
}

export default MainPage
