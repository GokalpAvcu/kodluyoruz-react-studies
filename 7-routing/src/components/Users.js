import {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import axios from "axios";


function Users() {
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([]);
 
  useEffect (() => {
   axios("https://jsonplaceholder.typicode.com/users")  // listeleme işlemi için burda fake bir api gösterip verileri aldık yukarıdaki user stateimize atıyoruz, map işlemini yapıyoruz
   .then (res => setUsers(res.data))
   .finally(() => setLoading(false));
  }, [])

  return (
    <div>
      <h1>Users</h1>
      {loading && <div>Loading... </div>}
      <ul>
        {
        users.map((user) => (
          <li key={user.id}> 
            <NavLink activeClassName="active" to={`${url}/${user.id}`}>{user.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Users