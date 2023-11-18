import express from "express";
import { router } from './routes'

const app = express();

app.use(express.json());
app.use(router);

//msg de arquivo não suportado, upload thumb
app.use(function (error, request, response, next) {
    if (error) {
      response.status(500).json({ message: error.message });
    } else {
      next();
    }
  });

app.listen(8000, () => {
    console.log("The server is running on port 8000");
})