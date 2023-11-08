const {updateTransactionStatusQuery, findTransactionQueryById, findTicketQuery, updateStocksTicketQuery, findTicketEventQuery, findTicketTransactionQuery} = require('../queries/transactionQuery')

const updateTransactionStatusService = async (
    id,
    transactionImage
  ) => {
    try {
      await updateTransactionStatusQuery(id, transactionImage);
    } catch (err) {
      throw err;
    }
  };

  function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
  
    return result;
  }
  
  

  const updateTicketService = async (transactionId) => {
    try {
      const res = await findTicketQuery(transactionId);
      for (i = 0; i < res.length; i++){
        const randomString = generateRandomString(8)
        const x = await updateStocksTicketQuery(res[i].ticketId, res[i].quantity, randomString)
      }

    } catch (err) {
      throw err;
    }
  };

  const findTicketEventService = async (transactionId) => {
    try {
      const res = await findTicketTransactionQuery(transactionId);
      
      
      // for (i = 0; i < res.length; i++){
      //   const y = await findTicketEventQuery(res[i].ticketId);
      //   console.log("ini Y", y);
      // }
      
      return res
    } catch (err) {
      throw err;
    }
  }


const findTransactionByIdService = async (id) => {
    try {
      const result = await findTransactionQueryById(id);
      return result
    } catch (err) {
      throw err;
    }
  };

  module.exports = {
    updateTransactionStatusService,
    findTransactionByIdService, 
    updateTicketService,
    findTicketEventService
  }