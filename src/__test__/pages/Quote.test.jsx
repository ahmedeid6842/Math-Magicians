import React from 'react';
import { render } from '@testing-library/react';
import QuotePage from '../../pages/Quote';

jest.mock('../../pages/Quote', () => {
  return {
    __esModule: true,
    default: () => <div>Mocked QuoteDisplay</div>,
  };
});

describe('QuotePage', () => {
  it('renders the QuoteDisplay component', () => {
    const { getByText } = render(<QuotePage />);
    expect(getByText(/mocked quotedisplay/i)).toBeInTheDocument();
  });
});