const db = require("../models");
const { Op } = require("sequelize");
const event = db.event;
const user = db.user;
const ticket = db.ticket;
const ticketCategory = db.ticketCategory;
const category = db.category

const createEventQuery = async (name, 
  // image, 
  description, 
  sk, 
  date, 
  time, 
  location, 
  discount, 
  maxRefferalCode, 
  categoryId, 
  userId) => {
  try {
    const res = await event.create({
      name,
      // image,
      description,
      sk,
      date,
      time,
      location,
      discount,
      maxRefferalCode,
      categoryId,
      userId,
    });

    return res;
  } catch (err) {
    throw err;
  }
};

const findEventsByIdQuery = async (id) => {
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

const detailEventsByIdQuery = async (id) => {
  try {
    const res = await event.findOne({
      include:[user, {
        through: { attributes: []},
        model: category,
        as: "category"
      }],
      where: {
        id : id.id,
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
}

const findTicketsByIdQuery = async (id) => {
  try {
    console.log(id);
    const res = await ticket.findAll({
      include:[ticketCategory],
      where: {
        eventId : id.id,
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
}


module.exports = {
  createEventQuery,
  findEventsByIdQuery,
  detailEventsByIdQuery,
  findTicketsByIdQuery,
};
