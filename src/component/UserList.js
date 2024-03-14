import React, { useEffect, useState } from 'react'
import { API } from './global'
import { User } from './User'
import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export function UserList() {
    const [userList, setUserList] = useState([])
    const navigate = useNavigate()

    const getUsers = () => {
        axios.get(API)
            .then((res) => setUserList(res.data))
            .catch((err) => console.error("error fetching userList", err))
    }

    useEffect(() => getUsers(), [])

    const deleteUser = (id) => {
        axios.delete(`${API}/${id}`)
            .then(() => getUsers())
            .catch((err) => console.error("error deleting user", err))
    }

    return (
        <div className="user-list">
            {userList.map((us) => <User key={us.id} user={us} id={us.id} 
            deleteButton={ 
                <IconButton aria-label="deleteBtn" color="error" 
                    onClick={()=> deleteUser(us.id)}>
                    <DeleteIcon />
                </IconButton>} 
                
            editButton={ 
                <IconButton aria-label="editBtn" color="primary" 
                    onClick={()=> navigate(`/users/edit/${us.id}`)}>
                    <EditIcon />
                </IconButton>} />)}
        </div>
    )
}
