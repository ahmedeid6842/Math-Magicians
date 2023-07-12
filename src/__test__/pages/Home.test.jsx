import React from 'react';
import { render } from '@testing-library/react';
import Home from '../../pages/Home';

describe('Home', () => {
  it('renders correctly', () => {
    const { container } = render(<Home />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('displays the welcome message', () => {
    const { getByText } = render(<Home />);
    expect(getByText(/welcome to math magicians!/i)).toBeInTheDocument();
  });

  it('displays the description', () => {
    const { getByText } = render(<Home />);
    expect(getByText(/math magicians is a website/i)).toBeInTheDocument();
  });
});
