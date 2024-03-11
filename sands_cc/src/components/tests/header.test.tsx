import { render, screen } from '@testing-library/react';
import { Header } from '../header';
import '@testing-library/jest-dom';

describe('Header', () => {
  beforeEach(() => {
    render(<Header />);
  });

  it('Should render header image', () => {
    const headImg = screen.getByAltText(
      /Steel and Scale logo of a pink dragon head emerging from a city skyline/i
    );
    expect(headImg).toBeVisible();
  });

  it('Should render header text', () => {
    const topText = screen.getByText(/Steel & Scale/i);
    const bottomText = screen.getByText(/Character Creator/i);

    expect(topText).toBeVisible();
    expect(bottomText).toBeVisible();
  });
});
