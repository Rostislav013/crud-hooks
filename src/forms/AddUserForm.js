import React, { useState } from 'react';


const AddUserForm = props => {
    const initialFormState = {id: null, name: '', username:''}; //initial states for form
    const [user, setUser] = useState(initialFormState);

    // function to update the state within the form
    const handleInputChange = event => {
        const {name, value} = event.target;
        setUser({...user, [name]: value});
        
    }
    
    return (
        <form
            onSubmit={event => {
                event.preventDefault()
                if(!user.name || !user.username) return 
                    props.addUser(user)
                    setUser(initialFormState)
            }}
        >
            <label>Name</label>
            <input type = "text" name = "name" value = {user.name} onChange={handleInputChange} />
            <label>Username</label>
            <input type="text" name="username" value = {user.username} onChange={handleInputChange} />
            <button>Add</button>
        </form>
    );
};

export default AddUserForm;