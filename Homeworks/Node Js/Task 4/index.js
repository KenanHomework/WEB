import sqlite3 from "sqlite3";
import http from "node:http";
import { log } from "node:console";

let port = 3000;

let arr = [];
// DB connections
var db = new sqlite3.Database("users_db.db");

// Create table
db.run(
  "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT, age INTEGER)"
);
const server = http.createServer((req, res) => {
  var db = new sqlite3.Database("users_db.db");
  if (req.method == "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");

    db.all("SELECT * FROM users", function (err, rows) {
      let users = [];
      rows.forEach(function (row) {
        users.push({ id: row.id, name: row.name, age: row.age });
      });
      res.write(JSON.stringify(users));
      res.end();
    });
  } else if (req.method == "POST") {
    req.setEncoding("utf-8");
    let err_msg = "";
    req.on("data", (data) => {
      const user = JSON.parse(data);
      console.log(user);
      db.run(
        "INSERT INTO users(name, age) VALUES(?, ?)",
        [user.name, user.age],
        (err) => {
          if (err) {
            err_msg = err.message;
            return console.log(err.message);
          }
          console.log("Row was added to the table: ${this.lastID}");
        }
      );
    });
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.write(err_msg ? err_msg : "Successfully added new user");
    res.end();
  } else if (req.method == "DELETE") {
    req.setEncoding("utf-8");
    let err_msg = "";
    req.on("data", (id) => {
      db.run("DELETE FROM users WHERE id=(?)", id);
    });
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.write(err_msg ? err_msg : "Successfully deleted user");
    res.end();
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");
    res.write(req.method);
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

server.on("connection", (event) => {
  console.log("server started");
});
