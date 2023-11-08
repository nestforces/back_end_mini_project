const express = require("express");
const router = express.Router();

const { verifyToken, checkRoles } = require("../middleware/auth");
const {
  createEventController,
  findEventsByIdController,
  findCityController,
  findCategoryController,
  // findUserController
} = require("../controllers/eventController");
const { uploadEventFile } = require("../middleware/multer");

router.post("/", verifyToken, checkRoles, uploadEventFile, createEventController);
// router.post("/ticket", verifyToken, checkRoles, createTicketController);
router.get("/", verifyToken, checkRoles, findEventsByIdController);
router.get("/city", findCityController);
router.get("/category", findCategoryController);
// router.get("/user", findUserController);

module.exports = router;
