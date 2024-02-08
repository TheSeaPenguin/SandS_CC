import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  });
  it('Should render the header', () => {
    const headerElement = screen.getByText(/Steel & Scale/i);
    expect(headerElement).toBeVisible();
  });

  it.each([
    'Grid_Container',
    'Grid_LeftColumn',
    'Grid_CenterColumn',
    'Grid_RightColumn'
  ])('Should render the %s', (gridName) => {
    const grid = screen.getByTestId(gridName);
    expect(grid).toBeInTheDocument();
  });

  it.skip('Should render the footer', () => {
    const footerElement = screen.getByText(/Steel & Scale/i);
    expect(footerElement).toBeVisible();
  });
});
