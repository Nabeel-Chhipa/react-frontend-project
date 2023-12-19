import React from 'react'
import UsersList from '../components/UsersList'

const Users = () => {

  const USERS = [
    {
      id: 'u1',
      name: 'Nabeel',
      image: 'https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png',
      places: 3
    }
  ]

  return (
    <div>
      <UsersList items={USERS} />
    </div>
  )
}

export default Users