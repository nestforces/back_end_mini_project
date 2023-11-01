const express = require("express");
const router = express.Router();

const { verifyToken, checkRoles } = require("../middleware/auth");
const {
  createEventController,
  findEventsByIdController,
  detailEventsByIdController,
  findTicketsByIdController,
  findPriceCategoryByIdController,
} = require("../controllers/eventController");

router.post("/", verifyToken, checkRoles, createEventController);
// router.post("/ticket", verifyToken, checkRoles, createTicketController);
router.get("/", verifyToken, checkRoles, findEventsByIdController);
router.get("/detail-event/:id",  detailEventsByIdController);
router.get("/ticket/:id",  findTicketsByIdController);


module.exports = router;
