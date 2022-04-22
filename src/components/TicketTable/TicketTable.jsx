import { useEffect, useReducer } from "react";
import { TYPES } from "../../actions/ticketActions";
import { initialState, ticketsReducers } from "../../reducers/ticketsReducer";
import { Table } from "react-bootstrap";
import TableRow from "../TableRow/TableRow";
import { Link } from "react-router-dom";
import { tickets } from "../../data/data";

const TicketTable = () => {
  const [state, dispatch] = useReducer(ticketsReducers, initialState);

  const setTickets = () => {
    dispatch({ type: TYPES.SET_TICKETS, payload: tickets });
  };

  const incrementQuantity = (id) => {
    dispatch({ type: TYPES.INCREMENT_QUANTITY, payload: id });
  };

  const decrementQuantity = (id) => {
    dispatch({ type: TYPES.DECREMENT_QUANTITY, payload: id });
  };

  useEffect(() => {
    setTickets();
  }, [tickets]);

  return (
    <>
      <Link className="btn btn-outline-dark" to="/">
        Volver
      </Link>
      <Table striped hover className="mt-3">
        <thead>
          <tr>
            <th>id</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {state.tickets?.length > 0 &&
            state.tickets.map((ticket) => (
              <TableRow
                key={ticket.id}
                {...ticket}
                incrementQuantity={incrementQuantity}
                decrementQuantity={decrementQuantity}
              />
            ))}
          <tr>
            <td className="lead">
              Total:<span>{state.total}</span>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default TicketTable;
