const db = require("../models");
const { Sequelize, Op } = require("sequelize");

const transaction = db.transaction;
const transactionItem = db.transactionItem;
const ticket = db.ticket
const event = db.event

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

  module.exports = {
    updateTransactionStatusQuery,
    findTransactionQueryById,
    findTicketQuery,
    updateStocksTicketQuery,
    findTicketEventQuery,
    findTicketTransactionQuery
  }