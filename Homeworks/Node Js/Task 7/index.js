import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import parser from "body-parser";
import multer from "multer";
import path from "path";
config();

const PORT = process.env.PORT;

const directory = path.join(process.cwd(), "uploads");

const fileLimitMiddleware = (req, res, next) => {
  const fileLenght = req.file.size;

  if (fileLenght > 5 * 1024 * 1024) {
    return res.status(400).json({ error: "File size over 5mb." });
  } else {
    next();
  }
};

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  // limits: { fileSize: 5 * 1024 * 1024 },
});

const server = express();
server.use(upload.single("file"));
server.use(fileLimitMiddleware);
server.use(parser.urlencoded({ extended: false }));
server.use(express.json());
server.use(morgan("combined"));

server.post("/", async (req, res) => {
  console.log(req.file);

  res.status(200).send("uploaded");
});

server.listen(PORT, () => {
  console.log(`Server is running: http://localhost:${PORT}`);
});
