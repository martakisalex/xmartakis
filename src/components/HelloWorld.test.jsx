import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HelloWorld from './HelloWorld';

describe('HelloWorld component', () => {
  it('renders the correct text', () => {
    render(<HelloWorld />);
    const headingElement = screen.getByText(/hello, world!/i);
    expect(headingElement).toBeInTheDocument();
  });
});
