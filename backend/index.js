import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test2",
});

//it allows to any json files to backend
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("this is backend");
});

app.get("/books", (req, res) => {
  const q = "SELECT * FROM books2";
  db.query(q, (err, data) => {
    if (err) return res.json;
    return res.json(data);
  });
});

app.post("/books", (req, res) => {
  const q =
    "INSERT INTO books2 (`title`, `description`, `price`, `cover`) VALUES (?)";
  const values = [
    req.body.title,
    req.body.description,
    req.body.price,
    req.body.cover,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Books added successfully");
  });
});

app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q = "DELETE FROM books2 WHERE id = ?";

  db.query(q, [bookId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Deleted successfully");
  });
});

app.put("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q =
    "UPDATE books2 SET `title` = ?, `description` = ?, `price` = ?, `cover` = ? WHERE id = ?";

  const values = [
    req.body.title,
    req.body.description,
    req.body.price,
    req.body.cover,
  ];

  db.query(q, [...values, bookId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book has been updated successfully");
  });
});

app.listen(8800, () => {
  console.log("connected to backend restarting");
});
