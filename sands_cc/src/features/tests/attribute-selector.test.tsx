import { render, screen } from '@testing-library/react';
import { AttributeSelector } from '../stats';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

// TODO: Fix accompanying errors with state updates
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

    expect(screen.getAllByRole('button').length).toEqual(8);
    expect(screen.getAllByRole('combobox').length).toEqual(4);

    expect(screen.getAllByText(/Modifier/i).length).toEqual(4);
    expect(screen.getAllByText(/Total/i).length).toEqual(4);

    expect(screen.getAllByText('+ 0').length).toEqual(4);
    expect(screen.getAllByText('0').length).toEqual(4);
  });

  it('Should only show values attribute values not already selected', async () => {
    const User = userEvent.setup();
    const comboBoxes = screen.getAllByRole('combobox');

    for (let i = 0; i < comboBoxes.length; i++) {
      await User.click(comboBoxes[i]);
      expect(screen.getByRole('listbox')).toBeVisible();
      const listValues = screen.getAllByRole('option');
      expect(listValues.length).toEqual(5 - i);
      await User.click(listValues[1]);
    }
  });

  it('Should update improvement point modifiers', async () => {
    const User = userEvent.setup();
    let improvementPointsText = screen.getByTestId(
      'text-improvementPointsValue'
    ).textContent;
    const plusButton = screen.getAllByRole('button', { name: '+' })[0];
    const minusButton = screen.getAllByRole('button', { name: '-' })[0];

    expect(improvementPointsText).toEqual('0/3');

    for (let i = 1; i < 4; i++) {
      await User.click(plusButton);
      improvementPointsText = screen.getByTestId(
        'text-improvementPointsValue'
      ).textContent;
      expect(improvementPointsText).toEqual(i + '/3');
    }

    await User.click(plusButton);
    improvementPointsText = screen.getByTestId(
      'text-improvementPointsValue'
    ).textContent;
    expect(improvementPointsText).not.toEqual('4/3');

    for (let i = 2; i > -1; i--) {
      await User.click(minusButton);
      improvementPointsText = screen.getByTestId(
        'text-improvementPointsValue'
      ).textContent;
      expect(improvementPointsText).toEqual(i + '/3');
    }

    await User.click(minusButton);
    improvementPointsText = screen.getByTestId(
      'text-improvementPointsValue'
    ).textContent;
    expect(improvementPointsText).not.toEqual('-1/3');
  });
});
