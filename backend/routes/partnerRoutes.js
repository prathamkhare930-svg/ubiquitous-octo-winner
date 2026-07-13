const router = require("express").Router();

const {
  getAllPartners,
  getPartnerById,
  createPartner,
  updatePartner,
  deletePartner,
} = require("../controllers/partnerControllers");

router.get("/", getAllPartners);
router.get("/:id", getPartnerById);
router.post("/", createPartner);
router.put("/:id", updatePartner);
router.delete("/:id", deletePartner);

module.exports = router;