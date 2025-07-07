import React from 'react'

function UserList() {
  const users = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com" },
  { id: 2, name: "Bob Smith", email: "bob@example.com" },
  { id: 3, name: "Charlie Brown", email: "charlie@example.com" },
];
  return (
    <div><h1>User List</h1>
    <ul>
      {
        users.map(({id,name,email})=>(//Applying destructuring to extract id, name, and email from each user object
          <li key={id}>
            <strong>{name}</strong>-Email:{email} (ID:{id})
          </li>
        ))
      }
    </ul>
    
    </div>
  )
}

export default UserList