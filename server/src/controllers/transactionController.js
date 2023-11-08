const {orderTransactionService, checkRefService} = require('../services/transactionService');


const orderTransactionController = async (req, res) => {
    try {
        const {totalQuantity, totalPrice, referralCodeBy, eventId, ticket, name, phoneNumber,email, eventName, remainingPoints, pointToUser} = req.body;
        const { id } = req.user;

        const result = await orderTransactionService(
            totalQuantity, totalPrice, referralCodeBy, eventId, ticket, name, phoneNumber, email, id, eventName, remainingPoints, pointToUser
        )

        return res.status(200).json({
            message: "Success",
            data: result,
          });
    } catch (err) {
        return res.status(500).send(err?.message);
    }
}

const checkRefController = async (req, res) => {
    try {
        const referral = req.params;

        const result = await checkRefService(referral);

        return res.status(200).json({
            message: "Success",
            data: result,
        });
    } catch (err) {
        return res.status(500).send(err?.message);
    }
}

module.exports = {
    orderTransactionController,
    checkRefController
}

