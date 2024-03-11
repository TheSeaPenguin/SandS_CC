import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { InfoBox } from '../info-box';

describe('Info-box', () => {
  it('Should render info-icon', () => {
    render(<InfoBox information={'Info is here!'} />);

    const infoIcon = screen.getByTestId(/InfoOutlinedIcon/i);
    expect(infoIcon).toBeVisible();
  });

  it('Should render content', () => {
    render(<InfoBox information={'Info is here!'} />);

    const infoIcon = screen.getByText(/Info is here!/i);
    expect(infoIcon).toBeVisible();
  });
});
