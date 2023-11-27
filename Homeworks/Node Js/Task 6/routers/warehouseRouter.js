import express from "express";
import { nanoid } from "nanoid";

export const warehouseRouter = express.Router();

let products = [];

//  {
//   id: "aA123s@",
//   name: "bread",
//   price: 0.55,
//   quantity: 200,
// }

warehouseRouter.get("/", (res) => {
  res.status(200).json(products);
});

warehouseRouter.post("/", (req, res) => {
  const product = { ...req.body, id: nanoid() };

  const existIndex = products.findIndex((p) => p.name == product.name);

  if (existIndex < 0) {
    res.status(409).send(`Product already exist for: ${(req, product.name)}`);
    return;
  }

  products.push(product);
  res.status(200).send("OK");
});

warehouseRouter.delete("/:id", (req, res) => {
  let param = req.params.id;
  let item = products.findIndex((el) => el.id == param);
  if (item == -1) {
    res.status(400).json({ message: "Not Found" });
  } else {
    products.splice(item, 1);
    products.find(item);
    res.status(200).json(products);
  }
});

warehouseRouter.put("/:id", (req, res) => {
  let param = req.params.id;
  let name = req.bod;
  let item = products.findIndex((el) => el.id == param);
  if (item == -1) {
    res.status(400).json({ message: "Not Found" });
  } else {
    products.splice(item, 1);
    res.status(200).json(products);
  }
});
