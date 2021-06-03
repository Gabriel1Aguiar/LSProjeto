import { Card, Col } from "react-bootstrap"

function Prod({ prod }) {
    return (
      <Col md={4} sm={6} lg={4} xl={3} className="mb-3">
        <Card>
          <Card.Header className="text-center font-weight-bold">
            <span>{prod.name}</span>
          </Card.Header>
          <Card.Body className="p-0">
            <img src={prod.image} alt={prod.name} className="w-100" />
          </Card.Body>
        </Card>
      </Col>
    )
}

export default Prod