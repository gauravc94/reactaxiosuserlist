import React, { useEffect, useState } from 'react'
import { API } from './global'
import { User } from './User'
import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

export function UserList() {
    const [userList, setUserList] = useState([])
    const navigate = useNavigate()

    const getUsers = () => {
        fetch(`${API}`, {
            method: "GET"
        })
            .then((res) => res.json())
            .then((data) => setUserList(data))
            .catch((err) => console.error("error fetching userList", err))
    }

    useEffect(() => getUsers(), [])

    return (
        <div className="user-list">
            {userList.map((us) => <User key={us.id} user={us} id={us.id} 
            deleteButton={ 
                <IconButton aria-label="deleteBtn" color="error" 
                    onClick={()=> { 
                        fetch(`${API}/${us.id}`, {
                            method: "DELETE"
                          })
                          .then(()=> getUsers())
                        }}>
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