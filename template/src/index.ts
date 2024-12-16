import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import http from "http";
import router from "./routes/route";

const PORT = process.env.PORT || 8000;
const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());

dotenv.config();

app.use("/api", router);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World form Elite-xpress" });
});

server.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
