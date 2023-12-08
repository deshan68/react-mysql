import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        setBooks(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/books/${id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="App">
      <h1>E Book Store</h1>
      <div className="books">
        {books.map((book) => (
          <div className="book">
            {book.cover && <img src={book.cover} alt="" />}
            <h2>{book.title}</h2>
            <p>{book.description}</p>
            <span>Rs: {book.price}</span>
            <button className="delete" onClick={() => handleDelete(book.id)}>
              Delete
            </button>
            <Link to={`/update/${book.id}`}>
              <button className="update">Update</button>
            </Link>
          </div>
        ))}
      </div>
      <Link to={"/add"}>
        <button>Add</button>
      </Link>
    </div>
  );
};

export default Books;
