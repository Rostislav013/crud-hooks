import React, { useState } from 'react';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';

// functional component App instead of class
const App = () => {
                                                                      //random data to be display by default
  const usersData = [
    {id: 1, name: 'Karkusha', username: 'Kar99'}, 
    {id: 2, name: 'Stepasha', username: 'Stepaha_ushastii'},
    {id: 3, name: 'Hrysha', username: 'Hry77'}
  ];                                                                  // write me on slack if u know who are they s1900169@edu.bc.fi
  
  const addUser = user => {
    user.id = users.length + 1                                        // +1 cuz in array indexing starts from 0
    setUsers([...users, user])                                        //...Spread opertor. ...users code ensures that all the previous users remain in the array
  };
 

  const [users, setUsers] = useState(usersData);                      // Returns a stateful value(users), and a function(setUsers) to update it. Start point usersData
  const [editing, setEditing] = useState(false);                      // edit mode is false by default
  const initialFormState = { id: null, name: '', username: ''};       //empty state for the form (in edit mode)
  const [currentUser, setCurrentUser] = useState(initialFormState);   // to see the current updating user

  const editRow = user => {                                           // when a user selected, we see his date to edit except id
    setEditing(true)                                                  // turn or edit mode
    setCurrentUser({id: user.id, name: user.name, username:user.username})
  };

  const updateUser = (id, updateUser) => {
    setEditing(false)

    setUsers(users.map(user => (user.id === id ? updateUser : user)))
  }


  const deleteUser = id => {                                          // a function take id of the user n filter out the record from user array
    setEditing(false)                                                 // to get off from edit mode (edit form hides)
    setUsers(users.filter(user => user.id !== id)) 
  };


  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
                />
              </div>
            ) : ( <div>
                    <h2>Add user</h2>
                    <AddUserForm addUser={addUser} />                           {/*Passing addUser() to component AddUserForm */}
                  </div>
                )}
        </div>
        <div className="flex-large">
          <h2>Vuew users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />                                   {/* we pass varibale users to component USerTable*/}
        </div>
       
      </div>
    </div>
  );
}




export default App;
