const e = require("express");
const express = require("express");
const partnerRoutes = require("./routes/partnerRoutes");
app.use("/api/partners", partnerRoutes);


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
app.post("/api/partners", (req, res) => {
  const newPartner = req.body;

  partners.push(newPartner);

  res.json({
    success: true,
    message: "Partner Added Successfully",
    partner: newPartner,
  });
});
app.get("/api/partners/:id", (req, res) => {
    const partnerId = Number(req.params.id);

    const partner = partners.find(
        p => p.id === partnerId
    );

    if (!partner) {
        return res.status(404).json({
            success: false,
            message: "Partner not found"
        });
    }

    res.json({
        success: true,
        partner
    });
});
app.delete("/api/partners/:id", (req, res) => {
    const partnerId = Number(req.params.id);
    const partnerIndex = partners.findIndex(p => p.id === partnerId);

    if (partnerIndex === -1) {
        return res.status(404).json({
            success: false,
            message: "Partner not found"
        });
    }

    partners.splice(partnerIndex, 1);

    res.json({
        success: true,
        message: "Partner deleted successfully"
    });
});
app.put("/api/partners/:id" , (req, res) => {
    const partnerId = Number(req.params.id);
    const partnerIndex = partners.findIndex(p => p.id === partnerId);
    if (partnerIndex === -1) { 
      return res.status(404).json({
        success: false,
        message: "Partner not found"
      });
    } else {
      const updatedPartner = { ...partners[partnerIndex], ...req.body };
      partners[partnerIndex] = updatedPartner;
      res.json({
        success: true,
        message: "Partner updated successfully",
        partner: updatedPartner 
      });
      }
    
});
app.use(express.json());
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});