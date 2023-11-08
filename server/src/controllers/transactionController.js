const {updateTransactionStatusService, findTransactionByIdService, updateTicketService, findTicketEventService, orderTransactionService, checkRefService
    } = require('../services/transactionService')

const updateTransactionStatusController = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await updateTransactionStatusService(id, req.file?.filename);
      console.log("ini result controller", result);
      await updateTicketService(id);
      return res.status(200).json({
        message: "update success",
        data: result
      });
    } catch (err) {
      console.log(err);
      return res.status(500).send(err.message);
    }
  };

  const findTicketEventController = async (req, res) => {
    try {
      const {id} = req.params;
      const result = await findTicketEventService(id);
  
      return res.status(200).json({
        message: "Success",
        data: result,
      });
    } catch (err) {
      return res.status(500).send(err?.message);
    }
  }
  const findTransactionByIdController = async (req, res) => {
    try {
      const id = req.params;
      console.log(id);
      const result = await findTransactionByIdService(id);
  
      return res.status(200).json({
        message: "Success",
        data: result,
      });
    } catch (err) {
      return res.status(500).send(err?.message);
    }
  }

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
    checkRefController,
    updateTransactionStatusController,
    findTransactionByIdController,
    findTicketEventController
}

