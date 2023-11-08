const {
    createTicketQuery,
    findEventByIdQuery,
  } = require("../queries/ticketQuery");
  
  const createTicketService = async (
    ticket_name, 
    number_of_ticket, 
    ticket_price, 
    ticket_end_date,
    ticketCategoryId,
    priceCategoryId,
    eventId) => {
    try {
      console.log(ticket_name, 
        number_of_ticket, 
        ticket_price, 
        ticket_end_date,
        ticketCategoryId,
        priceCategoryId,
        eventId)
      const res = await createTicketQuery(
        ticket_name, 
        number_of_ticket, 
        ticket_price, 
        ticket_end_date,
        ticketCategoryId,
        priceCategoryId,
        eventId);
  
      return res;
    } catch (err) {
      throw err;
    }
  };
  
  const findEventByIdService = async (id) => {
    try {
      const res = await findEventByIdQuery(id);
  
      return res;
    } catch (err) {
      throw err;
    }
  };
  
  module.exports = {
    findEventByIdService,
    createTicketService,
  };
  