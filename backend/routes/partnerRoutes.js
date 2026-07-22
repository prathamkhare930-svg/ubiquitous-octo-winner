const router = require("express").Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  getAllPartners,
  getPartnerById,
  createPartner,
  updatePartner,
  deletePartner,
} = require("../controllers/partnerControllers");

router.get("/", authMiddleware, getAllPartners);
router.get("/:id", authMiddleware, getPartnerById);
router.post("/", authMiddleware, createPartner);
router.put("/:id", authMiddleware, updatePartner);
router.delete("/:id", authMiddleware, deletePartner);

module.exports = router;