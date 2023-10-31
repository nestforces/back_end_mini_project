const {
  createEventQuery,
  findEventsByIdQuery,
} = require("../queries/eventQuery");

const createEventService = async (name, 
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
    const res = await createEventQuery(name, 
      // image, 
      description, 
      sk, 
      date, 
      time, 
      location, 
      discount, 
      maxRefferalCode, 
      categoryId, 
      userId);

    return res;
  } catch (err) {
    throw err;
  }
};

const findEventsByIdService = async (id) => {
  try {
    const res = await findEventsByIdQuery(id);

    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  findEventsByIdService,
  createEventService,
};
