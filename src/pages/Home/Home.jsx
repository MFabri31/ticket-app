import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Container>
        <Row className="flex-column justify-content-center align-items-center my-5 py-5 bg-light">
          <Col className=" text-center" md={6}>
            <h1 className="lead display-4 mb-5">Ticket App</h1>
            <Link className="btn btn-outline-dark" to="/tickets">
              Ver tickets
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
