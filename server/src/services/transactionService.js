const {updateTransactionStatusQuery, findTransactionQueryById, findTicketQuery, updateStocksTicketQuery, findTicketEventQuery, findTicketTransactionQuery, orderTransactionQuery, createTransItemQuery, createAttendeesQuery, checkRefQuery, checkRefNewQuery, pointReferralQuery, remainingPointsQuery, maxReferralQuery, detailEventsByIdQuery, decrementTicketQuery} = require('../queries/transactionQuery')

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

// const referralCodes = require('referral-codes')

function generateReferralCode(options) {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
  
    for (let i = 0; i < options.length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      code += charset[randomIndex];
    }
  
    return `${options.prefix}-${code}-${options.postfix}`;
  }

const orderTransactionService = async (totalQuantity, totalPrice, referralCodeBy, eventId, ticket, name, phoneNumber, email, id, eventName, remainingPoints, pointToUser) => {
    try {
        const preFix = eventName.split(" ")[0];
        const postFix = new Date().getFullYear();
        const length = 8;

        const referral = () => {
            const referralCode = generateReferralCode({
                prefix: preFix,
                postfix: postFix,
                length: length,
                });
            const check = checkRefNewQuery(referralCode)

            if(check.length > 0) referral()

            return referralCode
        }

        const event = await detailEventsByIdQuery(eventId)

        let referralCodeFinal;
        if (event.maxReferralCode > 0) {
        referralCodeFinal = referral();
        } else {referralCodeFinal = " "}

        const res = await orderTransactionQuery(totalQuantity, totalPrice, referralCodeBy, eventId, id, referralCodeFinal);
        if(referralCodeBy) {
        const resPoint = await checkRefNewQuery(referralCodeBy)
        console.log("ini di service transaction", resPoint[0].userId);
        const resPointPlus = await pointReferralQuery(resPoint[0].userId, pointToUser)
        }
        const resPointMinus = await remainingPointsQuery(id, remainingPoints);
        const decrementMaxRef = await maxReferralQuery(eventId);

        console.log(res?.id)
        for (i = 0; i < ticket.length; i++) {
            const createTransItem = await createTransItemQuery(ticket[i].ticket.id, ticket[i].quantity, res.id)
            const attendees = await createAttendeesQuery(name, phoneNumber, email, ticket[i].ticket.id, ticket[i].quantity,  createTransItem.id)
            if (totalPrice == 0) {const decrementTicket = await decrementTicketQuery(ticket[i].ticket.id, ticket[i].quantity)}
        }

        return res;
    } catch (err) {
        throw err;
    }
}

const checkRefService = async (referral) => {
    try {
        const res = await checkRefQuery(referral)

        return res;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    orderTransactionService,
    checkRefService,
    updateTransactionStatusService,
    findTransactionByIdService, 
    updateTicketService,
    findTicketEventService
}
