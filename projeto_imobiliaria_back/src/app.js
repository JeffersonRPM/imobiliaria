import express from "express";
import cors from "cors";
import path from 'node:path'
import { router } from './routes'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use('/uploads', express.static(path.resolve(__dirname, '../', 'uploads')));
app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Headers', "*");
  res.header('Access-Control-Allow-Methods', "GET, POST, PUT, DELETE");
  app.use(cors());
  next();
});

//msg de arquivo não suportado, upload thumb
app.use(function (err, req, res, next) {
  if (err) {
    res.status(500).json({ message: error.message });
  } else {
    next();
  }
});

app.use(router);

app.listen(8000, () => {
  console.log("The server is running on port 8000");
})