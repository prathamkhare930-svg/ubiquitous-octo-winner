const express = require("express");

const app = express();

const PORT = 5000;


app.get("/", (req, res) => {
  res.send("Welcome to FitConnect Backend 🚀");
});


app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "FitConnect Backend is Working 🚀",
  });
});


const partners = [
  {
    id: 1,
    name: "Alice",
    fitnessLevel: "Beginner",
    goal: "Weight Loss",
    city: "Indore",
  },
  {
    id: 2,
    name: "Rahul",
    fitnessLevel: "Advanced",
    goal: "Muscle Gain",
    city: "Bhopal",
  },
];

// Partners API
app.get("/api/partners", (req, res) => {
  res.json(partners);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});