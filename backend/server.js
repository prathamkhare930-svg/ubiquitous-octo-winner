require("dotenv").config();

const cors = require("cors");
const express = require("express");

const app = express();

const connectDB = require("./database/db");

const partnerRoutes = require("./routes/partnerRoutes");
const authRoutes = require("./routes/authRoutes");

const logger = require("./middleware/logger");

connectDB();

app.use(cors());
app.use(express.json());

app.use(logger);

app.use("/api/auth", authRoutes);
app.use("/api/partners", partnerRoutes);

app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});