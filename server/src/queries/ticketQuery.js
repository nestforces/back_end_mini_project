const db = require("../models");
const { Op } = require("sequelize");
const ticket = db.ticket;

const createTicketQuery = async (
    ticket_name, 
    ticket_category,
    number_of_ticket, 
    ticket_price, 
    ticket_end_date,
    ticketCategoryId,
    priceCategoryId, ) => {
    try {
    const res = await ticket.create({
        ticket_name, 
        ticket_category,
        number_of_ticket, 
        ticket_price, 
        ticket_end_date,
        ticketCategoryId,
        priceCategoryId, 
    });

    return res;
  } catch (err) {
    throw err;
  }
};

const findTicketsByIdQuery = async (id) => {
  try {
    const res = await event.findAll({
      where: {
        userId: id,
      },
    });

    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createTicketQuery,
  findTicketsByIdQuery,
};
