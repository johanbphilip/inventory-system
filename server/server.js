import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import { getAllItems } from "./controllers/crud/getMethods.controller.js";
import { router as itemsRouter } from "./routes/items.router.js";
import { router as authRouter } from "./routes/auth.router.js";
import { authenticateRequest } from "./middleware/authMiddleware.js";

const app = express();
const PORT = process.env.PORT;

dotenv.config();

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));


// middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: 'http://localhost:5173', credentials: true }));

app.use('/api/*', authenticateRequest);
app.use("/api/item", itemsRouter);
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.status(200).send(`Hello there `);
});
// shows all items
