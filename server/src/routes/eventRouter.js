const express = require("express");
const router = express.Router();

const { verifyToken, checkRoles } = require("../middleware/auth");
const {
  createEventController,
  findEventsByIdController,
} = require("../controllers/eventController");

router.post("/event", verifyToken, checkRoles, createEventController);
// router.post("/ticket", verifyToken, checkRoles, createTicketController);
router.get("/", verifyToken, checkRoles, findEventsByIdController);

module.exports = router;
