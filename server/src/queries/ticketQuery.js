const db = require("../models");
const { Op } = require("sequelize");
const ticket = db.ticket;
const event = db.event

const createTicketQuery = async (
    ticket_name, 
    number_of_ticket, 
    ticket_price, 
    ticket_end_date,
    ticketCategoryId,
    priceCategoryId,
    eventId ) => {
    try {
    const res = await ticket.create({
        ticket_name, 
        number_of_ticket, 
        ticket_price, 
        ticket_end_date,
        ticketCategoryId,
        priceCategoryId,
        eventId 
    });

    return res;
  } catch (err) {
    throw err;
  }
};

const findEventByIdQuery = async (id) => {
  try {
    const res = await event.findAll({
      where: {
        userId: id,
      },
      order: [["createdAt", "DESC"]],
    });

    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createTicketQuery,
  findEventByIdQuery,
};
