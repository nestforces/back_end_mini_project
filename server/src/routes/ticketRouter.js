const express = require("express");
const router = express.Router();

const { verifyToken, checkRoles } = require("../middleware/auth");
const {
  createTicketController,
  findTicketsByIdController,
} = require("../controllers/ticketController");

router.post("/", verifyToken, checkRoles, createTicketController);
router.get("/", verifyToken, checkRoles, findTicketsByIdController);

module.exports = router;
