const {
  createEventQuery,
  findEventsByIdQuery,
  detailEventsByIdQuery,
  findTicketsByIdQuery,
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

    console.log("ini nama di service",name);


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

const detailEventsByIdService = async (id) => {
  try {
    const res = await detailEventsByIdQuery(id);

    return res;
  } catch (err) {
    throw err
  }
}

const findTicketsByIdService = async (id) => {
  try {
    const res = await findTicketsByIdQuery(id);

    return res;
  } catch (err) {
    throw err
  }
}



module.exports = {
  findEventsByIdService,
  createEventService,
  detailEventsByIdService,
  findTicketsByIdService,
};
