const router = require("express").Router();

const {
  getAllPartners,
  createPartner,
  getPartnerById,
  updatePartner,
  deletePartner,
} = require("../controllers/partnerControllers");

router.get("/", getAllPartners);

router.get("/:id", getPartnerById);

router.post("/", createPartner);

router.put("/:id", updatePartner);

router.delete("/:id", deletePartner);

module.exports = router;