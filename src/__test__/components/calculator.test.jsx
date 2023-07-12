import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from '../../components/calculator';

describe('Calculator', () => {
  it('renders the calculator component', () => {
    const { getByText } = render(<Calculator />);
    expect(getByText(/ac/i)).toBeInTheDocument();
  });

  it('updates the display when a button is clicked', () => {
    const { getByText } = render(<Calculator />);
    const button = getByText(/1/i);
    fireEvent.click(button);
    expect(getByText(/1/i)).toBeInTheDocument();
  });

  it('performs basic arithmetic operations', () => {
    const { getByText, getByRole } = render(<Calculator />);
    const button1 = getByText(/1/i);
    const button2 = getByText(/2/i);
    const addButton = getByRole('button', { name: '+' });
    const equalsButton = getByText(/=/i);
    fireEvent.click(button1);
    fireEvent.click(addButton);
    fireEvent.click(button2);
    fireEvent.click(equalsButton);
    expect(getByText(/3/i)).toBeInTheDocument();
  });
});
