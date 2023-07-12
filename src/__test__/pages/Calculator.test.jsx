import React from 'react';
import { render } from '@testing-library/react';
import CalculatorPage from '../../pages/Calculator';

describe('CalculatorPage', () => {
  it('renders correctly', () => {
    const { container } = render(<CalculatorPage />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('displays the title', () => {
    const { getByText } = render(<CalculatorPage />);
    expect(getByText(/let's do some math/i)).toBeInTheDocument();
  });
});
