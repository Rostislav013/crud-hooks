/* Sample data
   Skeleton for a table*/

import React from 'react';



const UserTable = props => (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>                                                                     {/*props working same */}
            {props.users.length > 0 ? (props.users.map(user => (                    // mapping through users, of no users - display no users
                <tr key={user.id}>                                                  
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>
                        <button className="button muted-button" onClick = { ()=> {
                            props.editRow(user)
                        }}
                        >
                            Edit</button>
                        <button className="button muted-button" onClick = { () => props.deleteUser(user.id) }>Delete</button>
                    </td>
                </tr>
            ))
            ) : (
                <tr>
                    <td colSpan={3}>No users</td>
                </tr>
            )}
            
        </tbody>
    </table>
);


export default UserTable;