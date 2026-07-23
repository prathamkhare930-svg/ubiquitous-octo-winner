const mongoose = require("mongoose");
const partnerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  fitnessLevel: {
    type: String,
    required: true,
  },
  goal: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
},
{
  timestamps: true,
});