import { AttributeSelectModBox } from '../attribute-select-mod-box';
import '@testing-library/jest-dom';
import { act, cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Attribute-select-mod-box', () => {
  const user = userEvent.setup();

  const mockImprovementPointSetter = jest.fn();

  const mockProps = {
    id: 'mockBox',
    title: 'Mock:',
    options: [
      { id: -1, displayValue: '-1' },
      { id: 2, displayValue: '2' },
      { id: 3, displayValue: '3' }
    ],
    optionsAlreadySelected: [2],
    optionSelectedSetter: jest.fn(),
    vertical: true,
    width: '25%',
    height: '3vh',
    information: 'Description here',
    improvementPointSetter: mockImprovementPointSetter,
    spentImprovementPoints: 1
  };

  beforeEach(() => {
    render(<AttributeSelectModBox {...mockProps} />);
  });

  afterEach(() => {
    cleanup();
  });

  it('Should render', () => {
    expect(screen.getByText(/Mock/i)).toBeVisible();
    expect(screen.getByDisplayValue(/-1/)).toBeInTheDocument;

    expect(screen.getByRole('button', { name: '+' })).toBeVisible();
    expect(screen.getByRole('button', { name: '-' })).toBeVisible();

    expect(screen.getByText(/Modifier/i)).toBeVisible();
    expect(screen.getByTestId(/mockBoxModiferValue/i).innerHTML).toEqual('+ 0');

    expect(screen.getByText(/Total/i)).toBeVisible();
    expect(screen.getByTestId(/mockBoxTotalValue/i).innerHTML).toEqual('0');
  });

  it('Should increment mod counter', async () => {
    const incrementButton = screen.getByRole('button', { name: '+' });
    await act(async () => await user.click(incrementButton));

    expect(mockImprovementPointSetter).toBeCalledWith('increment');
    expect(mockImprovementPointSetter).toHaveBeenCalledTimes(1);
    expect(screen.getByTestId(/mockBoxModiferValue/i).innerHTML).toEqual('+ 1');
    expect(screen.getByTestId(/mockBoxTotalValue/i).innerHTML).toEqual('1');
  });
  it('Should decrement mod counter', async () => {
    const incrementButton = screen.getByRole('button', { name: '+' });
    const decrementButton = screen.getByRole('button', { name: '-' });

    await act(async () => await user.click(incrementButton));
    expect(screen.getByTestId(/mockBoxModiferValue/i).innerHTML).toEqual('+ 1');
    expect(screen.getByTestId(/mockBoxTotalValue/i).innerHTML).toEqual('1');

    await act(async () => await user.click(decrementButton));
    expect(mockImprovementPointSetter).toBeCalledWith('decrement');
    expect(mockImprovementPointSetter).toHaveBeenCalledTimes(2);
    expect(screen.getByTestId(/mockBoxModiferValue/i).innerHTML).toEqual('+ 0');
    expect(screen.getByTestId(/mockBoxTotalValue/i).innerHTML).toEqual('0');
  });
  it('Should remove already selected options from dropdown', async () => {
    const dropDown = screen.getByLabelText(/-1/);
    await user.click(dropDown);

    const options = screen.getAllByRole('option');
    expect(options.length).toEqual(2);
    expect(screen.queryByText('2')).toBeNull();
  });

  it('Should not allow counter to be < 0', async () => {
    const decrementButton = screen.getByRole('button', { name: '-' });

    expect(screen.getByTestId(/mockBoxModiferValue/i).innerHTML).toEqual('+ 0');
    expect(screen.getByTestId(/mockBoxTotalValue/i).innerHTML).toEqual('0');

    await act(async () => await user.click(decrementButton));

    expect(screen.getByTestId(/mockBoxModiferValue/i).innerHTML).toEqual('+ 0');
    expect(screen.getByTestId(/mockBoxTotalValue/i).innerHTML).toEqual('0');
  });

  it.skip('Should not allow counter to be > available points', async () => {
    const incrementButton = screen.getByRole('button', { name: '+' });

    await act(async () => await user.click(incrementButton));
    await act(async () => await user.click(incrementButton));
    await act(async () => await user.click(incrementButton));
    await act(async () => await user.click(incrementButton));
    expect(screen.getByTestId(/mockBoxModiferValue/i).innerHTML).toEqual('+ 4');
    expect(screen.getByTestId(/mockBoxTotalValue/i).innerHTML).toEqual('4');

    await act(async () => await user.click(incrementButton));
    expect(mockImprovementPointSetter).toHaveBeenCalledTimes(5);
    expect(screen.getByTestId(/mockBoxModiferValue/i).innerHTML).toEqual('+ 4');
    expect(screen.getByTestId(/mockBoxTotalValue/i).innerHTML).toEqual('4');
  });
});
