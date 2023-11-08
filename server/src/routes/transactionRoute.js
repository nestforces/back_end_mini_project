const express = require("express");
const router = express.Router();

const {orderTransactionController, checkRefController} = require('../controllers/transactionController');

const {verifyToken} = require('../middleware/auth');

router.get('/referral/:referral',  checkRefController);
router.post('/', verifyToken, orderTransactionController);

module.exports = router;