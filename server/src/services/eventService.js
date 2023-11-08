const {
  createEventQuery,
  findEventsByIdQuery,
  findCityQuery,
  findCategoryQuery,
  // findUserQuery
} = require("../queries/eventQuery");

const createEventService = async (name, 
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
    const res = await createEventQuery(name, 
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
      );

    console.log("ini description di service",description);
    console.log("ini image di service",image);


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

const findCityService = async () => {
  try{
    const res = await findCityQuery()
    return res
  } catch (err){
    throw(err)
  }
};

const findCategoryService = async () => {
  try{
    const res = await findCategoryQuery()
    return res
  } catch (err){
    throw(err)
  }
};
// const findUserService = async (id) => {
//   try{
//     const res = await findUserQuery(id)
//     return res
//   } catch (err){
//     throw(err)
//   }
// };



module.exports = {
  findEventsByIdService,
  createEventService,
  findCityService,
  findCategoryService,
  // findUserService
};
