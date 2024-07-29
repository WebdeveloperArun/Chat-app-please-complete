import express from "express";
import authRoutes from "./routes/authRoutes.js"
import connectDB from "./db/connectDB.js";

process.loadEnvFile();

const app = express();
const port = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);
app.use(express.json())

// app.get("/", (req, res) => {
//   res.send("Hallo world");
// });

app.listen(port, () => {
  connectDB()
  console.log(`Server is running at port ${port}`);
});
