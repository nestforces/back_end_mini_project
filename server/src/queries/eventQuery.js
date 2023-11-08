const db = require("../models");
const { Op } = require("sequelize");
const event = db.event;
const city = db.city;
const category = db.category;
const user = db.user;

const createEventQuery = async (name, 
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
  points,
  cityId,
  ) => {
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
      points,
      cityId,
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

const findCityQuery = async () => {
  try{
    const res = await city.findAll()
    return res
  } catch (err){
    throw err;
  }
};
const findCategoryQuery = async () => {
  try{
    const res = await category.findAll()
    return res
  } catch (err){
    throw err;
  }
};

// const findUserQuery = async (id) => {
//   try{
//     const res = await user.findOne(
//       {
//         where: {
//           id: id
//         },
//       });
    
//     return res
//   } catch (err){
//     throw err;
//   }
// };

module.exports = {
  createEventQuery,
  findEventsByIdQuery,
  findCityQuery,
  findCategoryQuery,
  // findUserQuery
};
