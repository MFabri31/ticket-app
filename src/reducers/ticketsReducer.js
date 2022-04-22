import { TYPES } from "../actions/ticketActions";

export const initialState = {
  tickets: [],
  total: 0,
};

const totalTickets = (tickets) =>
  tickets
    .map((ticket) => +ticket.price * +ticket.quantity)
    .reduce((acc, elem) => acc + elem, 0);

export const ticketsReducers = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SET_TICKETS:
      return {
        tickets: action.payload,
        total: totalTickets(state.tickets, state.total),
      };
    case TYPES.INCREMENT_QUANTITY:
      const tickets = state.tickets.map((ticket) =>
        ticket.id === action.payload && ticket.quantity < 5
          ? { ...ticket, quantity: ticket.quantity + 1 }
          : ticket
      );
      return {
        ...state,
        tickets: tickets,
        total: totalTickets(tickets),
      };
    case TYPES.DECREMENT_QUANTITY:
      const decrementTickets = state.tickets.map((ticket) =>
        ticket.id === action.payload && ticket.quantity > 0
          ? { ...ticket, quantity: ticket.quantity - 1 }
          : ticket
      );
      return {
        ...state,
        tickets: decrementTickets,
        total: totalTickets(decrementTickets),
      };
    default:
      return state;
  }
};
