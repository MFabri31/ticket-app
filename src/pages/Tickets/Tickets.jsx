import { Col, Container, Row } from "react-bootstrap";
import Ticket from "../../components/Ticket";

const Tickets = () => {
  return (
    <Container>
      <Row className="flex-column justify-content-center align-items-center my-5">
        <Col md={5}>
          <Ticket />
        </Col>
      </Row>
    </Container>
  );
};

export default Tickets;
