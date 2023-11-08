const express = require("express");
const router = express.Router();

const {
    updateTransactionStatusController,
    findTransactionByIdController,
    findTicketEventController,
} = require('../controllers/transactionController')

const {uploadTransactionFile} = require('../middleware/multer')
const { verifyToken, checkRoles } = require("../middleware/auth");


router.patch("/:id", uploadTransactionFile, updateTransactionStatusController);
router.get("/:id", findTransactionByIdController);
router.get("/invoice/:id", findTransactionByIdController);
router.get("/ticket/:id", findTicketEventController);


module.exports = router;