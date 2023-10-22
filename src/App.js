import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then((response) => response.json())
      .then((actualData) => console.log(actualData))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="App">
      <p>Hello, world!</p>
    </div>
  );
}

export default App;