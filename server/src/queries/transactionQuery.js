const db = require("../models");
const { Op } = require("sequelize");
const { Sequelize } = require("../models");
const transaction = db.transaction;
const transactionItem = db.transactionItem;
const eventAttendee = db.eventAttendee;
const user = db.user;
const event = db.event
const ticket = db.ticket

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
    decrementTicketQuery
};