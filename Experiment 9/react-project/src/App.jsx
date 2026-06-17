import { useEffect, useState } from "react";

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setUsers(data));

  }, []);

  return (

    <div style={{ padding: "20px" }}>

      <h1>User List</h1>

      {users.map(user => (

        <div
          key={user.id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "10px"
          }}
        >
          <h3>{user.name}</h3>

          <p>{user.email}</p>

          <p>{user.company.name}</p>
        </div>

      ))}

    </div>
  );
}

export default App;