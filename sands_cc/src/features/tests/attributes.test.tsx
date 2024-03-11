import { render, screen } from '@testing-library/react';
import { Attributes } from '../stats';
import '@testing-library/jest-dom';

describe('Attributes', () => {
  const mockProps = {
    vertical: false,
    spacing: 2
  };
  beforeEach(() => {
    render(<Attributes {...mockProps} />);
  });

  it('Should render', () => {
    expect(screen.getByText(/Earth/i)).toBeVisible();
    expect(screen.getByText(/Water/i)).toBeVisible();
    expect(screen.getByText(/Fire/i)).toBeVisible();
    expect(screen.getByText(/Air/i)).toBeVisible();

    expect(screen.getAllByText('0').length).toEqual(4);
  });
});
