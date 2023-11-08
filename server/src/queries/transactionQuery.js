const db = require("../models");
const { Sequelize, Op } = require("sequelize");

const transaction = db.transaction;
const transactionItem = db.transactionItem;
const ticket = db.ticket
const event = db.event
const eventAttendee = db.eventAttendee;
const user = db.user;

const updateTransactionStatusQuery = async (id, transactionImages, status) => {

    try {
    const res = await transaction.update(
        {transactionImages,
        status: "success"}, 
        {where: 
            {id: id}}        
        );

    } catch (err) {
      console.log("transaction",err);
    }
  };




const orderTransactionQuery = async (totalQuantity, totalPrice, referralCodeBy, eventId, id, referralCode) => {
    try {
     if (totalPrice == 0) {
      const res = await transaction.create(
        {
         totalQuantity, TotalPrice: totalPrice, status: "success", referralCode: `${referralCode}`, referralCodeBy, userId : id, eventId,
        },
      );

      return res;
     } else {
      const res = await transaction.create(
        {
         totalQuantity, TotalPrice: totalPrice, status: "pending", referralCode: `${referralCode}`, referralCodeBy, userId : id, eventId,
        },
      );

      return res;
     }
    } catch (err) {
      throw err;
    }
  };

  const findTicketQuery = async (transactionId) => {
    try {
      
      const res = await transactionItem.findAll(
        {where: {
          transactionId
        }}
        );      
      console.log("ini res query 1", res);
      return res
      
      
    } catch (err) {
      console.log("transaction", err);
      throw err;
    }
  };

  const updateStocksTicketQuery = async (ticketId, quantity, ticketCode) => {
    try {
      const res = await ticket.update(
        {number_of_ticket: Sequelize.literal(`number_of_ticket - ${quantity}`), ticketCode: `${ticketCode}`},
        {where: {
          id: ticketId,
          number_of_ticket: {
            [Sequelize.Op.gt]: 0
          }
        }}
        );      
        return res
  
    } catch (err) {
      console.log("transaction", err);
      throw err;
    }
  };


  const findTicketTransactionQuery = async (transactionId) => {
    try {
      const res = await transactionItem.findAll(
        { include: [
          {model: ticket, include: [event]}
        ],
          where: {
          transactionId
        }}
        );      
      console.log("ini res query 1", res);
      return res
      
      
    } catch (err) {
      console.log("transaction", err);
      throw err;
    }
  };
  
  const findTicketEventQuery = async (ticketId) => {
    try {
      const res = await ticket.findAll(
        { include: [event],
          where: {
          id: ticketId
        }}
        );      
        console.log("ini res query ticket, event", res);
        return res
  
    } catch (err) {
      console.log("transaction", err);
      throw err;
    }
  };

const findTransactionQueryById = async (id) => {
  try {
    
    const res = await transaction.findOne({
      include: [event],
      where: {
        id: id.id
      }
      });
    console.log("ini adalah", res);
    return res
      
  } catch (err){
    throw err;
  }
}
  const createTransItemQuery = async (ticketId, quantity, transactionId) => {
    try {
      const res = await transactionItem.create(
        {
          ticketId, quantity, transactionId
        },
      );

      return res
    } catch (err) {
      throw err;
    }
  }

  const createAttendeesQuery = async (name, phoneNumber, email, ticketId, quantity, transactionItemId) => {
    try {
      const res = await eventAttendee.create(
        {
          name, phoneNumber,email, ticketId, quantity, transactionItemId
        },
      );
    } catch (err) {
      throw err;
    }
  }

  const checkRefQuery = async (referral) => {
    try {
      const res = await transaction.findAll({
        where: {
          [Op.or]: [
            { referralCode: referral.referral },
            { referralCodeBy: referral.referral }
          ]
        }
      })
      return res;
    } catch (err) {
      throw err;
    }
  }

  const checkRefNewQuery = async (referral) => {
    try {
      const res = await transaction.findAll({
        where: {
          [Op.or]: [
            { referralCode: referral },
            { referralCodeBy: referral }
          ]
        }
      })
      return res;
    } catch (err) {
      throw err;
    }
  }

  const pointReferralQuery = async (id, pointToUser) => {
    console.log("ini di query", pointToUser);
    try {
      const res = await user.update({
        points: Sequelize.literal(`points + ${pointToUser}`),
      }, {
        where: {id: id}
      })
  
      return res
    } catch (err) {
      throw err;
    }
  }

  const remainingPointsQuery = async (id, remainingPoints) => {
    try {
      const res = await user.update({
        points: remainingPoints
      }, {
        where: {id: id}
      })
    } catch (err) {
      throw err;
    }
  }

  const maxReferralQuery = async (id) => {
    try {
      const res = await event.update({
        maxReferralCode: Sequelize.literal(`maxReferralCode - 1`),
      }, {
        where: {id: id}
      })
  
      return res
    } catch (err) {
      throw err;
    }
  }

  const detailEventsByIdQuery = async (id) => {
    try {
      const res = await event.findOne({
        where: {
          id : id,
        },
      });
      return res;
    } catch (err) {
      throw err;
    }
  }

  const decrementTicketQuery = async (id, quantity) => {
    try {
      const res = await ticket.update({
        number_of_ticket: Sequelize.literal(`number_of_ticket - ${quantity}`),
      }, {
        where: {id: id}
      })
  
      return res
    } catch (err) {
      throw err;
    }
  }

module.exports = {
    orderTransactionQuery,
    createTransItemQuery,
    createAttendeesQuery,
    checkRefQuery,
    checkRefNewQuery,
    pointReferralQuery,
    remainingPointsQuery,
    maxReferralQuery,
    detailEventsByIdQuery,
    decrementTicketQuery,
    updateTransactionStatusQuery,
    findTransactionQueryById,
    findTicketQuery,
    updateStocksTicketQuery,
    findTicketEventQuery,
    findTicketTransactionQuery
};
