import { useEffect, useState } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    fetch(`https://dummyjson.com/users`)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="App">
      <tbody>
        <tr>
          <th>Sno</th>
          <th>Profile</th>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Gender</th>
          <th>Email</th>
          <th>Username</th>
          <th>Domain</th>
          <th>IP</th>
          <th>University</th>
        </tr>
      </tbody>
      </div>
  );
}

export default App;