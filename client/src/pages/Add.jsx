import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    description: "",
    price: null,
    cover: "",
  });
  const handleOnchange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8800/books", book);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="form App">
      <h1>Add New Book</h1>
      <input
        type="text"
        placeholder="Title"
        onChange={handleOnchange}
        name="title"
      />
      <input
        type="description"
        placeholder="Description"
        onChange={handleOnchange}
        name="description"
      />
      <input
        type="number"
        placeholder="Price"
        onChange={handleOnchange}
        name="price"
      />
      <input
        type="text"
        placeholder="Cover"
        onChange={handleOnchange}
        name="cover"
      />
      <button onClick={handleClick}>Submit Book</button>
    </div>
  );
};

export default Add;
