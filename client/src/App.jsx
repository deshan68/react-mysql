import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Books from "../src/pages/Books";
import Add from "../src/pages/Add";
import Update from "../src/pages/Update";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/add" element={<Add />} />
      <Route path="/update/:id" element={<Update />} />
    </Routes>
  );
}

export default App;
