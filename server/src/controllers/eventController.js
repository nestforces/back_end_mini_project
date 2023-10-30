const {
  createEventService,
  findEventsByIdService,
} = require("../services/eventService");

const createEventController = async (req, res) => {
  try {
    const { name, image, description, sk, date, time, location, discount, maxRefferalCode, categoryId } = req.body;
    const { id } = req.user;

    const result = await createEventService(name, image, description, sk, date, time, location, discount, maxRefferalCode, categoryId, id);

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

module.exports = {
  createEventController,
  findEventsByIdController,
};
