"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const http_1 = __importDefault(require("http"));
const PORT = process.env.PORT || 8000;
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
app.use((0, cors_1.default)());
app.use(express_1.default.json());
dotenv_1.default.config();
app.get("/", (req, res) => {
    res.status(200).json({ message: "Hello World form Elite-xpress" });
});
server.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
