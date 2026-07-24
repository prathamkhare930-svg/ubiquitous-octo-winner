const Partner = require("../models/Partner");

// ==========================
// GET ALL PARTNERS
// ==========================
exports.getAllPartners = async (req, res) => {
  console.log(req.user);
  try {
   const partners = await Partner.find();
console.log(partners);
    res.json({
      success: true,
      partners,
    });
  }catch (error) {
  console.log("===== GET ALL PARTNERS ERROR =====");
  console.log(error);

  res.status(500).json({
    success: false,
    message: "Error fetching partners",
    error: error.message,
  });
}
};

// ==========================
// GET PARTNER BY ID
// ==========================
exports.getPartnerById = async (req, res) => {
  try {
    const partner = await Partner.findById(req.params.id);

    if (!partner) {
      return res.status(404).json({
        success: false,
        message: "Partner not found",
      });
    }

    res.json({
      success: true,
      partner,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching partner",
      error: error.message,
    });
  }
};

// ==========================
// CREATE PARTNER
// ==========================
exports.createPartner = async (req, res) => {
  try {
const newPartner = await Partner.create({
  ...req.body,
  user: req.user.id,
});
    res.status(201).json({
      success: true,
      message: "Partner created successfully",
      partner: newPartner,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating partner",
      error: error.message,
    });
  }
};

// ==========================
// UPDATE PARTNER
// ==========================
exports.updatePartner = async (req, res) => {
  try {
   const updatedPartner = await Partner.findOneAndUpdate(
  {
    _id: req.params.id,
    user: req.user.id,
  },
  req.body,
  {
    new: true,
    runValidators: true,
  }
);

    if (!updatedPartner) {
      return res.status(404).json({
        success: false,
        message: "Partner not found",
      });
    }

    res.json({
      success: true,
      message: "Partner updated successfully",
      partner: updatedPartner,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating partner",
      error: error.message,
    });
  }
};

// ==========================
// DELETE PARTNER
// ==========================
exports.deletePartner = async (req, res) => {
  try {
  const deletedPartner = await Partner.findOneAndDelete({
  _id: req.params.id,
  user: req.user.id,
});
    if (!deletedPartner) {
      return res.status(404).json({
        success: false,
        message: "Partner not found",
      });
    }

    res.json({
      success: true,
      message: "Partner deleted successfully",
      partner: deletedPartner,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting partner",
      error: error.message,
    });
  }
};