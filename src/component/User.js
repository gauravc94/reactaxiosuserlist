import React from 'react'

export function User({ user, id, deleteButton, editButton }) {
    return (
        <div className="user-container">
            <h2>{id}</h2>
            <h3>Name : {user.name}</h3>
            <p>UserName : {user.username}</p>
            <p>Email : {user.email}</p>
            <p>Phone : {user.phone}</p>
            <p>Website : {user.website}</p>
            {editButton}
            {deleteButton}
        </div>
    )
}