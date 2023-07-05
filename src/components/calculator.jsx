import { Component } from 'react';
import {
  Row, Col, Button, Form,
} from 'react-bootstrap';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <Row className="m-3">
          <Col>
            <Form.Control
              dir="rtl"
              className="bg-secondary text-right"
              readOnly
              value="0"
              size="lg"
            />
          </Col>
        </Row>
        <Row className="m-3">
          <Col>
            <Button className="w-100 p-4 border-secondary" variant="light">
              AC
            </Button>
          </Col>
          <Col>
            <Button className="w-100 p-4 border-secondary" variant="light">
              +/-
            </Button>
          </Col>
          <Col>
            <Button className="w-100 p-4 border-secondary" variant="light">
              %
            </Button>
          </Col>
          <Col>
            <Button className="w-100 p-4 border-secondary" variant="warning">
              /
            </Button>
          </Col>
        </Row>
        <Row className="m-3">
          <Col>
            <Button className="w-100 p-4 border-secondary" variant="light">
              7
            </Button>
          </Col>
          <Col>
            <Button className="w-100 p-4 border-secondary" variant="light">
              8
            </Button>
          </Col>
          <Col>
            <Button className="w-100 p-4 border-secondary" variant="light">
              9
            </Button>
          </Col>
          <Col>
            <Button className="w-100 p-4 border-secondary" variant="warning">
              x
            </Button>
          </Col>
        </Row>
        <Row className="m-3">
          <Col>
            <Button className="w-100 p-4 border-secondary" variant="light">
              4
            </Button>
          </Col>
          <Col>
            <Button className="w-100 p-4 border-secondary" variant="light">
              5
            </Button>
          </Col>
          <Col>
            <Button className="w-100 p-4 border-secondary" variant="light">
              6
            </Button>
          </Col>
          <Col>
            <Button className="w-100 p-4 border-secondary" variant="warning">
              -
            </Button>
          </Col>
        </Row>
        <Row className="m-3">
          <Col>
            <Button className="w-100 p-4 border-secondary" variant="light">
              1
            </Button>
          </Col>
          <Col>
            <Button className="w-100 p-4 border-secondary" variant="light">
              2
            </Button>
          </Col>
          <Col>
            <Button className="w-100 p-4 border-secondary" variant="light">
              3
            </Button>
          </Col>
          <Col>
            <Button className="w-100 p-4 border-secondary" variant="warning">
              +
            </Button>
          </Col>
        </Row>
        <Row className="m-3">
          <Col>
            <Button className="w-100 p-4 border-secondary" variant="light">
              0
            </Button>
          </Col>
          <Col xs={6}>
            <Button className="w-100 p-4 border-secondary" variant="light">
              .
            </Button>
          </Col>
          <Col>
            <Button className="w-100 p-4 border-secondary" variant="warning">
              =
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Calculator;
