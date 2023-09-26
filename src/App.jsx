import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const getAPi = () => {
    axios
      .get("/api/")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        console.log("done");
      });
  };
  return (
    <>
      <h1>{count}</h1>
      <div
        onClick={() => setCount(count + 1)}
        className="btn btn-secondary rounded-full"
      >
        getAPI
      </div>
    </>
  );
}

export default App;
