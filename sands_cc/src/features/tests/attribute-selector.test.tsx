import { render, screen } from '@testing-library/react';
import { AttributeSelector } from '../stats';
import '@testing-library/jest-dom';
describe('Attribute-selector', () => {
  const mockProps = {
    vertical: true,
    spacing: 2
  };

  beforeEach(() => {
    render(<AttributeSelector {...mockProps} />);
  });

  it('Should render', () => {
    expect(screen.getByText(/Improvement Points Spent/i)).toBeVisible();
    expect(screen.getByText('0/3')).toBeVisible();

    expect(screen.getByText(/Earth/i)).toBeVisible();
    expect(screen.getByText(/Water/i)).toBeVisible();
    expect(screen.getByText(/Fire/i)).toBeVisible();
    expect(screen.getByText(/Air/i)).toBeVisible();

    expect(screen.getAllByRole('button').length).toEqual(12);
    expect(screen.getAllByText(/Modifier/i).length).toEqual(4);
    expect(screen.getAllByText(/Total/i).length).toEqual(4);

    expect(screen.getAllByText('+ 0').length).toEqual(4);
    expect(screen.getAllByText('0').length).toEqual(4);
  });
});
