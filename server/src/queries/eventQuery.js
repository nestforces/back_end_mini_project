const db = require("../models");
const { Op } = require("sequelize");
const event = db.event;

const createEventQuery = async (name, image, description, sk, date, time, location, discount, maxRefferalCode, categoryId, userId) => {
  try {
    const res = await event.create({
      name,
      image,
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

module.exports = {
  createEventQuery,
  findEventsByIdQuery,
};
