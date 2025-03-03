import express from "express";
import cors from "cors";
import clientRoutes from "./routes/client.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", clientRoutes);
const port = 8000;
app.listen(port, () => {
  console.log("Server is running on port ", port);
});

app.get("/", (req, res) => {
  return res.send("<h1>Hello World</h1>");
});
