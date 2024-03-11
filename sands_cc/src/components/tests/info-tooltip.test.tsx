import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { InfoTooltip } from '../info-tooltip';
import { userEvent } from '@testing-library/user-event';

describe('Info-tooltip', () => {
  const placeholderInfo = 'This is a tooltip';

  it('Should render', () => {
    const user = userEvent.setup();
    render(
      <InfoTooltip information={placeholderInfo} direction={'right'}>
        <div>Placeholder</div>
      </InfoTooltip>
    );

    user.hover(screen.getByText(/Placeholder/i));
    waitFor(() => expect(screen.getByRole('tooltip')).toBeInTheDocument());
  });

  it('Should display content', () => {
    const user = userEvent.setup();
    render(
      <InfoTooltip information={placeholderInfo} direction={'right'}>
        <div>Placeholder</div>
      </InfoTooltip>
    );

    user.hover(screen.getByText(/Placeholder/i));
    waitFor(() => expect(screen.getByText(/This is a tooltip/i)).toBeVisible());
  });
});
