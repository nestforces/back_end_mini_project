const {
    createTicketQuery,
    findTicketsByIdQuery,
  } = require("../queries/ticketQuery");
  
  const createTicketService = async (
    ticket_name, 
    ticket_category,
    number_of_ticket, 
    ticket_price, 
    ticket_end_date,
    ticketCategoryId,
    priceCategoryId,) => {
    try {
      const res = await createTicketQuery(
        ticket_name, 
        ticket_category,
        number_of_ticket, 
        ticket_price, 
        ticket_end_date,
        ticketCategoryId,
        priceCategoryId,);
  
      return res;
    } catch (err) {
      throw err;
    }
  };
  
  const findTicketsByIdService = async (id) => {
    try {
      const res = await findTicketsByIdQuery(id);
  
      return res;
    } catch (err) {
      throw err;
    }
  };
  
  module.exports = {
    findTicketsByIdService,
    createTicketService,
  };
  