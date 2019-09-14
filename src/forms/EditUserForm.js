/*same as the add form. but we'll set the state directly from currentUser via props. */


import React, { useState, useEffect } from 'react';

const EditUserForm = props => {
  const [user, setUser] = useState(props.currentUser)

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  useEffect(() => {                     //useEffect is similar to (componentDidMount, componentDidUpdate). Used to let the EditUserForm component know the props have changed
    setUser(props.currentUser)          //  create a callback function that updates the user state with the new prop thats being sent through
  }, [props])                           // [props] array is similar to using componentDidUpdate

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <label>Name</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      <label>Username</label>
      <input type="text" name="username" value={user.username} onChange={handleInputChange} />
      <button>Update user</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm