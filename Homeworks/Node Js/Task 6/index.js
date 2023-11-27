import express from "express"
import {config} from "dotenv"
import  sqlite3  from "sqlite3"
import { nanoid } from 'nanoid'
config()

// {
//     id,
//     name,
//     price,
//     quantity,
// }

// get  / - Get All (Only show products which quantity more than zero)
// post / - Add Product
// put  /edit - Edit product infos
// delete / - Delete product

const PORT = process.env.PORT
const db = new sqlite3.Database('products.db');

db.run("CREATE TABLE IF NOT EXISTS products (id TEXT PRIMARY KEY,name TEXT, price REAL, quantity INTEGER)")

const server = express()
server.use(express.json())

// Return All products
server.get("/history", (request, response) => {
    db.all("SELECT * FROM products",(err,rows)=>{
        response.status(200).json(rows)
    });
})

// Return only quantity > 0
server.get("/", (request, response) => {
    db.all("SELECT * FROM products where quantity > 0",(err,rows)=>{
        response.status(200).json(rows)
    });
})

// Add product
server.post("/",(request,response)=>{
    const product = request.body;


    // Check Product is exist
    db.get("select * from products where name = $name",{$name:product.name},(err,row)=>{
        if(row){
            response.status(409).send(`${product.name} already exist`);
            return;
        }

        // Add product
        db.run("INSERT INTO products(id,name,price,quantity) VALUES($id, $name, $price, $quantity)",{
            $id:nanoid(),
            $name:product.name,
            $price:product.price,
            $quantity:product.quantity
        },(err) => {
            if (err) {
              err.message;
              response.status(400).send(err.message);
            }else{
                response.status(200).send(`${product.name} succesfully added`);
            }
          })
    });
    
   
})

// Edit product
server.put("/:id",(request,response)=>{
    const id = request.params.id;
    const product = request.body;

    db.run("UPDATE products SET name = $name,price = $price,quantity = $quantity WHERE id = $id", {
        $id: id,
        $name: product.name,
        $price: product.price,
        $quantity:product.quantity
    },(err) => {
        if (err) {
          err.message;
          response.status(400).send(err.message);
        }else{
            response.status(200).send(`${product.name} succesfully updated`);
        }
      });
})

// Delete product
server.delete('/:id',(request,response)=>{
    const id = request.params.id;
    db.run("DELETE FROM products WHERE id = $id", {$id:id});
    response.status(200).send("deleted")
})

server.listen(PORT, () =>{
    console.log(`Server is running: http://localhost:${PORT}`)
}) 