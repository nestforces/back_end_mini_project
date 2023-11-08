const {
  createEventService,
  findEventsByIdService,
  findCityService,
  findCategoryService,
  // findUserService
} = require("../services/eventService");

const createEventController = async (req, res) => {
  try {
    const { name, 
      image, 
      description, 
      sk, 
      date, 
      time, 
      location, 
      discount, 
      maxRefferalCode, 
      categoryId,
      points,
      cityId, } = req.body;
    const { id } = req.user;

    console.log(categoryId);
    console.log("ini description di controller",description);
    console.log("ini SK di controller",sk);
    console.log("ini image di controller",image);
    const result = await createEventService(name, 
      req.file?.filename,
      description, 
      sk, 
      date, 
      time, 
      location, 
      discount, 
      maxRefferalCode, 
      categoryId, 
      id,
      points,
      cityId, 
      );
    return res.status(200).json({
      message: "Success",
      data: result,
    });
  } catch (err) {
    return res.status(500).send(err?.message);
  }
};

// createTicketController = async (req, res) => {
//   const { name, stock, price, endSale, ticketCategoryId, priceCategoryId } = req.body;
// }

const findEventsByIdController = async (req, res) => {
  try {
    const { id } = req.user;

    const result = await findEventsByIdService(id);

    return res.status(200).json({
      message: "Success",
      data: result,
    });
  } catch (err) {
    return res.status(500).send(err?.message);
  }
};

const findCityController = async (req, res) => {
  try{
    const result = await findCityService();
    return res.status(200).json({
      message: "Success",
      data: result,
    });
  } catch (err){
    throw(err)
  }
};

const findCategoryController = async (req, res) => {
  try{
    
    const result = await findCategoryService()
    return res.status(200).json({
      message: "Success",
      data: result,
    });
  } catch (err){
    throw(err)
  }
};
// const findUserController = async (req, res) => {
//   try{
//     const {id}  = req.user;
//     const result = await findUserService(id)
//     return res.status(200).json({
//       message: "Success",
//       data: result,
//     });
//   } catch (err){
//     throw(err)
//   }
// };

module.exports = {
  createEventController,
  findEventsByIdController,
  findCityController,
  findCategoryController,
  // findUserController
};
