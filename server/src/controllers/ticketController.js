const {
    createTicketService,
    findEventByIdService,
  } = require("../services/ticketService");
  
  const createTicketController = async (req, res) => {
    try {
      const { ticket_name,
        number_of_ticket, 
        ticket_price, 
        ticket_end_date,
        ticketCategoryId,
        priceCategoryId, 
        eventId} = req.body;
      const { id } = req.user;
      
  
      const result = await createTicketService(
        ticket_name, 
        number_of_ticket, 
        ticket_price, 
        ticket_end_date,
        ticketCategoryId,
        priceCategoryId,
        eventId);
  
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
  
  const findEventByIdController = async (req, res) => {
    try {
      const { id } = req.user;
  
      const result = await findEventByIdService(id);
  
      return res.status(200).json({
        message: "Success",
        data: result,
      });
    } catch (err) {
      return res.status(500).send(err?.message);
    }
  };
  
  module.exports = {
    createTicketController,
    findEventByIdController,
  };
  