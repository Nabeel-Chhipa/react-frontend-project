import React from 'react'
import UsersItem from './UsersItem'

const UsersList = props => {

  if(props.items.length === 0) {
    return (
      <p>No item found.</p>
    )
  }

  return (
    <ul className='users-list'>
      {props.items.map(user => (
        <UsersItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
  )
}

export default UsersList