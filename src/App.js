import React, {useState, useEffect} from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/api/generateReport").then(
      response => response.json()
    ).then(
      data => {
        setData(data)
        console.log("DATA", data)
      }
    )
  }, []);

  return (
    <div>
      <ul>
        {data.map((d) => (
          <li>{d.title}</li>
        ))}
        </ul>
    </div>
  );
}

export default App;
