import React from 'react';
import { AccordionContainer } from '../accordion-container';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

function callRender(startOpen: boolean) {
  const mockAccordionProps = {
    title: 'A given title',
    defaultOpen: startOpen,
    children: <button>Click</button>
  };

  render(<AccordionContainer {...mockAccordionProps} />);
}
describe('Accordion Container', () => {
  it('Should render title', () => {
    callRender(true);
    const title = screen.getByText(/A given title/i);
    expect(title).toBeVisible();
  });

  it('Should render content', () => {
    callRender(true);
    const content = screen.getByRole('button', { name: 'Click' });
    expect(content).toBeVisible();
  });

  it('Should start closed', () => {
    callRender(false);
    const content = screen.queryByRole('button', { name: 'Click' });
    expect(content).not.toBeInTheDocument();
  });
});
