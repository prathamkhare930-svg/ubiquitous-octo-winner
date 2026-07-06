const router = require("express").Router();

const { getAllPartners, createPartner, getPartnerById } = require("../controllers/partnerControllers");

router.get("/", getAllPartners);
router.post("/", createPartner);
router.get("/:id", getPartnerById); 
module.exports = router;