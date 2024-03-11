import { render, screen } from '@testing-library/react';
import { Resources } from '../stats';
import '@testing-library/jest-dom';

describe('Resources', () => {
  beforeEach(() => {
    render(<Resources />);
  });

  it('Should render', () => {
    expect(screen.getByText(/HP/i)).toBeVisible;
    expect(screen.getByText(/Energy/i)).toBeVisible;
    expect(screen.getByText(/Destiny/i)).toBeVisible;

    expect(screen.getByText(/20/)).toBeVisible;
    expect(screen.getAllByText(/4/).length).toEqual(2);
  });
});
