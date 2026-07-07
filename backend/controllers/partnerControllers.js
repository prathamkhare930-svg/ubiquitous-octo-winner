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
    fitnessLevel: "Intermediate",
    goal: "Muscle Gain",
    city: "Bhopal",
  },
];

// GET ALL
exports.getAllPartners = (req, res) => {
  res.json(partners);
};

// GET BY ID
exports.getPartnerById = (req, res) => {
  const partnerId = Number(req.params.id);

  const partner = partners.find((p) => p.id === partnerId);

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
};

// CREATE
exports.createPartner = (req, res) => {
  const newPartner = {
    id: partners.length + 1,
    ...req.body,
  };

  partners.push(newPartner);

  res.status(201).json({
    success: true,
    message: "Partner created successfully",
    partner: newPartner,
  });
};

// UPDATE
exports.updatePartner = (req, res) => {
  const partnerId = Number(req.params.id);

  const partnerIndex = partners.findIndex(
    (p) => p.id === partnerId
  );

  if (partnerIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "Partner not found",
    });
  }

  const updatedPartner = {
    ...partners[partnerIndex],
    ...req.body,
  };

  partners[partnerIndex] = updatedPartner;

  res.json({
    success: true,
    message: "Partner updated successfully",
    partner: updatedPartner,
  });
};

// DELETE
exports.deletePartner = (req, res) => {
  const partnerId = Number(req.params.id);

  const partnerIndex = partners.findIndex(
    (p) => p.id === partnerId
  );

  if (partnerIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "Partner not found",
    });
  }

  const deletedPartner = partners.splice(partnerIndex, 1);

  res.json({
    success: true,
    message: "Partner deleted successfully",
    partner: deletedPartner[0],
  });
};