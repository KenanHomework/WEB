import cluster from "cluster";
import express, { response } from "express";
import { JSONPreset } from "lowdb/node";
import zlib from "zlib";
import fs from "fs";
import os from "os";
import { config } from "dotenv";
config();
const PORT = process.env.PORT;

const numCPUs = os.availableParallelism();
async function spawnThreads() {
  let worker_length = Object.keys(cluster.workers).length;
  if (worker_length < numCPUs) {
    for (let i = 0; i < numCPUs - worker_length; i++) {
      cluster.fork();
    }
  }
}

if (cluster.isPrimary) {
  console.log(`Running Main on ${process.pid}`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    spawnThreads();
    console.log(`Thread with pid died: ${worker.process.pid}`);
  });
} else {
  const defaultData = { products: [] };
  const db = await JSONPreset("db.json", defaultData);
  const server = express();
  server.use(express.json());

  server.get("/", (request, response) => {
    response.status(200).json(db.data.products);
  });

  server.post("/", (request, response) => {
    let lastId = 0;
    if (db.data.products.length != 0)
      lastId = db.data.products[db.data.products.length - 1].id;
    const product = { ...request.body, id: lastId + 1 };
    db.data.products.push(product);
    db.write();
    response.status(200).send(`Product added`);
  });

  server.put("/:id", (request, response) => {
    let param = request.params.id;
    let { Name } = request.body;
    let item = db.data.products.findIndex((el) => el.id == param);
    if (item == -1) response.status(400);
    db.data.products[item].Name = Name;
    db.write();
    response.status(200).send(`Product updated`);
  });

  server.delete("/:id", (request, response) => {
    let param = request.params.id;
    let item = db.data.products.findIndex((el) => el.id == param);
    if (item == -1) response.status(400);
    db.data.products.splice(item, 1);
    db.write();
    response.status(200).json(db.data.products);
  });

  server.get("/archive", (request, response) => {
    const jsonFileName = "db.json";
    const compressedFileName = "compressedDb.json.gz";
    const jsonData = fs.readFileSync(jsonFileName, "utf8");
    const compressedData = zlib.gzipSync(jsonData);
    fs.writeFileSync(compressedFileName, compressedData);
    response.status(200).json("Db compressed");
  });

  server.listen(PORT, () => {
    console.log(
      `Worker ${process.pid} started to listening http://localhost:${PORT}`
    );
  });
}
