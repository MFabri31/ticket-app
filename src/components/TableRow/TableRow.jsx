import { Button } from "react-bootstrap";

const TableRow = ({
  id,
  description,
  price,
  quantity,
  incrementQuantity,
  decrementQuantity,
}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{description}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>
        <Button
          className="me-1"
          variant="outline-primary"
          onClick={() => incrementQuantity(id)}
        >
          +
        </Button>
        <Button onClick={() => decrementQuantity(id)} variant="outline-danger">
          -
        </Button>
      </td>
    </tr>
  );
};

export default TableRow;
