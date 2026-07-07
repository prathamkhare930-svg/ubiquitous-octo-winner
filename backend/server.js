const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Server Working ✅");
});

const partnerRoutes = require("./routes/partnerRoutes");
const logger = require("./middleware/logger");

app.use(express.json());

app.use(logger);

app.use("/api/partners", partnerRoutes);

app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});