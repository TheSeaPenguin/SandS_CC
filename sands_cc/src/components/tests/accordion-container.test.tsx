import React from 'react';
import { AccordionContainer } from '../accordion-container';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Accordion Container', () => {
  beforeEach(() => {
    const mockAccordionProps = {
      title: 'A given title',
      defaultOpen: true,
      children: <button>Click</button>
    };

    render(<AccordionContainer {...mockAccordionProps} />);
  });

  it('Should render title', () => {
    const title = screen.getByText(/A given title/i);
    expect(title).toBeVisible();
  });

  it('Should render content', () => {
    const content = screen.getByRole('button', { name: 'Click' });
    expect(content).toBeVisible();
  });
});
