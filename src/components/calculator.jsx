import {
  Row, Col, Button, Form,
} from 'react-bootstrap';
import PropTypes from 'prop-types';

function ButtonPanel({ variant, text }) {
  return (
    <Col>
      <Button
        className="w-100 p-4 border-secondary"
        variant={`${variant}`}
      >
        {text}
      </Button>
    </Col>
  );
}

ButtonPanel.propTypes = {
  variant: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

function Calculator() {
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
        <ButtonPanel variant="light" text="AC" />
        <ButtonPanel variant="light" text="+/-" />
        <ButtonPanel variant="light" text="%" />
        <ButtonPanel variant="warning" text="/" />
      </Row>
      <Row className="m-3">
        <ButtonPanel variant="light" text="7" />
        <ButtonPanel variant="light" text="8" />
        <ButtonPanel variant="light" text="9" />
        <ButtonPanel variant="warning" text="x" />
      </Row>
      <Row className="m-3">
        <ButtonPanel variant="light" text="4" />
        <ButtonPanel variant="light" text="5" />
        <ButtonPanel variant="light" text="6" />
        <ButtonPanel variant="warning" text="-" />
      </Row>
      <Row className="m-3">
        <ButtonPanel variant="light" text="1" />
        <ButtonPanel variant="light" text="2" />
        <ButtonPanel variant="light" text="3" />
        <ButtonPanel variant="warning" text="+" />
      </Row>
      <Row className="m-3">
        <Col xs={6}>
          <Button className="w-100 p-4 border-secondary" variant="light">
            0
          </Button>
        </Col>
        <ButtonPanel variant="light" text="." />
        <ButtonPanel variant="warning" text="=" />
      </Row>
    </div>
  );
}

export default Calculator;
