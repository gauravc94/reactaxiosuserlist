// import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { API } from './global'
import axios from 'axios'

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
            <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="UserName" onChange={(e) => setUsername(e.target.value)} />
            <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder="Phone" onChange={(e) => setPhone(e.target.value)} />
            <input type="text" placeholder="Website" onChange={(e) => setWebsite(e.target.value)} />
            <button onClick={handleAddUser}>Add User</button>
        </div>
    )
}
