import { useState } from 'react';
import {
  Row, Col, Button, Form,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

function ButtonPanel({ variant, text, onClick }) {
  return (
    <Col>
      <Button
        className="w-100 p-4 border-secondary"
        variant={`${variant}`}
        onClick={onClick}
      >
        {text}
      </Button>
    </Col>
  );
}

ButtonPanel.propTypes = {
  variant: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

function Calculator() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const clickHandler = (e) => {
    setState((prevState) => calculate(prevState, e.target.textContent));
  };

  const { total, next, operation } = state;

  return (
    <div className="container">
      <Row className="m-3">
        <Col>
          <Form.Control
            dir="rtl"
            className="bg-secondary text-right"
            readOnly
            value={`${total || ''} ${operation || ''} ${next || ''}`}
            size="lg"
          />
        </Col>
      </Row>
      <Row className="m-3">
        <ButtonPanel variant="light" text="AC" onClick={clickHandler} />
        <ButtonPanel variant="light" text="+/-" onClick={clickHandler} />
        <ButtonPanel variant="light" text="%" onClick={clickHandler} />
        <ButtonPanel variant="warning" text="÷" onClick={clickHandler} />
      </Row>
      <Row className="m-3">
        <ButtonPanel variant="light" text="7" onClick={clickHandler} />
        <ButtonPanel variant="light" text="8" onClick={clickHandler} />
        <ButtonPanel variant="light" text="9" onClick={clickHandler} />
        <ButtonPanel variant="warning" text="x" onClick={clickHandler} />
      </Row>
      <Row className="m-3">
        <ButtonPanel variant="light" text="4" onClick={clickHandler} />
        <ButtonPanel variant="light" text="5" onClick={clickHandler} />
        <ButtonPanel variant="light" text="6" onClick={clickHandler} />
        <ButtonPanel variant="warning" text="-" onClick={clickHandler} />
      </Row>
      <Row className="m-3">
        <ButtonPanel variant="light" text="1" onClick={clickHandler} />
        <ButtonPanel variant="light" text="2" onClick={clickHandler} />
        <ButtonPanel variant="light" text="3" onClick={clickHandler} />
        <ButtonPanel variant="warning" text="+" onClick={clickHandler} />
      </Row>
      <Row className="m-3">
        <Col xs={6}>
          <Button
            className="w-100 p-4 border-secondary"
            variant="light"
            onClick={clickHandler}
          >
            0
          </Button>
        </Col>
        <ButtonPanel variant="light" text="." onClick={clickHandler} />
        <ButtonPanel variant="warning" text="=" onClick={clickHandler} />
      </Row>
    </div>
  );
}

export default Calculator;
