import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { API } from './global'
import { Button, TextField } from '@mui/material';

export function EditUsers() {
    const { userID } = useParams()
    const [ user, setUser ] = useState()

    useEffect(() => {
        fetch(`${API}/${userID}`, {
            method: "GET"
        })
            .then((res) => res.json())
            .then((usr) => setUser(usr))
    }, [])

    console.log(user)

    return (
        <div>
            <h1>EditUsers</h1>
            {user ? <EditUserForm user={user} /> : "Loading..."}
        </div>
    )
}

function EditUserForm({ user }) {
    const [name, setName] = useState(user.name)
    const [username, setUsername] = useState(user.username)
    const [email, setEmail] = useState(user.email)
    const [phone, setPhone] = useState(user.phone)
    const [website, setWebsite] = useState(user.website)
    const navigate = useNavigate()

    const handleEditUser = () => {
        const updatedUser = {
            name,
            username,
            email,
            phone,
            website,
        }
        // console.log(updatedUser)

        fetch(`${API}/${user.id}`, {
            method: "PUT",
            body: JSON.stringify(updatedUser),
            headers: { 'Content-Type': 'application/json'}
        })
        .then((res) => res.json())
        .then(()=> navigate("/users"))

        setName("")
        setUsername("")
        setEmail("")
        setPhone("")
        setWebsite("")
    }

    return (
        <div className="edit-users">
            <TextField id="name" label="Name" variant="outlined" value={name}
            onChange={(e) => setName(e.target.value)} />
            <TextField id="username" label="UserName" variant="outlined" value={username}
            onChange={(e) => setUsername(e.target.value)} />
            <TextField id="email" label="Email" variant="outlined" value={email}
            onChange={(e) => setEmail(e.target.value)} />
            <TextField id="phone" label="Phone" variant="outlined" value={phone}
            onChange={(e) => setPhone(e.target.value)} />
            <TextField id="website" label="Website" variant="outlined" value={website}
            onChange={(e) => setWebsite(e.target.value)} />
            <Button variant="contained" color="success" onClick={handleEditUser}>SAVE</Button>
        </div>
    )
}


{/* <input type="text" value={name} 
onChange={(e) => setName(e.target.value)} />
<input type="text" value={username} 
onChange={(e) => setUsername(e.target.value)} />
<input type="text" value={email} 
onChange={(e) => setEmail(e.target.value)} />
<input type="text" value={phone} 
onChange={(e) => setPhone(e.target.value)} />
<input type="text" value={website} 
onChange={(e) => setWebsite(e.target.value)} />
<Button variant="contained" color="success" onClick={handleEditUser}>SAVE</Button> */}