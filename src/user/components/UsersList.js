import React from 'react'
import Card from '../../shared/components/UIElements/Card'
import UsersItem from './UsersItem'
import './UsersList.css'

const UsersList = props => {

  if(props.items.length === 0) {
    return (
      <Card >
        <p>No item found.</p>
      </Card>
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