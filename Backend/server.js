import express from "express";
import authRoutes from "./routes/authRoutes.js"
import connectDB from "./db/connectDB.js";
import messageRoutes from "./routes/messageRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import cookieParser from "cookie-parser";

process.loadEnvFile();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser())

// app.get("/:id", (req, res) => {
//   res.send("Hallo world");
// });

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.listen(port, () => {
  connectDB()
  console.log(`Server is running at port ${port}`);
});
