export const UserInfo=()=>{
  const users = [
  {
    id: 1,
    firstName: "Alice",
    lastName: "Johnson",
    email: "alice.johnson@example.com",
    isActive: true,
  },
  {
    id: 2,
    firstName: "Bob",
    lastName: "Smith",
    email: "bob.smith@example.com",
    isActive: false,
  },
  {
    id: 3,
    firstName: "Charlie",
    lastName: "Brown",
    email: "charlie.brown@example.com",
    isActive: true,
  },
  {
    id: 4,
    firstName: "Dana",
    lastName: "White",
    email: "dana.white@example.com",
    isActive: true,
  },
  {
    id: 5,
    firstName: "Evan",
    lastName: "Lee",
    email: "evan.lee@example.com",
    isActive: false,
  },
  {
    id: 6,
    firstName: "Fiona",
    lastName: "Garcia",
    email: "fiona.garcia@example.com",
    isActive: true,
  },
  {
    id: 7,
    firstName: "George",
    lastName: "Martinez",
    email: "george.martinez@example.com",
    isActive: false,
  },
  {
    id: 8,
    firstName: "Hannah",
    lastName: "Kim",
    email: "hannah.kim@example.com",
    isActive: true,
  },
  {
    id: 9,
    firstName: "Isaac",
    lastName: "Nguyen",
    email: "isaac.nguyen@example.com",
    isActive: true,
  },
  {
    id: 10,
    firstName: "Julia",
    lastName: "Williams",
    email: "julia.williams@example.com",
    isActive: false,
  },
];
return(
  <main>
    <h1>User Information</h1>
    <ul>
      {
        users.map((user)=>(
          <li key={user.id}>
            <strong>{user.firstName} {user.lastName}</strong><br/>
            Email: {user.email}<br/>
            Status: {user.isActive ? "Active" : "Inactive"}
          </li>
        ))
      }
    </ul>
  </main>
);
}