const {updateTransactionStatusService, findTransactionByIdService, updateTicketService, findTicketEventService
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

  module.exports= {
    updateTransactionStatusController,
    findTransactionByIdController,
    findTicketEventController
  } 