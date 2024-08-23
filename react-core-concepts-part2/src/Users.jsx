import { useEffect, useState } from "react"

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])

  return (
    <div>
      <h3>Users {users.length}</h3>
    </div>
  )
}

/**
 * 1. Declare a state to store data
 * 2. useEfect with callback and dependency array
 * 3. Use fetch to load data
 */