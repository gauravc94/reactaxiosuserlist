import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { API } from './global'
import axios from 'axios'
import { Button, TextField } from '@mui/material';


export function AddUsers() {

    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [website, setWebsite] = useState("")

    const navigate = useNavigate()

    const handleAddUser = () => {
        const newUser = {
            name,
            username,
            email,
            phone,
            website,
        }

        // console.log(newUser)

        axios.post(API, newUser, {
            headers: { 'Content-Type': 'application/json'}
        })
        .then(()=> navigate("/users"))
        .catch((err) => console.error("Error adding user:", err))

    }

    return (
        <div className="add-users">
            <h1>Add User</h1>
            <TextField label="Name" variant="outlined" 
            onChange={(e) => setName(e.target.value)}></TextField>
            <TextField label="UserName" variant="outlined" 
            onChange={(e) => setUsername(e.target.value)}></TextField>
            <TextField label="Email" variant="outlined" 
            onChange={(e) => setEmail(e.target.value)}></TextField>
            <TextField label="Phone" variant="outlined" 
            onChange={(e) => setPhone(e.target.value)}></TextField>
            <TextField label="Website" variant="outlined" 
            onChange={(e) => setWebsite(e.target.value)}></TextField>
            <Button variant="contained" onClick={handleAddUser}>Add User</Button>
        </div>
    )
}

